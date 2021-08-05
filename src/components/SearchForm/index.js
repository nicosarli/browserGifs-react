import React, { useState } from "react";
import { useLocation } from "wouter";

const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const [rating, setRating] = useState(RATINGS[0]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="Home-Form">
      <input
        type="text"
        placeholder="Search a gif here..."
        value={keyword}
        onChange={handleChange}
      />
      <button className="Home-Button">Search</button>
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
};

export default React.memo(SearchForm);
