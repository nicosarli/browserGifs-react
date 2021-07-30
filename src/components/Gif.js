import React from "react";

const Gif = ({ id, title, url }) => {
  return (
    <div className="Card-Gifs">
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </div>
  );
};

export default Gif;
