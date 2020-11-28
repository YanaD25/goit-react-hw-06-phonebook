import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Section from "../Section/Section";
import styles from "../Section/Section.module.css";
import "./GlobalStyles.css";
import { connect } from "react-redux";
 class App extends Component { 

  render() {
    const {items} = this.props.contacts;
    return (
      <>
        <Section title="Phonebook" />
        <ContactForm />
        {items.length > 1 && <Filter />}
         <h2 className={styles.contactsTitle}>Contacts</h2>
         {items.length ?   
            <ContactList />           
           : (<p className={styles.sectionText}>There are no contacts here</p>
          )}
      </>
    );
  }
}

const mapStateToProps = (state) =>{
  return state;
}

export default connect(mapStateToProps)(App);


