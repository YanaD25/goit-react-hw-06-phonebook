import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Section from "../Section/Section";
import styles from "../Section/Section.module.css";
import "./GlobalStyles.css";
import Notification from "../Notification/Notification";
export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    alert: false,
  };
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  removeContact = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: [...updatedContacts],
    });
  };

  addContact = (contact) => {
    const newName = contact.name;
    const names = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    if (names.includes(newName.toLowerCase())) {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 3000);
    } else {
      this.setState((state) => ({
        contacts: [...state.contacts, contact],
      }));
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  render() {
    const { contacts, alert } = this.state;
    return (
      <>
        <Section title="Phonebook" />
        <Notification alert={alert} />
        <ContactForm addContact={this.addContact} />
        <div>
          <h2 className={styles.contactsTitle}>Contacts</h2>
          {contacts.length > 1 && <Filter onChange={this.handleChange} />}
          {contacts.length ? (
            <ContactList
              contacts={this.getVisibleContacts()}
              onRemove={this.removeContact}
            />
          ) : (
            <p className={styles.sectionText}>There are no contacts here</p>
          )}
        </div>
      </>
    );
  }
}
