import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

import './global.scss';
import { PageRoutes } from './routes/PageRoutes';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <PageRoutes/>
    </BrowserRouter>
  );
}

export default App;
