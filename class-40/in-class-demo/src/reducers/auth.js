const initialState = { loggedIn: false, user: {}, token: '' };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      const { user, token } = action;
      return { loggedIn: true, user, token };
    case 'USER_LOG_OUT':
      return initialState;
    default:
      return state;
  }
};

export default auth;
