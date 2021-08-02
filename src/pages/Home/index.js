import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./home.css";

const POPULAR_GIFS = ["Matrix", "Avengers", "Batman", "Iron Man", "Cusco"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  console.log(path);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <h3 className="Home-title">Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGifs) => (
          <li key={popularGifs}>
            <Link to={`/search/${popularGifs}`}>GIFS de {popularGifs}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
