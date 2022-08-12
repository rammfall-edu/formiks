import React, { useState } from 'react';

const Input = ({
  field: { name, onChange, onBlur, value },
  form: { errors, touched },
  label,
  placeholder,
  type = 'text',
}) => {
  const [inputType, setInputType] = useState(type);
  const errorMessage = errors[name];
  const touchedInput = touched[name];
  const isError = errorMessage && touchedInput;
  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <div className="input">
      <label className="input__label">
        <span className="input__text">{label}</span>
        <input
          name={name}
          {...(type === 'checkbox' ? { checked: value } : {})}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={onBlur}
          value={value}
          type={inputType}
          className={`input__input ${isError ? 'input__input--error' : ''}`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => {
              setInputType((prevState) => {
                return prevState === 'password' ? 'text' : 'password';
              });
            }}
            className="input__btn"
          >
            👁
          </button>
        )}
      </label>

      {isError && <div className="input__message">{errorMessage}</div>}
    </div>
  );
};

export default Input;
