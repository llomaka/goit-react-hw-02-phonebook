import React, { Component } from "react";
// import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export default class ContactList extends Component {

  render() {
    console.log(this.props.state);
    return (
      <ul>
        {this.props.state.contacts.map(contact =>
          (<li key={contact.id}>{contact.name}</li>)
          )}
      </ul>
    )
  }
}
