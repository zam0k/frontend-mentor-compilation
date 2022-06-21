import React from 'react'
import { Card } from '../../components/Card'
import { SearchBar } from '../../components/SearchBar';

import styles from './styles.module.scss';
import { DropBox } from '../../components/DropBox';
import { api } from '../../services/api';


export interface Country {
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

export function MainPage() {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [error, setError] = React.useState('');
 
  React.useEffect(() => {
    async function fetchCountries() {
      const response = await api.get('all');
      setCountries(response.data);
    }

    fetchCountries();
  }, [])

  return (
    <main className={styles.main}>
        <div className={styles.cardsGrid}>
            <div className={styles.header}>
                <SearchBar setCountries={setCountries} setError={setError} error={error}/>
                <DropBox setCountries={setCountries}/>
            </div>
            {countries.map((el: Country, index )=> <Card key={index} name={el.name} capital={el.capital} region={el.region} population={el.population} flags={el.flags}/>)}
        </div>
    </main>
  )
}