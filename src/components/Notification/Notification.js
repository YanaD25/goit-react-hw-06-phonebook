import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Notification.module.css";

const Notification = ({ alert }) => {
  return (
    <CSSTransition
    in={alert}
    classNames={styles}
    timeout={400}
    unmountOnEnter
    unmountOnExit
    >
      <div className={styles.notification}>
        <p>Contact already exists!</p>
      </div>
    </CSSTransition>
  );
};
export default Notification;
