import React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import styles from "./Pagination.module.css";

export const Pagination = ({ next, previous }) => {
  return (
    <ul className={styles.list}>
      <li>
        {previous ? (
          <button className={styles.activeButton} onClick={previous}>
            <BsArrowLeftCircle size={40} />
          </button>
        ) : (
          <button className={styles.disableButton}></button>
        )}
      </li>
      <li>
        {next ? (
          <button className={styles.activeButton} onClick={next}>
            <BsArrowRightCircle size={40} />
          </button>
        ) : (
          <button className={styles.disableButton}></button>
        )}
      </li>
    </ul>
  );
};
