import {
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_ERR
} from '../actions/fetchCharactersAction';

const initialState = {
  loading: false,
  characters: [],
  err: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS:
      return { ...state, loading: false, characters: action.payload, err: null };
    case FETCH_CHARACTERS_ERR:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
}
