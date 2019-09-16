import React, { useState } from "react";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/movies/:id" component={Movie} />
        <Route exact path="/" component={MovieList} />
      </div>
    </div>
  );
};

export default App;
