import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export default class ContactList extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.state.contacts.map(contact =>
          (<li key={contact.id} className={styles.text}>{contact.name}: {contact.number}</li>)
          )}
      </ul>
    )
  }
}
