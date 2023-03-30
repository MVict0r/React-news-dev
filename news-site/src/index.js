import React, { useState, useEffect } from 'react'
import api from './config'
import ReactDOM from 'react-dom/client';
import './index.css';
import ListNews from './component/ListNews'
// import App from './App';
import Menu from './component/Menu'
import Block_news from './component/Block_news';

// dsdsds
// ji
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Menu></Menu> */}
    {/* <Block_news></Block_news> */}
    <ListNews></ListNews>
  </React.StrictMode>
);