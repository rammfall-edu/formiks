import { UPDATE_LANG, UPDATE_THEME } from './types';

export const updateTheme = () => ({
  type: UPDATE_THEME,
});

export const updateLang = ({ lang }) => ({
  type: UPDATE_LANG,
  lang,
});
