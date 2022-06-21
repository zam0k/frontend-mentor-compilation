import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './global.scss';
import { PageRoutes } from './routes/PageRoutes';

function App() {
  return (
    <BrowserRouter>
        <PageRoutes/>
    </BrowserRouter>
  );
}

export default App;
