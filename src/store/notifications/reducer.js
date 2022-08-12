import { CREATE_NOTIFICATION, DELETE_NOTIFICATION } from './types';

export const notificationReducer = (state = {}, action) => {
  if (action.type === CREATE_NOTIFICATION) {
    return {
      ...state,
      [action.id]: action.message,
    };
  }

  if (action.type === DELETE_NOTIFICATION) {
    const store = { ...state };
    delete store[action.id];

    return store;
  }

  return state;
};
