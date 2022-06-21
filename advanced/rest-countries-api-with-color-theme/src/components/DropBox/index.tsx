import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type propTypes = {
  setCountries: any
  setLoading: any
}

export function DropBox({setCountries}: propTypes) {
  const [isActive, setActive] = React.useState(false);
  const [filter, setFilter] = React.useState('');

  async function handleFilter(event: any) {

    setFilter(event.target.textContent);

    let response;

    if(filter === 'all') {
      response = await api.get('all');
    }else{
      response = await api.get(`region/${filter}`);
    }

    setCountries(response.data);
    setActive((state) =>  !state);
  }

  return (
    <div className={styles.container}>
      <button className={styles.filter} onClick={() => setActive((state) =>  !state)}>Filter by Region<IoIosArrowDown/></button>
        <div className={ isActive? styles.show : styles.hide}>
            <button onClick={handleFilter}>all</button>
            <button onClick={handleFilter}>africa</button>
            <button onClick={handleFilter}>america</button>
            <button onClick={handleFilter}>asia</button>
            <button onClick={handleFilter}>europe</button>
            <button onClick={handleFilter}>oceania</button>
        </div>
    </div>
  )
}
