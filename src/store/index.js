import { createStore, combineReducers } from 'redux';
import { projectsReducer } from './projects/reducer';
import { userReducer } from './user/reducer';
import { settingsReducer } from './settings/reducer';

const reducers = combineReducers({
  projects: projectsReducer,
  user: userReducer,
  settings: settingsReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
