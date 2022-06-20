import React from 'react'
import {IoIosSearch} from 'react-icons/io';
import { IconContext } from 'react-icons';

import styles from './searchBar.module.scss';

type propTypes = {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({setFilter}: propTypes) {

  const [searchData, setSearchData] = React.useState<string>('');

  function handleForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFilter(`/name/${searchData}`);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(event.target.value.trim().toLowerCase())
  }

  return (
    <IconContext.Provider value={{size: '1.3rem'}}>
        <form className={styles.container} onSubmit={handleForm}>
            <button type="submit"><IoIosSearch/></button>
            <label htmlFor="search"></label>
            <input type="search" placeholder="Search for a country..." name="q" id="search" onChange={handleChange}/>
        </form>
    </IconContext.Provider>
  )
}
