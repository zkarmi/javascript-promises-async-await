const movies = require('./data/movies.json');
const fetchWithTimeout = require('./serivces');

export const fetchMovies = () => {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then( (results) => {
  console.log(results);
});
