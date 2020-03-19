import React from 'react';
import './App.scss';

import Header from '../Header'
import PokemonList from '../PokemonList'
import { If, Unless } from '../Conditionals'

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      pokemon: [],
      number: 1
    }
  }

  getManyPokemon = async () => {
    // make a GET request to POKEAPI_URL and put the results
    // into this.state.pokemon
    const raw = await fetch(POKEAPI_URL)
    const data = await raw.json()
    this.setState({
      pokemon: data.results
    })
  }

  getOnePokemon = async () => {
    const raw = await fetch(`${POKEAPI_URL}${this.state.number}`)
    const data = await raw.json()
    this.setState({
      pokemon: [data]
    })
  }

  handleChange = e => {
    this.setState({
      number: e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <Header />
        <button onClick={this.getManyPokemon}>Get Many Pokemon</button>
        <button onClick={this.getOnePokemon}>Get One Pokemon</button>
        Pokemon Number: <input onChange={this.handleChange} type="number" placeholder="1" />
        <Unless condition={this.state.number > 0}>
          <p className="error">Negative numbers or zero aren't allowed!</p>
        </Unless>
        <If condition={this.state.pokemon.length > 0}>
          <PokemonList content={this.state.pokemon} />
        </If>
      </div>
    );
  }
}

export default App;
