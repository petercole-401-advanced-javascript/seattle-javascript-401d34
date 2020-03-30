import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import voteCounter from './voteCounter';

const reducers = combineReducers({ voteCounter });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
