const initialState = { loggedIn: false, user: {} };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      return { loggedIn: true, user: action.payload };
    case 'USER_LOG_OUT':
      return initialState;
    default:
      return state;
  }
};

export default auth;
