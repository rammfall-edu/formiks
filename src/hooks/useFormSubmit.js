import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useFormSubmit = (request, navigateTo, successAction) => {
  const navigate = useNavigate();

  return async (values, formikHelpers) => {
    const body = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      body.append(key, value);
    });
    try {
      const response = await request(body);

      formikHelpers.resetForm();
      successAction && successAction(response);
      navigateTo && navigate(navigateTo);
    } catch (error) {
      formikHelpers.setFieldError(error.name, error.message);
    }
  };
};

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleMinus = () => {
    setCounter((prevState) => prevState - 1);
  };

  return {
    counter,
    handlePlus,
    handleMinus,
  };
};
