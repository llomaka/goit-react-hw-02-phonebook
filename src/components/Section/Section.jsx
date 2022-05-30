import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css"

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <section className={styles.section}>
        <h2 className={styles.header}>{this.props.title}</h2>
        {this.props.children}
      </section>
    )
  }
}
