import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import Input from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getFormsSelector } from '../store/forms/selectors';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { createFormsRequest, getFormsRequest } from '../api';
import { createForm, getForms } from '../store/forms/actions';
import { createFormsThunk, getFormsThunk } from '../store/forms/thunks';

const Forms = () => {
  const forms = useSelector(getFormsSelector);
  const dispatch = useDispatch();
  const handleSubmit = useFormSubmit(createFormsRequest, null, (payload) =>
    dispatch(createFormsThunk(payload))
  );
  useEffect(() => {
    dispatch(getFormsThunk());
  }, []);

  return (
    <div className="container">
      <h1>Forms</h1>

      <Formik
        initialValues={{ isOpen: true, title: '' }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          isOpen: yup.boolean().label('Is open'),
          title: yup.string().label('Title').min(8).max(40).required(),
        })}
      >
        <Form>
          <Field name="title" label="Title" component={Input} />
          <Field
            name="isOpen"
            label="Is open"
            type="checkbox"
            component={Input}
          />
          <button type="submit">Create</button>
        </Form>
      </Formik>

      <ul className="forms-list">
        {forms.map(({ id, title, isOpen }) => {
          return (
            <li key={id} className="forms-list__item">
              <span>{isOpen ? '🔓' : '🔒'}</span>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forms;
