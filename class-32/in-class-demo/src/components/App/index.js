import React from 'react';
import './App.css';

import NewSpell from '../NewSpell'
import Spellbook from '../Spellbook'

function App() {
  return (
    <div className="App">
      <h1>My Hogwarts Spellbook</h1>
      <NewSpell />
      <Spellbook />
    </div>
  );
}

export default App;
