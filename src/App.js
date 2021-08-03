import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img src={logo} alt="logo giphy" className="App-content-logo" />
        </Link>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
          <Route component={ListOfGifs} path="/gif/:keyword" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
