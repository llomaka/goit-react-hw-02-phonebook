import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export default class Filter extends Component {
  static propTypes = {
    state: PropTypes.shape({
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string,
        })),
      filter: PropTypes.string.isRequired,
    }),
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <h2 className={styles.header}>Find contacts by name</h2>
        <input
          className={styles.input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          onChange={this.props.onChange}
          value={this.props.state.filter}
          />
      </>
    )
  }
}
