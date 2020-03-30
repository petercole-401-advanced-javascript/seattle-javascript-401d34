import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from '../../store';
import Voter from '../Voter';

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <h1>Vote!</h1>
        <Voter />
      </Container>
    </Provider>
  );
}

export default App;
