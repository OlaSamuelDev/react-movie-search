import React, { useEffect, useState } from "react";
import { BehaviorSubject, debounceTime, skip } from "rxjs";
import SearchInput from "./components/SearchInput/SearchInput";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";

const searchQuery = new BehaviorSubject("");
function App() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const getMovieRequest = async searchValue => {
    if (searchValue && searchValue.length > 0) {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ddd1d67b`;
      const response = await fetch(url);
      const responseJSON = await response.json();
      if (responseJSON.Search) {
        setMovieSearch(responseJSON.Search);
        setHasResults(true);
        return;
      } else {
        setHasResults(false);
      }
    }
  };

  useEffect(() => {
    const subscriber = searchQuery
      .pipe(skip(1), debounceTime(500))
      .subscribe(searchTerm => {
        setHasSearched(true);
        getMovieRequest(searchTerm);
      });
    return () => subscriber.unsubscribe();
  }, []);

  const onChange = event => {
    if (event && event.target) {
      searchQuery.next(event.target.value);
    }
  };

  return (
    <div className="App">
      <SearchInput onChange={onChange} focus />
      <div>
        {hasSearched ? (
          <MovieList movies={movieSearch} hasResults={hasResults} />
        ) : (
          <div className="noSearchPlaceholder">
            Start typing to search for a movie...
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
