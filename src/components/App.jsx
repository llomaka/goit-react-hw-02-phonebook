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
    this.setState(prevState => ({
      ...prevState,
      name: event.target.value,
    }))
  }

  addContact = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      const newArray = [...prevState.contacts];
      newArray.push({
        id: nanoid(),
        name: prevState.name,
      });

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
          state={this.state}
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
