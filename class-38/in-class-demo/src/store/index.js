import { configureStore } from '@reduxjs/toolkit';
import candidates from '../reducers/candidates';
import totalVotes from '../reducers/totalVotes';

const store = configureStore({
  reducer: { candidates, totalVotes }
});

export default store;
