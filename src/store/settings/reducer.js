import { UPDATE_LANG, UPDATE_THEME } from './types';

const defaultState = {
  lang: localStorage.lang || 'en',
  theme: localStorage.theme || 'light',
};

export const settingsReducer = (state = defaultState, action) => {
  if (action.type === UPDATE_LANG) {
    localStorage.lang = action.lang;
    return {
      ...state,
      lang: action.lang,
    };
  }
  if (action.type === UPDATE_THEME) {
    const currentTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.theme = currentTheme;
    return {
      ...state,
      theme: currentTheme,
    };
  }

  return state;
};
