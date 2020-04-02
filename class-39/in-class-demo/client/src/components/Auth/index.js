import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loggedIn: state.auth.loggedIn
  };
};

const Auth = ({ user, loggedIn, children, permission }) => {
  let okToRender = false;
  let isPermissible = true;
  if (permission) {
    isPermissible = user?.permissions?.includes(permission);
  }
  okToRender = loggedIn && isPermissible;
  return okToRender ? children : null;
};

export default connect(mapStateToProps)(Auth);
