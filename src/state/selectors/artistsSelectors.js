export const getArtists = (state) => {
  return state.artists;
}

export const getArtistById = (id, state) => {
  return state.artists.find(artist => artist.id === id);
}