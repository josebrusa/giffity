import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";
import logo from './isologo.svg'
import Header from "components/Header";


import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import ErrorPage from "pages/ErrorPage";

import { GifsContextProvider } from "context/GifsContext";

import "./App.css";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to="/">
              <figure className="App-logo">
              <img alt='giffity isologo' src={logo} />
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route component={ErrorPage} path="/:rest*" />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
  );
}