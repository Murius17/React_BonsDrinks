import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import '../Header/Header.module.css';

const MenuHeader = () => {
  return (
    <header>
      <nav className="navMenu">
      
        <Link to="/drinks" exatly className="header" >Drinks</Link>
        <Link to="/sobre" exatly className="header">Sobre Nós</Link>
        <Link to="/" exatly className="header">Bons Drinks</Link>
        <Link to="/nosso" exatly className="header">Nosso Time</Link>
        <Link to="/contato" exatly className="header">Contato</Link>
   
      </nav>
    </header>
  )
}

export default MenuHeader;