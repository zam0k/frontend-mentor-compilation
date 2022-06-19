import React from 'react'
import {IoIosSearch} from 'react-icons/io';
import { IconContext } from 'react-icons';

import styles from './searchBar.module.scss';

export function SearchBar() {
  return (
    <IconContext.Provider value={{size: '1.3rem'}}>
        <form className={styles.container}>
            <button type="submit"><IoIosSearch/></button>
            <label htmlFor="search"></label>
            <input type="search" placeholder="Search for a country..." name="q" id="search"/>
        </form>
    </IconContext.Provider>
  )
}
