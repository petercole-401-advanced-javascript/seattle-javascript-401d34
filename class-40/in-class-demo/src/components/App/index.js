import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../../store';
import Login from '../Login';
import Voter from '../Voter';
import AddCandidate from '../AddCandidate';
import Auth from '../Auth';

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <h1>Vote!</h1>
        <Login />
        <Auth>
          <Voter />
          <Auth permission="create">
            <AddCandidate />
          </Auth>
        </Auth>
      </Container>
    </Provider>
  );
}

export default App;
