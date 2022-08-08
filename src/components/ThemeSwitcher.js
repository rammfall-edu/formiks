import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '../store/settings/selectors';
import { updateTheme } from '../store/settings/actions';

const ThemeSwitcher = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const sun = '☀';
  const moon = '🌙';

  return (
    <button
      onClick={() => {
        dispatch(updateTheme());
      }}
    >
      {theme === 'light' ? sun : moon}
    </button>
  );
};

export default ThemeSwitcher;
