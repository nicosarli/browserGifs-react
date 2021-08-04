import React, { useRef, useEffect, useCallback } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import useGifs from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

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
