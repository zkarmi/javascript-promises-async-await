import movies from './data/movies.json';
import fetchWithTimeout from './services';

export const fetchMovies = () => {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then( (results) => {
  console.log(results);
});
