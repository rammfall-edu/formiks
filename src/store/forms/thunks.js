import { getFormsRequest } from '../../api';
import { createForm, getForms } from './actions';
import {
  createNotification,
  deleteNotification,
} from '../notifications/actions';
import { nanoid } from 'nanoid';

export const getFormsThunk = () => {
  return async (dispatch) => {
    const forms = await getFormsRequest();

    dispatch(getForms({ forms }));
  };
};

export const createFormsThunk = (payload) => {
  return async (dispatch) => {
    const id = nanoid();
    dispatch(createForm(payload.data));
    dispatch(createNotification({ message: payload.info, id }));
    setTimeout(() => dispatch(deleteNotification({ id })), 3000);
  };
};
