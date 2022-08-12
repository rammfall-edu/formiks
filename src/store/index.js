import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { projectsReducer } from './projects/reducer';
import { userReducer } from './user/reducer';
import { settingsReducer } from './settings/reducer';
import { formsReducer } from './forms/reducer';
import { notificationReducer } from './notifications/reducer';

const reducers = combineReducers({
  projects: projectsReducer,
  user: userReducer,
  settings: settingsReducer,
  forms: formsReducer,
  notifications: notificationReducer,
});

const middlewares = [thunk];

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
