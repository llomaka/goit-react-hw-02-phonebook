import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  onChange = (event) => {
    // if (event.key === "Enter") return;
    // event.preventDefault();
    // const regex = new RegExp("^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$");
    // if (!regex.test(event.target.value)) {
    //   return window.alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan");
    // }
    this.setState(prevState => ({
      ...prevState,
      name: event.target.value.trim(),
    }));
  }

  addContact = (event) => {
    // event.preventDefault();
    if (!this.state.name)
      return alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan");
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === this.state.name.toLowerCase())) { return alert("Contact with such name already exists in the Contacts List");
}
    this.setState(prevState => {
      const newArray = [...prevState.contacts];
      newArray.push({
        id: nanoid(),
        name: prevState.name,
      });
      document.querySelector('#contact-form input').value = '';
      return {
        contacts: newArray,
        name: ''
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
        <ContactList
          state={this.state}
        />
      </div>
    );
  }
}
