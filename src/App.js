import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "rucula" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => {
          const { title, id, url } = singleGif;
          <Gif title={title} id={id} url={url} />;
        })}
      </section>
    </div>
  );
}

export default App;
