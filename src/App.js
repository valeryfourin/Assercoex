// import React, { useEffect } from 'react';
// import logo from './logo.jpg';
import './App.css';
import AppRouter from './components/AppRouter';
import {BrowserRouter, useHistory, useLocation} from 'react-router-dom';
// import { observer } from 'mobx-react-lite';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { useEffect } from 'react';


const App = () => {

  // const history = useHistory() 

  //  useEffect(() => {
  //     history.listen((location) => { 
  //        console.log(`You changed the page to: ${location.pathname}`) 
  //     }) 
  //  },[history]) 

  return (
    <BrowserRouter>
      <Preloader />
      <NavMenu />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App; 


