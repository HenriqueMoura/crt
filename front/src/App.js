import './App.css';
import Navbar from './components/Navbar';
import SlideShow from './components/Slideshow';
import ProductsList from './components/Productslist';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Router path='/' exact >
            <SlideShow />
            <ProductsList />
          </Router>
        </Switch>
      </Router>
    </>
  );
}

export default App;
