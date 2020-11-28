import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Notification.module.css";

const Notification = ({ alert, delay }) => {
  return (
    <CSSTransition
    in={alert}
    classNames={styles}
    timeout={1000}
    onEntered={delay}
    unmountOnExit
    >
      <div className={styles.notification}>
        <p>Contact already exists!</p>
      </div>
    </CSSTransition>
  );
};
export default Notification;
