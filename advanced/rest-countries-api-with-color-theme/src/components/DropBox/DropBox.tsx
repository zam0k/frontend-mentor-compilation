import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

import styles from './dropBox.module.scss';

export function DropBox() {
  return (
    <div className={styles.container}>
      <button className={styles.filter}>Filter by Region<IoIosArrowDown/></button>
      <div className={styles.content}>
            <a href="#">Africa</a>
            <a href="#">America</a>
            <a href="#">Asia</a>
            <a href="#">Europe</a>
            <a href="#">Oceania</a>
      </div>
    </div>
  )
}
