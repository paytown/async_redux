import { fetchApi } from '../services/fetchApi';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_ERR = 'FETCH_CHARACTERS_ERR';

export const fetchCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  return fetchApi()
    .then(character => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: character
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_CHARACTERS_ERR,
        payload: err
      });
    });
};
