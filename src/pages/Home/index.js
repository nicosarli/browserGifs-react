import "./home.css";
import React, { useCallback } from "react";
import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches";
import SearchForm from "../../components/SearchForm";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <h3 className="Home-title">Ultima busqueda: </h3>
      <ListOfGifs gifs={gifs} />
      <div className="trendingSearches">
        <TrendingSearches />
      </div>
    </>
  );
}
