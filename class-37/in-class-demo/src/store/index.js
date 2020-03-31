import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import candidates from '../reducers/candidates';
import totalVotes from '../reducers/totalVotes';

const rootReducer = combineReducers({
  candidates,
  totalVotes
});

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();
