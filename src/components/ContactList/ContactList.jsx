import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Button";
import styles from "./ContactList.module.css";

export default class ContactList extends Component {
  static propTypes = {
    state: PropTypes.shape({
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string,
        })),
      filter: PropTypes.string,
    }),
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.state.filter ? (
          this.props.state.contacts
            .filter(contact => contact.name.toLowerCase().includes(this.props.state.filter.toLowerCase()))
            .map(contact =>
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
                handleClick={this.props.handleClick}
              />
            </li>)
            )
        ) : (
          this.props.state.contacts.map(contact =>
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
              handleClick={this.props.handleClick}
            />
          </li>)
          )
        )}
      </ul>
    )
  }
}
