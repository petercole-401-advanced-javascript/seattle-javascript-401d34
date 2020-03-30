const initialState = {
  candidates: [
    { name: 'Tyler', votes: 0 },
    { name: 'Cait', votes: 0 },
    { name: 'Susanna', votes: 0 },
    { name: 'Eugene', votes: 0 },
    { name: 'Ada', votes: 0 },
    { name: 'Andrew', votes: 0 },
    { name: 'Peter', votes: 0 },
    { name: 'Kevin', votes: 0 },
    { name: 'Adrian', votes: 0 }
  ],
  totalVotes: 0
};

// An action will look like this:
// { type: 'INCREMENT', payload: 'Tyler' }

const voteCounter = (state = initialState, action) => {
  let candidates, totalVotes;
  switch (action.type) {
    case 'INCREMENT':
      totalVotes = state.totalVotes + 1;
      candidates = state.candidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      );
      return { candidates, totalVotes };
    case 'DECREMENT':
      totalVotes = state.totalVotes + 1;
      candidates = state.candidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes - 1 }
          : candidate
      );
      return { candidates, totalVotes };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default voteCounter;

// These functions are called 'action creators' since they just create an object that represents an action
export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name
  };
}

export function decrement(name) {
  return {
    type: 'DECREMENT',
    payload: name
  };
}

export function reset() {
  return {
    type: 'RESET'
  };
}
