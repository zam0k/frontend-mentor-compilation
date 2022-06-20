import React from 'react'
import { Card } from '../Card/Card'
import { SearchBar } from '../SearchBar/SearchBar';

import styles from './main.module.scss';
import { DropBox } from '../DropBox/DropBox';
import useFetch from '../../hooks/useFetch';


export interface country {
  name: {
    common: string
  }
  capital: string[0];
  region: string;
  population: number;
  flags: {
    png: string;
  }
}

export function Main() {
  const [countries, setCountries] = React.useState<country[]>([]);
  const [filter, setFilter] = React.useState<string>('all');
  const {data, loading, request} = useFetch();

  React.useEffect(() => {
    async function fetchCountries() {
      await request(`https://restcountries.com/v3.1/${filter}`);
    }

    fetchCountries();
  }, [request, filter])

  return (
    <main className={styles.main}>
        <div className={styles.cardsGrid}>
            <div className={styles.header}>
                <SearchBar setFilter={setFilter}/>
                <DropBox setFilter={setFilter}/>
            </div>
            {data.map((el: country, index )=> <Card key={index} name={el.name} capital={el.capital} region={el.region} population={el.population} flags={el.flags}/>)}
        </div>
    </main>
  )
}
