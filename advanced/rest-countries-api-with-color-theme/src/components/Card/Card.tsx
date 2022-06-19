import React from 'react'

import styles from './card.module.scss';
export function Card() {
  return (
    <section className={styles.container}>
        <img src={require("./licensed-image.jpg")}/>
        <div className={styles.countryData}>
            <h2>Germany</h2>
            <ul>
                <li><span>Population:</span> 811111111</li>
                <li><span>Region:</span> Europe</li>
                <li><span>Capital:</span> Berlin</li>
            </ul>
        </div>
    </section>
  )
}