import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../stylesheets/layout/header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">
          <img src={logo} alt="Rick and Morty logo"></img>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
