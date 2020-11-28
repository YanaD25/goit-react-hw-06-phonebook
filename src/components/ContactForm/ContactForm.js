import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Notification from "../Notification/Notification.js";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    alert: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, alert } = this.state;
    const { items } = this.props.contacts;
    const repeat = items.find((item) => item.name === name);
    if (repeat) {
      this.reset();
      return this.setState({ alert: !alert });
    }
    const item  = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addContact(item);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
      alert: false,
    });
  };

  render() {
    const { name, number, alert } = this.state;
    const delay = () => setTimeout(this.setState({ alert: !alert }), 1000);
    return (
      <>
        <Notification alert={alert} delay={delay} />
        <form className={styles.form}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                className={styles.formInput}
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
                className={styles.formInput}
                type="tel"
                value={number}
                name="number"
                placeholder="enter the number..."
                onChange={this.handleChange}
              />
            </label>
            <button
              className={styles.formButton}
              type="submit"
              disabled={!name.length || !number.length}
            >
              Add contact
            </button>
          </form>
        </form>
      </>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  addContact: contactsActions.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
