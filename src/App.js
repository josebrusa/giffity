import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Pepito from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'
import { Link, Route } from "wouter"
import logo from './isologo.svg'

export default function App() {
  return (
  <Pepito.Provider value={{name: 'cocho',
      suscribeteAlCanal: true}}>
          <div className="App">
            <section className="App-content">
              <Link to="/">
                <figure className="App-logo">
                  <img alt='giffity isologo' src={logo} />
                </figure>
              </Link>
              <GifsContextProvider>
                <Route component={Home} path="/" />
                <Route component={SearchResults} path="/search/:keyword" />
                <Route component={Detail} path="/gif/:id" />
                <Route component={() => <h1>Ups! Error 404 / Preguntale a Cocho que paso 😁</h1>} path='/404' />
              </GifsContextProvider>
            </section>
          </div>
    </Pepito.Provider>
  )
}

