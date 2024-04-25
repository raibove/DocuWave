import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';

function SidePanel() {
  return (
    <nav className="side-panel">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="brand">DocuWave</span>
      </div>
      <ul className="navigation">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shared With Me</a>
        </li>
        <li>
          <a href="#">Starred</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Trash</a>
        </li>
      </ul>
    </nav>
  );
}

export default SidePanel;
