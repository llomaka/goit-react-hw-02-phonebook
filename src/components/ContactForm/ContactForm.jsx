import Button from "components/Button/Button";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  onInputKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.props.handleClick();
      event.target.value = '';
    }
  }

  render() {
    return (
      <form
        className={styles.form}
        autoComplete="on"
      >
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.onChange}
          onKeyPress={this.onInputKeyPress}
        />
        <Button
          text="Add contact"
          handleClick={this.props.handleClick}
        />
      </form>
    )
  }
}
