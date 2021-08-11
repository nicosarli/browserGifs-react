import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];
const LANGUAGE = ["es", "en", "pt", "id", "ar", "th", "vi", "de", "it", "ja", "ru", "ko", "pl", "nl", "ro",
                  "hu", "sv", "cs", "hi", "bn", "da", "fa", "tl", "fi", "he", "ms", "no", "uk"]

const SearchForm = ({
   initialKeyword = "", 
   initialRating = "g",
  }) => {
  const { keyword, times, rating, language, 
          updateKeyword, updateRating, updateLanguage, resetState } = 
          useForm({ initialKeyword, initialRating, });

  const [path, pushLocation] = useLocation();

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}/${language}`);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
  };

  const handleChangeLanguage = (evt) => {
    updateLanguage(evt.target.value)
  }

  const handleResetValues = () => {
    resetState();
  }

  return (
    <form onSubmit={handleSubmit} className="Home-Form">
      <button onClick={handleResetValues} type="button">Reset values</button>
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
      <select value={language} onChange={handleChangeLanguage}>
        <option disabled>Select language</option>
          {
            LANGUAGE.map((language) => (
              <option key={language}>{language}</option>
            ))
          }
      </select>
      <small>{times}</small>
    </form>
  );
};

export default React.memo(SearchForm);
