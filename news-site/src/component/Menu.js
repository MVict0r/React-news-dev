import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Science from './Science'
import Sport from './Sport';
import Technologies from './Technologies';
import Fashion from './Fashion';
import ListNews from './ListNews'
import { Layout } from './Layout';
import '../style.css';

export default class Menu extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element = { <ListNews /> } />
                <Route path="/technologies" element = { <Technologies /> } />
                <Route path="/science" element = { <Science /> } />
                <Route path="/sport" element = { <Sport /> } />
                <Route path="/fashion" element = { <Fashion /> } />
            </Route>
        </Routes>
      </>
    )
  }
}
