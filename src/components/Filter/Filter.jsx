import React, { Component } from "react";
// import propTypes from "prop-types";
import styles from "./Filter.module.css";

export default class Filter extends Component {
  render() {
    return (
      <>
        <h2 className={styles.header}>Find contacts by name</h2>
        <input
            className={styles.input}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.props.onChange}
          />
      </>
    )
  }
}
