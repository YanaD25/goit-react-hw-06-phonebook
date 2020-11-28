import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

const ContactList = ({ items, onRemove }) => {
  return (
    <div className={styles.contacts}>
      <TransitionGroup component="ul">
        {items.map(( item ) => (
          <CSSTransition
            key={item.id}
            classNames={styles}
            timeout={250}
            unmountOnExit
          >
            <li className={styles.contactsItem}>
              <p className={styles.contactsText}>
                {item.name} : {item.number}
              </p>

              <button
                className={styles.contactsButton}
                type="button"
                onClick={() => onRemove(item.id)}
              >
                ×
              </button>
            </li>
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

const mapStateToProps = (state) => {
  const visibleContacts = state.contacts.items.filter((item) =>
  item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
  return {
    items: visibleContacts,
  };
};

const mapDispatchToProps = {
  onRemove: contactsActions.removeContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
