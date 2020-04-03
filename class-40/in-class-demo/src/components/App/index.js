import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Login from '../Login';
import Voter from '../Voter';
import AddCandidate from '../AddCandidate';
import Auth from '../Auth';
import { withCookies } from 'react-cookie';

const App = ({ cookies }) => {
  return (
    <Container className="App">
      <h1>Vote!</h1>
      <Login cookies={cookies} />
      <Auth>
        <Voter />
        <Auth permission="create">
          <AddCandidate />
        </Auth>
      </Auth>
    </Container>
  );
};

export default withCookies(App);
