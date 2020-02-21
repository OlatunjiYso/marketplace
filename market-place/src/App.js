import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import Header from './components/header/header.component';
import './App.css';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/> 
      <Route exact path='/signin' component={SignInSignUpPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
