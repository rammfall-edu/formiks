import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { createProfile, getProfile, updateProfile } from '../api';
import Input from '../components/Input';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { formatDate } from '../utils/formatDate';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const successAction = (payload) => {
    setProfile({
      ...payload,
      dateOfBirth: formatDate(new Date(payload.dateOfBirth)),
    });
    setIsEmpty(false);
  };
  const onSaveSubmit = useFormSubmit(createProfile, undefined, successAction);
  const onUpdateSubmit = useFormSubmit(updateProfile, undefined, successAction);

  useEffect(() => {
    getProfile().then((requestedProfile) => {
      setIsEmpty(!Object.keys(requestedProfile).length);
      setProfile({
        ...requestedProfile,
        dateOfBirth: formatDate(new Date(requestedProfile.dateOfBirth)),
      });
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="container">
      <h1>Profile</h1>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          dateOfBirth: '2000-01-01',
          ...profile,
        }}
        onSubmit={(...args) => {
          isEmpty ? onSaveSubmit(...args) : onUpdateSubmit(...args);
        }}
        validationSchema={() => {
          const maxDate = new Date();

          maxDate.setFullYear(maxDate.getFullYear() - 9);
          return yup.object().shape({
            firstName: yup.string().label('First name').min(2).max(15),
            lastName: yup.string().label('First name').min(2).max(15),
            phoneNumber: yup
              .string()
              .label('Phone number')
              .min(7)
              .max(20)
              .matches(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                'Phone is not valid'
              ),
            dateOfBirth: yup
              .date()
              .label('First name')
              .min(new Date(1950, 0, 1))
              .max(maxDate),
          });
        }}
      >
        <Form>
          <Field name="firstName" label="First name" component={Input} />
          <Field name="lastName" label="Last name" component={Input} />
          <Field name="phoneNumber" label="Phone number" component={Input} />
          <Field
            name="dateOfBirth"
            label="Date of birth"
            type="date"
            component={Input}
          />
          {isLoading ? (
            <div>loading...</div>
          ) : (
            <button type="submit">
              {isEmpty ? 'Create profile' : 'Update profile'}
            </button>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
