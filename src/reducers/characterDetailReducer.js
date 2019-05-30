import {
  FETCH_CHARACTER_LOADING,
  FETCH_CHARACTER,
  FETCH_CHARACTER_ERR
} from '../actions/characterDetailAction';

const initialState = {
  loading: false,
  character: {},
  err: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTER:
      return { ...state, loading: false, character: action.payload, err: null };
    case FETCH_CHARACTER_ERR:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
}
