import { LOGIN, LOGOUT, UPDATE_EMAIL } from './types';

const userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : {};

const defaultValue = {
  token: userInfo.token,
  email: userInfo.email,
  isLoggedIn: !!localStorage.userInfo,
};

export const userReducer = (state = defaultValue, action) => {
  if (action.type === LOGIN) {
    const userInfo = {
      token: action.token,
      email: action.email,
      isLoggedIn: true,
    };
    localStorage.userInfo = JSON.stringify(userInfo);

    return userInfo;
  }

  if (action.type === LOGOUT) {
    return {
      token: null,
      isLoggedIn: false,
    };
  }

  if (action.type === UPDATE_EMAIL) {
    return {
      ...state,
      email: action.email,
    };
  }

  return state;
};
