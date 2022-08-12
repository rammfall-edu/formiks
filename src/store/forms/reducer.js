import { CREATE_FORM, GET_FORMS } from './types';

export const formsReducer = (state = [], action) => {
  if (action.type === CREATE_FORM) {
    return [
      ...state,
      {
        title: action.title,
        isOpen: action.isOpen,
        id: action.id,
      },
    ];
  }

  if (action.type === GET_FORMS) {
    return [...action.forms];
  }

  return state;
};
