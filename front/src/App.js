import './App.css';
import Navbar from './components/headers/Navbar';
import SlideShow from './components/sliders/Slideshow';
import ProductsList from './components/products/Productslist';
import Footer from './components/footer/Footer'
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
