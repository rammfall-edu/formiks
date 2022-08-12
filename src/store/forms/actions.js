import { CREATE_FORM, GET_FORMS } from './types';

export const getForms = ({ forms }) => ({
  type: GET_FORMS,
  forms,
});

export const createForm = ({ isOpen, id, title }) => ({
  type: CREATE_FORM,
  isOpen,
  id,
  title,
});
