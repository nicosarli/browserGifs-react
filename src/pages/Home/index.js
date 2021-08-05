import "./home.css";
import React, { useCallback } from "react";
import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches";
import SearchForm from "../../components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <meta name="description" content={`Home of site`} />
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <h3 className="Home-title">Ultima busqueda: </h3>
      <ListOfGifs gifs={gifs} />
      <div className="trendingSearches">
        <TrendingSearches />
      </div>
    </>
  );
}
