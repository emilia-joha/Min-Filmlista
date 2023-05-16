import "./App.css";
import { AddMovieForm } from "./components/AddMovieForm";
import { Movie } from "./components/Movie";
import { SortByAlpha } from "./components/SortByAlpha";
import { SortByRating } from "./components/SortByRating";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    const newMovieList = [...movies, movie];
    setMovies(newMovieList);
  }

  function delMovie(title) {
    const newMovieList = movies.filter((movie) => movie.title !== title);
    setMovies(newMovieList);
  }

  function sortMovieListByAlpha() {
    const sortedList = [...movies.sort((a, b) => (a.title > b.title ? 1 : -1))];
    setMovies(sortedList);
  }

  function sortMovieListByRating() {
    const sortedList = [
      ...movies.sort((a, b) => (a.rating > b.rating ? 1 : -1)),
    ];
    setMovies(sortedList);
  }

  return (
    <div className="container">
      <h1>Min Filmlista</h1>
      <AddMovieForm addMovie={addMovie} />
      <ul className="movies">
        {movies.map((movie) => (
          <Movie key={movie.title} item={movie} delMovie={delMovie} />
        ))}
      </ul>
      <SortByAlpha sortAlpha={sortMovieListByAlpha} />
      <SortByRating sortRating={sortMovieListByRating} />
    </div>
  );
}
export default App;
