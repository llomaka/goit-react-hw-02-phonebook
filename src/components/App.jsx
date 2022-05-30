import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  };

  onChange = (event) => {
    // if (event.key === "Enter") return;
    // event.preventDefault();
    // const regex = new RegExp("^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$");
    // if (!regex.test(event.target.value)) {
    //   return window.alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan");
    // }
    if (event.target.name === "number") {
      this.setState(prevState => ({
        ...prevState,
        number: event.target.value,
      }));
    } else if ((event.target.name === "name")) {
      this.setState(prevState => ({
        ...prevState,
        name: event.target.value.trim(),
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        filter: event.target.value.trim(),
      }));
    }
  }

  addContact = (event) => {
    // event.preventDefault();
    if (!this.state.name || !this.state.number)
      return alert("Please provide Name and Number to add to the Contacts List!");
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === this.state.name.toLowerCase()))
      return alert("Contact with such name already exists in the Contacts List!");
    if (!this.state.name && this.state.number)
      return alert("Please provide the contact's name!");
    if (this.state.name && !this.state.number)
      return alert("Please provide the contact's phone number!");
    this.setState(prevState => {
      const newArray = [...prevState.contacts];
      newArray.push({
        id: nanoid(),
        name: prevState.name,
        number: prevState.number,
      });
      document.querySelectorAll('#contact-form input').forEach(input => input.value = '');
      return {
        contacts: newArray,
        name: '',
        number: ''
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
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm
          onChange={this.onChange}
          handleClick={this.addContact}
        />
        <h2 className={styles.subheader}>Contacts</h2>
        <Filter
          onChange={this.onChange}
          handleClick={this.addContact}
        />
        <ContactList
          state={this.state}
        />
      </div>
    );
  }
}
