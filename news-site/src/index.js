import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
// import ListNews from './component/ListNews'
import Menu from './component/Menu'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu></Menu>
    {/* <ListNews></ListNews> */}
    </BrowserRouter>
  </React.StrictMode>
);