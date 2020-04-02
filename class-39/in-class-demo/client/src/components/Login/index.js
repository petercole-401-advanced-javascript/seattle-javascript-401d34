import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import * as actions from '../../actions';

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  logout: actions.userLogOut,
  login: actions.userLogIn
};

const Login = ({ auth, logout, login }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    login(data.username, data.password);
    reset();
  };

  const LoginForm = (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        type="text"
        name="username"
        placeholder="Username"
        ref={register}
      />
      <Form.Control
        type="password"
        name="password"
        placeholder="Password"
        ref={register}
      />
      <Button type="submit">Log In</Button>
    </Form>
  );

  const LogoutButton = <Button onClick={logout}>Log Out</Button>;

  return auth.loggedIn ? LogoutButton : LoginForm;
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
