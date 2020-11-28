import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

const Filter = ({ onChange }) => {
  return (
    <div className={styles.filter}>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        onChange={(e) => onChange(e.target.value)}
        id = "filterInput"
      />
    </div>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onChange: contactsActions.filterContact,
};
export default connect(null, mapDispatchToProps)(Filter);
