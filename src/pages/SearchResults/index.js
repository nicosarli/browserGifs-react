import React, { useRef, useEffect, useCallback } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import useGifs from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import SearchForm from "../../components/SearchForm";

export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  const title = gifs
    ? `${gifs.length} Resultados de ${decodeURI(keyword)}`
    : "";

  const debouceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debouceHandleNextPage();
  }, [debouceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <SearchForm />
          <div className="search">
            <h3 className="search-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
}
