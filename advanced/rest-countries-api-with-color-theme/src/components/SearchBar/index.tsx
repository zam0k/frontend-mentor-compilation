import React from 'react'
import {IoIosSearch} from 'react-icons/io';
import { IconContext } from 'react-icons';

import styles from './styles.module.scss';
import { api } from '../../services/api';

type propTypes = {
  setCountries: any
  setError: any
  error: any
  setLoading: any
}

export function SearchBar({setCountries, setError, error, setLoading}: propTypes) {

  const [searchData, setSearchData] = React.useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(!searchData){
      setLoading(true);
      const response = await api.get('all');
      setCountries(response.data);
      setLoading(false);
      return;
    }

    try {
      setLoading(true)
      const response = await api.get(`name/${searchData}`);
      setCountries(response.data);
      setSearchData('');
      setError('');
    } catch (error) {
      setError('country cannot be found');
    } finally {
      setLoading(false);
    }

  }

  return (
    <IconContext.Provider value={{size: '1.3rem'}}>
        <form className={styles.container} onSubmit={handleSubmit}>
            <button type="submit"><IoIosSearch/></button>
            <label htmlFor="search"></label>
            <input 
              type="text" 
              id="search" 
              placeholder="Search for a country..." 
              value={searchData}
              onChange={e => setSearchData(e.target.value)}/>
            {error && <p>{error}</p>}
        </form>
    </IconContext.Provider>
  )
}
