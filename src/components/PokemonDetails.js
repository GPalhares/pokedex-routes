import React from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  render() {
    const {
      pokemons,
      match: {
        params: { id },
      },
    } = this.props;

    const pokeFinded = pokemons.find((poke) => poke.id === Number(id));
    return (
      <div>
        <h1>
          {`${pokeFinded.name} details`}
        </h1>
        <Pokemon pokemon={ pokeFinded } />
        <p>{pokeFinded.summary}</p>
        <section>
          { pokeFinded.foundAt.map((location) => (
            <section key={ location.location }>
              <span>{ location.location }</span>
              <img src={ location.map } alt="mapa do pokemon" />
            </section>
          )) }
        </section>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonDetails;
