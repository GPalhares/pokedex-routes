import React from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';

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
      <h1>
        {`${pokeFinded.name} details`}
      </h1>
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
