const initialState = 0;

const totalVotes = (votes = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return votes + 1;
    case 'RESET':
      return initialState;
    default:
      return votes;
  }
};

export default totalVotes;
