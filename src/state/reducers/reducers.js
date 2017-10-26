import { combineReducers } from 'redux';

import artists from './artistsReducer';
import context from './contextReducer';

const reducers = combineReducers({
  artists,
  context,
});

export default reducers;
