import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = ({
   initialKeyword = "", 
   initialRating = "g" 
  }) => {
  const { keyword, times, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const [path, pushLocation] = useLocation();

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
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
      <small>{times}</small>
    </form>
  );
};

export default React.memo(SearchForm);
