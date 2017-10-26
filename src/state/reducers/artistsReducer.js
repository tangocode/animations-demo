import { SET_ARTISTS } from './../actions/actionTypes';

export default (state = [], action)  => {
  switch (action.type) {
    case SET_ARTISTS:
      return [...action.artists];
    default:
      return state;
  }
};
