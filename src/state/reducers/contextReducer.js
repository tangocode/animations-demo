import { SET_USER, SET_LOCATION } from './../actions/actionTypes';

export default (state = { location: 'login' }, action)  => {
  switch (action.type) {
    case SET_USER:
    return Object.assign({}, state, { user: action.user });
    case SET_LOCATION:
      return Object.assign({}, state, { location: action.location });
    default:
      return state;
  }
};
