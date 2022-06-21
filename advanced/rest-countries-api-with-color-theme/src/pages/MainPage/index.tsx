import React from 'react'
import { Card } from '../../components/Card'
import { SearchBar } from '../../components/SearchBar';

import styles from './styles.module.scss';
import { DropBox } from '../../components/DropBox';
import { api } from '../../services/api';
import Loading from '../../components/Loading';
import CardList from '../../components/CardList';


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
  const [loading, setLoading] = React.useState(false);


  React.useEffect(() => {

    async function getCountries() {
      const response = await api.get('/all');
      setCountries(response.data);
    }
    getCountries();
  }, []);

 
  return (
    <main className={styles.main}>
        <div className={styles.header}>
          <SearchBar setCountries={setCountries} setError={setError} error={error} setLoading={setLoading}/>
          <DropBox setCountries={setCountries} setLoading={setLoading}/>
        </div>
        <div className={styles.cardsGrid}>
            <CardList countries={countries} loading={loading}/>
        </div>
    </main>
  )
}