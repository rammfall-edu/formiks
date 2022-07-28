import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import Input from '../components/Input';
import { registerUser } from '../api';
import { useFormSubmit } from '../hooks/useFormSubmit';

const Register = () => {
  const handleSubmit = useFormSubmit(registerUser, '/login');

  return (
    <div className="wrapper">
      <h1>Register</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          username: yup.string().label('Username').min(4).max(30).required(),
          email: yup.string().label('Email').email().min(4).max(30).required(),
          password: yup.string().label('Password').min(4).max(30).required(),
          confirmPassword: yup
            .string()
            .label('Password')
            .min(4)
            .max(30)
            .required()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        })}
      >
        <Form>
          <Field
            name="username"
            placeholder="Enter your username"
            label="Username"
            component={Input}
          />
          <Field name="email" label="Email" component={Input} />
          <Field
            name="password"
            type="password"
            label="Password"
            component={Input}
          />
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm password"
            component={Input}
          />
          <button>Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
