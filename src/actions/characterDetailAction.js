import { getCharacter } from '../services/fetchApi';

export const FETCH_CHARACTER_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTER = 'FETCH_CHARACTERS';
export const FETCH_CHARACTER_ERR = 'FETCH_CHARACTERS_ERR';

export const fetchCharacter = () => ({
  type: FETCH_CHARACTER,
  pendingType: FETCH_CHARACTER_LOADING,
  error: FETCH_CHARACTER_ERR,
  payload: getCharacter()
});
