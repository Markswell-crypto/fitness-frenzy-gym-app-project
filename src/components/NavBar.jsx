import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar-list">
      <ul className="navbar-list">
        <li className="dropdown">
          <button className="dropdown-toggle">ABOUT US 👇👇👇👇</button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/">HOME 😊</Link>
            </li>
            <li>
              <Link to="/exercise-daily-routine">EXERCISES ROUTINE😊</Link>
            </li>
            <li>
              <Link to="/add-exercise">ADD EXERCISE FORM 😊</Link>
            </li>
            <li>
              <Link to="/comments">REVIEWS 💙😊</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
