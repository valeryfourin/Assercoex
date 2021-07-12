// import React, { useEffect } from 'react';
// import logo from './logo.jpg';
import './App.css';
import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom';
// import { observer } from 'mobx-react-lite';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App = () => {

  // useEffect(() => {

  //   let userLang = navigator.language || navigator.userLanguage; 
  //   if (userLang.includes('ru')) {
  //     document.cookie = 'lang=ru; expires=86400';
  //   } else {
  //     document.cookie = 'lang=en; expires=86400';
  //   }

  //   if (document.cookie.split(';').filter((item) => item.trim().startsWith('lang=')).length) {
  //     console.log(document.cookie)
  //   } 
  //   console.log(window.location.pathname)
  // });

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


