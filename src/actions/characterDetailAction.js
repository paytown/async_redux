import { getCharacter } from '../services/fetchApi';

export const FETCH_CHARACTER_LOADING = 'FETCH_CHARACTER_LOADING';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_CHARACTER_ERR = 'FETCH_CHARACTER_ERR';

export const fetchCharacter = id => ({
  type: FETCH_CHARACTER,
  pendingType: FETCH_CHARACTER_LOADING,
  error: FETCH_CHARACTER_ERR,
  payload: getCharacter(id)
});
