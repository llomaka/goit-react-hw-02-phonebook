import Button from "components/Button/Button";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <form autoComplete="on">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.onChange}
        />
        <Button
          text="Add contact"
          handleClick={this.props.handleClick}
          input={this.props.state.name}
        />
      </form>
    )
  }
}
