import React from 'react'
import { Card } from '../Card/Card'
import { SearchBar } from '../SearchBar/SearchBar';

import styles from './main.module.scss';
import { DropBox } from '../DropBox/DropBox';

export function Main() {
  return (
    <main className={styles.main}>
        <div className={styles.cardsGrid}>
            <div>
                <SearchBar/>
                <DropBox/>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </main>
  )
}
