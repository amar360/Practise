import React, { useState } from 'react';
import pokemonList from './componenets/pokemonList';

const App = () => {
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander']);

  return <pokemonList pokemon={pokemon} />;
};

export default App;
