import React from 'react'

import styles from './styles.module.scss';


export function Card({name, flags, population, region, capital}: any) {

  return (
    <section className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={flags.png} alt={name.common}/>
        </div>
        <div className={styles.countryData}>
            <h2>{name.common}</h2>
            <ul>
                <li><span>Population:</span> {population}</li>
                <li><span>Region:</span> {region}</li>
                <li><span>Capital:</span> {capital}</li>
            </ul>
        </div>
    </section>
  )
}