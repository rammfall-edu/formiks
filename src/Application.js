import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Account from './pages/Account';

const Application = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.userInfo);
  const [userInfo, setUserInfo] = useState(
    localStorage.userInfo ? JSON.parse(localStorage.userInfo) : {}
  );

  const logoutUser = () => {
    delete localStorage.userInfo;
    setUserInfo({});
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} logoutUser={logoutUser} />
      <Routes>
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />
            )
          }
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/account"
          element={
            isLoggedIn ? (
              <Account userInfo={userInfo} setUserInfo={setUserInfo} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default Application;
