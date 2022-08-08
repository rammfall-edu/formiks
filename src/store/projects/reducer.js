import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from './types';

export const projectsReducer = (state = {}, action) => {
  if (action.type === CREATE_PROJECT) {
    return {
      ...state,
      [action.id]: {
        id: action.id,
        name: action.name,
      },
    };
  }

  if (action.type === DELETE_PROJECT) {
    const projects = {
      ...state,
    };
    delete projects[action.id];

    return projects;
  }

  if (action.type === UPDATE_PROJECT) {
    return {
      ...state,
      [action.id]: {
        id: action.id,
        name: action.name,
      },
    };
  }

  return state;
};
