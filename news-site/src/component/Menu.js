import React, { Component } from 'react';
// import logo from './logo.svg';
import '../style.css';

export default class Menu extends Component {
  render() {
    return (
      
      <header className='header'>
        <div className="container">
                <nav className="navigation grid">
                    <a href="/" className="navigation_logo">
                        {/* <img
                            src={logo} 
                            width='150px'
                            height='50px'
                            alt="Logo" 
                            className="navigation_img" /> */}
                    </a>
                    <ul className="navigation_list">
                        <li className="navigation_item">
                            <a href="#" className="navigation_link">Главная</a></li>
                        <li className="navigation_item">
                            <a href="#" className="navigation_link">Мода</a></li>
                        <li className="navigation_item">
                            <a href="#" className="navigation_link">Технологии</a></li>
                        <li className="navigation_item">
                            <a href="#" className="navigation_link">Музыка</a></li>
                    </ul>
            </nav>
            </div>
        </header>
    
    )
  }
}
