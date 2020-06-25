import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import feed from './feed/reducer';

export default combineReducers({
  auth,
  user,
  feed
});
