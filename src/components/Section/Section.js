import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={styles}
        unmountOnExit
      >
        <h2 className={styles.section}>{title}</h2>
      </CSSTransition>
     {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
