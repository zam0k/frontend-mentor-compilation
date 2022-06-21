import React from 'react'
import { Card } from '../Card';
import Loading from '../Loading';
import { Country } from '../../pages/MainPage/index';

interface Auxprops {
    loading: any;
    countries: any;
}

function CardList({loading, countries}: Auxprops) {
  if(loading) return <Loading/>;
  return (
    <>
    {countries && countries.map((el: Country)=> <Card key={el.name} name={el.name} capital={el.capital} region={el.region} population={el.population} flags={el.flags}/>)}
    </>
  )
}

export default CardList