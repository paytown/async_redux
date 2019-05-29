import {
  createStore,
  applyMiddleware
} from 'redux';


console.log('outside');

const logger = store => next => action => {
  console.log('Before reducer', store.getState());
  next(action);
  console.log('After reducer', store.getState());
};

function reducer(state = 'poo', action) {
  switch(action.type) {
    case 'MIDDLEWARE':
      return 'howdy';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({
  type: 'MIDDLEWARE'
});
