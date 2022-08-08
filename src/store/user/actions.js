import { LOGIN, LOGOUT, UPDATE_EMAIL } from './types';

export const login = ({ token, email }) => ({
  type: LOGIN,
  token,
  email,
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateUserEmail = ({ email }) => ({
  type: UPDATE_EMAIL,
  email,
});
