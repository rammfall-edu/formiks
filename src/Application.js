import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Forms from './pages/Forms';
import store from './store';
import { themeSelector } from './store/settings/selectors';
import { getNotificationsSelector } from './store/notifications/selectors';
import { deleteNotification } from './store/notifications/actions';

const Application = () => {
  const theme = useSelector(themeSelector);
  const notifications = useSelector(getNotificationsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [theme]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/register"
          element={<ProtectedRoute isProtected={false} element={Register} />}
        />
        <Route
          path="/login"
          element={<ProtectedRoute isProtected={false} element={Login} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute isProtected element={Profile} />}
        />
        <Route
          path="/account"
          element={<ProtectedRoute isProtected element={Account} />}
        />
        <Route path="/" element={<Forms />} />
      </Routes>
      <ul className="notifications">
        {notifications.map(([id, message]) => (
          <li key={id} className="notification">
            {message}
            <button onClick={() => dispatch(deleteNotification({ id }))}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Application;
