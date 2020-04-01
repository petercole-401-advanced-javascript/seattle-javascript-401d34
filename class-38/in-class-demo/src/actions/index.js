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

export function addCandidate(name) {
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/candidates', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, votes: 0 })
    });
    const response = await raw.json();
    console.log(response);
    return dispatch(addCandidateAction(response));
  };
}

function addCandidateAction(candidate) {
  return {
    type: 'ADD_CANDIDATE',
    payload: candidate
  };
}

export function fetchAllCandidates() {
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/candidates');
    const data = await raw.json();
    return dispatch(fetchAllCandidatesAction(data));
  };
}

function fetchAllCandidatesAction(data) {
  return {
    type: 'FETCH_ALL_CANDIDATES',
    payload: data
  };
}
