import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
import { CountryPage } from '../pages/CountryPage';
import { Header } from '../components/Header';


export function PageRoutes() {
  return (
    <Routes>
        <Route path ="/" element={<MainPage/>}/>
        <Route path= "/country/:country" element={<CountryPage/>}/>
    </Routes>
  )
}
