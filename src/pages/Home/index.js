import "./home.css";
import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

const POPULAR_GIFS = ["avengers", "dc", "marvel", "power ranger"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="Home-Form">
        <input
          type="text"
          placeholder="Search a gif here..."
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <h3 className="Home-title">Ultima busqueda: </h3>
      <ListOfGifs gifs={gifs} />
      <div className="popularGifs">
        <h3 className="Home-title">GIFS populares: </h3>
        <ul>
          {POPULAR_GIFS.map((popularGif) => (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
