import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const { text, type, color, handleClick } = this.props;
    return (
      <button
        className={color === "red" ? `${styles.button} ${styles.red}` : styles.button}
        type={type}
        name={text}
        onClick={handleClick}
      >
        {text}
      </button>
    )
  }
}
