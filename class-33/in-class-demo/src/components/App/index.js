import React from 'react';
import { Container } from 'react-bootstrap'
import './App.css';

import ThemeToggler from '../ThemeToggler'
import Header from '../Header'
import NewSpell from '../NewSpell'
import Spellbook from '../Spellbook'

import useSpellbookApi from '../../hooks/useSpellbookApi'
import Theme from '../../contexts/themeContext'

function App() {
  const [spells, isLoading, error, addNewSpell] = useSpellbookApi()

  return (
    <Theme>
      <Container className="App">
        <ThemeToggler />
        <Header />
        <NewSpell addNewSpell={addNewSpell} />
        <Spellbook
          spells={spells}
          isLoading={isLoading}
          error={error}
        />
      </Container>
    </Theme>
  );
}

export default App;
