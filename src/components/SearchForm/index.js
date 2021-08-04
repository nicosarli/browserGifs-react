import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
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
    </form>
  );
};

export default React.memo(SearchForm);
