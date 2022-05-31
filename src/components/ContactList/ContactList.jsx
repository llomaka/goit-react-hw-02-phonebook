import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import styles from "./ContactList.module.css";

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        })).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, handleClick } = this.props;
    return (
      <ul>
        {contacts.map(contact =>
        (<li
          key={contact.id}
          id={contact.id}
          className={styles.item}
        >
          {contact.name}: {contact.number}
          <Button
            text="Delete"
            type="button"
            color="red"
            handleClick={() => handleClick(contact.id)}
          />
        </li>)
        )}
      </ul>
    )
  }
}
