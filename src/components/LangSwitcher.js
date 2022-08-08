import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { langSelector } from '../store/settings/selectors';
import { updateLang } from '../store/settings/actions';

const LangSwitcher = () => {
  const lang = useSelector(langSelector);
  const dispatch = useDispatch();

  return (
    <select
      defaultValue={lang}
      onChange={({ target: { value } }) => {
        dispatch(updateLang({ lang: value }));
      }}
    >
      <option value="en">English</option>
      <option value="ua">Українська</option>
    </select>
  );
};

export default LangSwitcher;
