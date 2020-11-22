import React from "react";
import PropTypes from "prop-types";
import styles from './Filter.module.css'


const Filter = ({ onChange  }) => {
  return (
    <div className ={styles.filter}>
      Find contacts by name:
      <input type="text" name="filter" onChange ={onChange} />
    </div>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
