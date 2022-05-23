import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Snickers from './Snickers';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
