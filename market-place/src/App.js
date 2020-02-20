import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
