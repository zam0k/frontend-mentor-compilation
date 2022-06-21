import React from 'react'
import {IoIosSearch} from 'react-icons/io';
import { IconContext } from 'react-icons';

import styles from './styles.module.scss';

type propTypes = {
  setCountries: any
  setError: any
}

export function SearchBar({setCountries}: propTypes) {

  const [searchData, setSearchData] = React.useState<string>('');

  function handleForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(event.target.value.trim().toLowerCase())
  }

  return (
    <IconContext.Provider value={{size: '1.3rem'}}>
        <form className={styles.container} onSubmit={handleForm}>
            <button type="submit"><IoIosSearch/></button>
            <label htmlFor="search"></label>
            <input 
              type="search" 
              id="search" 
              placeholder="Search for a country..." 
              name="q" 
              onChange={handleChange}/>
            {searchData}
        </form>
    </IconContext.Provider>
  )
}
