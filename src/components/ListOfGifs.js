import React from "react";
import Gif from "./Gif";
import "./styles.css";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs?.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
    </div>
  );
};

export default ListOfGifs;
