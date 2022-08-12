import { CREATE_NOTIFICATION, DELETE_NOTIFICATION } from './types';

export const createNotification = ({ message, id }) => ({
  type: CREATE_NOTIFICATION,
  message,
  id,
});

export const deleteNotification = ({ id }) => ({
  type: DELETE_NOTIFICATION,
  id,
});
