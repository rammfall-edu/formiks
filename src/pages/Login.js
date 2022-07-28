import React from 'react';
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { loginUser } from '../api';
import Input from '../components/Input';
import { useFormSubmit } from '../hooks/useFormSubmit';

const Login = ({ setIsLoggedIn, setUserInfo }) => {
  const saveToken = (payload) => {
    setUserInfo(payload);
    setIsLoggedIn(true);
    localStorage.userInfo = JSON.stringify(payload);
  };
  const handleSubmit = useFormSubmit(loginUser, '/profile', saveToken);

  return (
    <div className="wrapper">
      <h1>Login</h1>
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
          <Field name="email" label="Email" component={Input} />
          <Field
            name="password"
            type="password"
            label="Password"
            component={Input}
          />
          <button>Login</button>
        </Form>
      </Formik>
    </div>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserInfo: PropTypes.func.isRequired,
};

export default Login;
