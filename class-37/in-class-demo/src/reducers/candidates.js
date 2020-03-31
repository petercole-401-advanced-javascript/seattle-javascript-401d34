const initialState = [
  { name: 'Tyler', votes: 0 },
  { name: 'Cait', votes: 0 },
  { name: 'Susanna', votes: 0 },
  { name: 'Eugene', votes: 0 },
  { name: 'Ada', votes: 0 },
  { name: 'Andrew', votes: 0 },
  { name: 'Peter', votes: 0 },
  { name: 'Kevin', votes: 0 },
  { name: 'Adrian', votes: 0 }
];

const candidates = (allCandidates = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return allCandidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      );
    case 'DECREMENT':
      return allCandidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes - 1 }
          : candidate
      );
    case 'ADD_CANDIDATE':
      return [...allCandidates, { name: action.payload, votes: 0 }];
    case 'RESET':
      return initialState;
    default:
      return allCandidates;
  }
};

export default candidates;
