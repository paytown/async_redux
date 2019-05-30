import { combineReducers } from 'redux';
import characters from './characterReducer';
import character from './characterDetailReducer';

export default combineReducers({
  characters,
  character
});
