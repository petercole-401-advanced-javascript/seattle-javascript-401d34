import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import * as actions from '../../actions';
import { useMount } from 'react-use';

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  logout: actions.userLogOut,
  login: actions.userLogIn,
  jwtLogin: actions.jwtLogin
};

const Login = ({ auth, cookies, logout, login, jwtLogin }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    login(data.username, data.password);
    reset();
  };

  useMount(() => {
    if (cookies.get('auth') !== '') {
      jwtLogin(cookies.get('auth'));
    }
  });

  useEffect(() => {
    if (cookies.get('auth') === auth.token) return;
    cookies.set('auth', auth.token, { path: '/' });
  }, [cookies, auth.token]);

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
