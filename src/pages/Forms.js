import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import Input from '../components/Input';
import {
  projectsSelector,
  searchProjectsSelector,
} from '../store/projects/selectors';
import {
  createProject,
  deleteProject,
  updateProject,
} from '../store/projects/actions';

const Forms = () => {
  const projects = useSelector(projectsSelector);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const searchedProjects = useSelector(searchProjectsSelector(searchValue));

  return (
    <div>
      <h1>Projects</h1>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={({ name }, { resetForm }) => {
          dispatch(createProject({ name, id: nanoid() }));
          resetForm();
        }}
      >
        <Form>
          <Field name="name" component={Input} />
          <button>Submit</button>
        </Form>
      </Formik>
      <input
        type="search"
        onInput={({ target: { value } }) => {
          setSearchValue(value);
        }}
        value={searchValue}
      />
      <ul>
        {searchedProjects.map(({ name, id }) => {
          return (
            <li
              style={{ display: 'flex', justifyContent: 'space-between' }}
              key={id}
            >
              {name}
              <button
                onClick={() =>
                  dispatch(updateProject({ id, name: prompt(name) || '' }))
                }
              >
                edit
              </button>
              <button onClick={() => dispatch(deleteProject({ id }))}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forms;
