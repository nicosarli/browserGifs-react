import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/batman">Gifs de batman</Link>
        <Link to="/gif/robin">Gifs de robin</Link>
        <Link to="/gif/vaca">Gifs de vacas</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
