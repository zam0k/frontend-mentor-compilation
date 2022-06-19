import React from 'react'

import styles from './dropBox.module.scss';

export function DropBox() {
  return (
    <div className={styles.container}>
      <button>Filter by Region</button>
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
