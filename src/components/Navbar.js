import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import '../styles/components/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
  );
}
