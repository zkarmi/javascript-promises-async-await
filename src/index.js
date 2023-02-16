import { fetchWithTimeout, fetchMovies, fetchBooks } from './services';
const movies = require('./data/movies.json');

export function getBooksAndMovies() {
  return new Promise.all([
    fetchBooks(),
    fetchMovies()
  ])
    .then(([books, movies]) => ({
      books,
      movies
    }))
    .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then( result =>
  console.log('getBooksAndMoviesPromise', result)
)
.catch(error => console.log(error));

export function getBooksOrMovies() {
  return new Promise.race([
    fetchBooks(),
    fetchMovies()
  ])
  .then(results => results)
  .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then( result =>
  console.log('getBooksAndMoviesPromise', result)
)
.catch(error => console.log(error));
