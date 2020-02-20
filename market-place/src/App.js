import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component'
import './App.css';

const HatsPage = () => (
  <div>
    <h1 style={{marginLeft: '50px'}}> HATs PAGE  </h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1 style={{marginLeft: '50px'}}> Jackets PAGE  </h1>
  </div>
)

const 
SneakersPage = () => (
  <div>
    <h1 style={{marginLeft: '50px'}}> Sneakers PAGE  </h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/hats' component={HatsPage}/>
      <Route exact path='/jackets' component={JacketsPage}/>
      <Route exact path='/sneakers' component={SneakersPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
