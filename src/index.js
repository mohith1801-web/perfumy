import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import Footer from "./components/footer"
import Navbar from "./components/nav"
import Searchbar from "./components/search"
import About from "./components/abt"
import Images from "./components/img"

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>
    <Navbar></Navbar>
    <Searchbar></Searchbar>   {/* ✅ FIXED */}
    <Images></Images>
    <About></About>
    <Footer></Footer>
  </div>
);