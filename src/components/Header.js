import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LangSwitcher from './LangSwitcher';
import { useIntl } from '../hooks/useIntl';
import ThemeSwitcher from './ThemeSwitcher';
import { Rebux } from '../Application';
import { useDispatch, useSelector } from 'react-redux';
import {
  userEmailSelector,
  userIsLoggedInSelector,
} from '../store/user/selectors';
import { logout } from '../store/user/actions';

const Header = () => {
  const getWord = useIntl();
  const isLoggedIn = useSelector(userIsLoggedInSelector);
  const dispatch = useDispatch();
  const email = useSelector(userEmailSelector);

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
                  <Link to="/profile">{getWord('header.profile')}</Link>
                </li>
                <li>
                  <Link to="/account">{getWord('header.account')}</Link>
                </li>
                <li>
                  <button onClick={() => dispatch(logout())}>
                    {getWord('header.logout')}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">{getWord('header.login')}</Link>
                </li>
                <li>
                  <Link to="/register">{getWord('header.registration')}</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <LangSwitcher />
        <ThemeSwitcher />
        {email}
      </div>
    </header>
  );
};

export default Header;
