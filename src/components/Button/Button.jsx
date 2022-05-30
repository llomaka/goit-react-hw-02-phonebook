import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Button.module.css';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <button
        className={styles.button}
        type={this.props.type}
        name={this.props.text}
        onClick={this.props.handleClick}
      >
        {this.props.text}
      </button>
    )
  }
}
