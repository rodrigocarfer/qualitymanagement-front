import { combineReducers } from 'redux';

import auth, { DUCK_NAME as AUTH_DUCK_NAME } from './Auth';

export const reducers = {
  [AUTH_DUCK_NAME]: auth,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
