import React from 'react';
import styles from './header.module.scss';


const Header = ({user}) => {

  return (
    <div className={styles.header}>
      <h3>Git Food</h3>
      <p>{`${user.firstName} ${user.lastName}`}</p>
    </div>
  )
}

export default Header;