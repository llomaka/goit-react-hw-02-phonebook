import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  onChange = (event) => {
      this.setState(prevState => ({
        ...prevState,
        filter: event.target.value.trim(),
      }));
  }

  addContact = (event) => {
    if (!document.querySelector("#contact-name").value && document.querySelector("#contact-number").value) {
      alert("Please provide the contact's name!");
      return false;
    }
    if (document.querySelector("#contact-name").value && !document.querySelector("#contact-number").value)
      return alert("Please provide the contact's phone number!");
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === document.querySelector("#contact-name").value.toLowerCase())) {
      event.preventDefault();
      alert(`${document.querySelector("#contact-name").value} is already in Contacts List!`);
      return false;
    }
    if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(document.querySelector("#contact-name").value))
      return alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan");
    if (!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(document.querySelector("#contact-number").value))
      return alert("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +");
      this.setState(prevState => {
        const newArray = [...prevState.contacts];
        newArray.push({
          id: nanoid(),
          name: document.querySelector("#contact-name").value,
          number: document.querySelector("#contact-number").value,
        });
        document.querySelectorAll('#contact-form input').forEach(input => input.value = '');
        return {
          contacts: newArray,
          filter: prevState.filter,
        }
      });
  }

  deleteContact = (event) => {
    if (!event.target.closest('li')) return;
    if (!event.target.closest('li').id) return;
    this.setState(prevState => {
      const newArray = [...prevState.contacts];
      const index = newArray.findIndex(contact => contact.id === event.target.closest('li').id);
      if (index === -1) return;
      newArray.splice(index, 1);
      return {
        contacts: newArray,
        filter: prevState.filter,
      }
    });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm
          handleClick={this.addContact}
        />
        <h2 className={styles.subheader}>Contacts</h2>
        <Filter
          onChange={this.onChange}
        />
        <ContactList
          state={this.state}
          handleClick={this.deleteContact}
        />
      </div>
    );
  }
}
