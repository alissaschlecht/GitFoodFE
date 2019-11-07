import React from 'react';
import styles from './button.module.scss';

const Button = (props) => {
  const { text, color, onClick } = props;
  return(
    <button
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
    >{ text }</button>
  )
}

export default Button;