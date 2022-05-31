import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import styles from './App.module.css';
import Filter from "./Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  onChange = (event) => {
    const { value } = event.target;
      this.setState(prevState => ({
        ...prevState,
        filter: value.trim(),
      }));
  }

  addContact = ({name, number}) => {
      this.setState(prevState => {
        const newArray = [...prevState.contacts];
        newArray.push({
          id: nanoid(),
          name: name,
          number: number,
        });

        return {
          contacts: newArray,
          filter: prevState.filter,
        }
      });
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
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
          padding: 20,
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
          state={this.state}
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
