import React from "react";
import Gif from "../../components/Gif/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return (
    <div>
      <h3 className="Detail-title">{gif.title}</h3>
      <Gif {...gif} />
    </div>
  );
}
