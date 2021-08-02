import React from "react";

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className="ListOfGifs-items">
      <img src={url} alt={title} />
    </a>
  );
};

export default Gif;
