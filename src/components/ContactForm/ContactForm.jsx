import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  };

  handleInputChange = (event) => {
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    const { handleClick } = this.props;
    return (
      <form
        className={styles.form}
        id="contact-form"
        autoComplete="on"
      >
        <div className={styles.fields}>
          <label className={styles.label} htmlFor="contact-name">Name *</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="contact-name"
            placeholder="John Smith"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </div>
        <div className={styles.fields}>
          <label className={styles.label} htmlFor="contact-number">Number *</label>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="contact-number"
            placeholder="050-123-23-23"
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </div>
        <Button
          text="Add contact"
          type="submit"
          handleClick={handleClick}
        />
      </form>
    )
  }
}
