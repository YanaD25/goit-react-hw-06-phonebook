import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import styles from './ContactForm.module.css'

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addContact(contact);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className = {styles.form}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
            className ={styles.formInput}
              type="text"
              value={name}
              name="name"
              placeholder="enter the name..."
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Number:
            <input
            className ={styles.formInput}
              type="tel"
              value={number}
              name="number"
              placeholder="enter the number..."
              onChange={this.handleChange}
            />
          </label>
          <button className ={styles.formButton} type="submit" disabled={!name.length || !number.length}>
            Add contact
          </button>
        </form>
      </form>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
