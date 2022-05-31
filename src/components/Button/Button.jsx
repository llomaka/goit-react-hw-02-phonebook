import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    handleClick: PropTypes.func
  };

  render() {
    const { text, name, type, color, handleClick } = this.props;
    return (
      <button
        className={color === "red" ? `${styles.button} ${styles.red}` : styles.button}
        type={type}
        name={name}
        onClick={handleClick}
      >
        {text}
      </button>
    )
  }
}
