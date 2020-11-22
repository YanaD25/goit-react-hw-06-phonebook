import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ContactList = ({ contacts, onRemove }) => {
  return (
    <div className={styles.contacts}>
      <TransitionGroup component="ul">
        {contacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            classNames={styles}
            timeout={250}
            unmountOnExit
          >
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onRemove={() => onRemove(id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  onRemove: PropTypes.func.isRequired,
};
export default ContactList;
