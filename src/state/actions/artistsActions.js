import { SET_ARTISTS } from './actionTypes';
import { artists } from './sampleData/data';

const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});

export const fetchArtists = () => (dispatch) => {
  dispatch(setArtists(artists));
};

