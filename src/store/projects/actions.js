import { CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from './types';

export const createProject = ({ name, id }) => ({
  type: CREATE_PROJECT,
  name,
  id,
});

export const deleteProject = ({ id }) => ({
  type: DELETE_PROJECT,
  id,
});

export const updateProject = ({ id, name }) => ({
  type: UPDATE_PROJECT,
  id,
  name,
});
