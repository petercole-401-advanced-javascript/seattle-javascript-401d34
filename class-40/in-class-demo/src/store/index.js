import { configureStore } from '@reduxjs/toolkit';
import candidates from '../reducers/candidates';
import totalVotes from '../reducers/totalVotes';
import auth from '../reducers/auth';

const store = configureStore({
  reducer: { candidates, totalVotes, auth }
});

export default store;
