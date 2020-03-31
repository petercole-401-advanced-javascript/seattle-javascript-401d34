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

export function addCandidate(name) {
  return {
    type: 'ADD_CANDIDATE',
    payload: name
  };
}
