import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";


const ContactListItem = ({ name, number, onRemove }) => {
  return (
    
    <li className={styles.contactsItem}>
      <p className={styles.contactsText}>
        {name} : {number}
      </p>

      <button
        className={styles.contactsButton}
        type="button"
        onClick={onRemove}
      >
        ×
      </button>
    </li>
    
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ContactListItem;
