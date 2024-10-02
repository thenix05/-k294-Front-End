import React from 'react'
import styles from "./Button.module.css";

export default function Button({text, variant}) {
  return(
    <div>
      <button className={styles[variant]}>{text}</button>
    </div>
  );
}