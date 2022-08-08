import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { loginUser } from '../api';
import Input from '../components/Input';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { useIntl } from '../hooks/useIntl';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/actions';

const Login = () => {
  const getWord = useIntl();
  const dispatch = useDispatch();
  const saveToken = ({ token, email }) => {
    dispatch(login({ token, email }));
  };
  const handleSubmit = useFormSubmit(loginUser, '/profile', saveToken);

  return (
    <div className="wrapper">
      <h1>{getWord('login.title')}</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          email: yup.string().label('Email').min(4).max(30).required(),
          password: yup.string().label('Password').min(4).max(30).required(),
        })}
      >
        <Form>
          <Field
            name="email"
            label={getWord('login.email')}
            component={Input}
          />
          <Field
            name="password"
            type="password"
            label={getWord('login.password')}
            component={Input}
          />
          <button>{getWord('login.button')}</button>
          <p>{getWord('login.roman')}</p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
