import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon',
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  if (laoding) return 'Loading Pokemon.....';

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <>
      <PokemonList pokemon={pokemon} />
      next: {nextPageUrl} , prev: {prevPageUrl}
      <Pagination 
      nextPage={nextPageUrl ? nextPage : null}
      prevPage={prevPageUrl ? prevPage : null} />
    </>
  );
}

export default App;
