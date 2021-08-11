import React, { Suspense } from "react";
import { Link, Route } from "wouter";

import logo from "./images/logo.png";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header";
import Login from "./pages/Login";

import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";
import { UserContextProvider } from "./context/UserContext";

import "./App.css";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to="/">
              <img src={logo} alt="logo giphy" className="App-content-logo" />
            </Link>
            <GifsContextProvider>
              <Route component={HomePage} path="/" />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?/:language?"
              />
              <Route component={Detail} path="/gif/:id" />
              <Route component={ListOfGifs} path="/gif/:keyword" />
              <Route component={Login} path="/login" />
              <Route component={() => <h1> 404 ERROR :( </h1>} path="/404" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
