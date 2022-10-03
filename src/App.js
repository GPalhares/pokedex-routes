import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import pokemonListData from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonList: pokemonListData,
    };
  }

  render() {
    const { pokemonList } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Pokedex pokemonList={ pokemonList } />) }
          />
          <Route path="/about" component={ About } />
          <Route
            path="/pokemon/:id"
            render={ (props) => (
              <PokemonDetails
                { ...props }
                pokemons={ pokemonList }
              />
            ) }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
