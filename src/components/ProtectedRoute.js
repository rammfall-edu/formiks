import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userIsLoggedInSelector } from '../store/user/selectors';

const ProtectedRoute = ({ isProtected, element: Component }) => {
  const isLoggedIn = useSelector(userIsLoggedInSelector);
  const condition =
    (isProtected && isLoggedIn) || (!isProtected && !isLoggedIn);

  if (condition) {
    return <Component />;
  }

  return <Navigate to={isProtected ? '/login' : '/account'} />;
};

export default ProtectedRoute;
