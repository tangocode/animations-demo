import { SET_USER, SET_LOCATION } from './actionTypes';

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  location
});