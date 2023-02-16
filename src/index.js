import { fetchWithTimeout, fetchMovies, fetchBooks, asyncFetchBooks, asyncFetchMovies } from './services';
const movies = require('./data/movies.json');

function getBooksAndMovies() {
  return Promise.all([
    fetchBooks(),
    fetchMovies()
  ])
    .then(([books, movies]) => ({
      books,
      movies
    }))
    .catch(error => {
      console.log("Error fetching books and movies", error)
    });
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then( results => {
  console.log('getBooksAndMoviesPromise', results)
});

function getBooksOrMovies() {
  return Promise.race([
    fetchBooks(),
    fetchMovies()
  ])
  .then(results => results)
  .catch(error => {
    console.log("Error waiting for the promise race", error)
  });
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then( results => {
  console.log('getBooksOrMoviesPromise', results)
});

async function getBooksAndMoviesAsync() {
  try {
    const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()]);
    return await { books, movies };
  } catch (error) {
    console.log("Error fetching books and movies", error);
  }
}

async function getBooksOrMoviesAsync() {
  try {
    const values = await Promise.race([asyncFetchBooks(), asyncFetchMovies()]);
    return values;
  } catch (error) {
    console.log("Error waiting for the promise race", error);
  }
}

getBooksAndMoviesAsync().then(results => {
  console.log("movies and books", {
    movies: results.movies,
    books: results.books
  });
});

getBooksOrMoviesAsync().then(results => {
  console.log("movies OR books", {
    results
  });
});
