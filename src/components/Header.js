import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, logoutUser }) => {
  return (
    <header>
      <div className="container">
        <a href="" className="logo">
          Former
        </a>
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/account">Account</Link>
                </li>
                <li>
                  <button onClick={logoutUser}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Registration</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default Header;
