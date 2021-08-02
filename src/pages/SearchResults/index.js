import React, { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return <>{loading ? <h1>Cargando...</h1> : <ListOfGifs gifs={gifs} />}</>;
}
