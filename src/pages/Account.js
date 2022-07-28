import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import Input from '../components/Input';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { updateEmail, updatePassword } from '../api';

const Account = ({ userInfo, setUserInfo }) => {
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  function onEmailSuccess({ info }) {
    setEmailMessage(info);
    setTimeout(() => setEmailMessage(''), 5000);
  }
  function onPasswordSuccess({ info }) {
    setPasswordMessage(info);
    setTimeout(() => setPasswordMessage(''), 5000);
  }
  const onPasswordUpdateSubmit = useFormSubmit(
    updatePassword,
    undefined,
    onPasswordSuccess
  );
  const onEmailUpdateSubmit = useFormSubmit(
    updateEmail,
    undefined,
    onEmailSuccess
  );

  return (
    <div className="container">
      <h2>Update password</h2>
      <Formik
        initialValues={{ password: '', newPassword: '', confirmPassword: '' }}
        onSubmit={onPasswordUpdateSubmit}
        validationSchema={yup.object().shape({
          password: yup
            .string()
            .label('Old password')
            .min(4)
            .max(30)
            .required(),
          newPassword: yup
            .string()
            .label('New password')
            .min(4)
            .max(30)
            .required()
            .notOneOf([yup.ref('password'), null], 'Password should not match'),
          confirmPassword: yup
            .string()
            .label('Confirmation password')
            .min(4)
            .max(30)
            .required()
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
        })}
      >
        <Form>
          {passwordMessage && <div className="message">{passwordMessage}</div>}
          <Field
            name="password"
            type="password"
            label="Password"
            component={Input}
          />
          <Field
            name="newPassword"
            type="password"
            label="New password"
            component={Input}
          />
          <Field
            name="confirmPassword"
            type="password"
            label="Confirmation password"
            component={Input}
          />
          <button type="submit">Update password</button>
        </Form>
      </Formik>
      <h2>Update email</h2>
      <Formik
        enableReinitialize
        initialValues={{ email: userInfo.email }}
        onSubmit={async (...args) => {
          const [{ email }] = args;
          await onEmailUpdateSubmit(...args);
          setUserInfo((prevState) => {
            const state = {
              ...prevState,
              email,
            };
            localStorage.userInfo = JSON.stringify(state);
            return state;
          });
        }}
      >
        <Form>
          {emailMessage && <div className="message">{emailMessage}</div>}
          <Field name="email" type="email" label="Email" component={Input} />
          <button type="submit">Update email</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Account;
