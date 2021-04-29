import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>

          <Link to='/gif/dragonball'>Dragon Ball</Link>
          <Link to='/gif/lossimpsons'>Los Simpsons</Link>
          <Link to='/gif/powerrangers'>Power Rangers</Link>

        <Route component={ListOfGifs} path='/gif/:keyword' />
        {/* <ListOfGifs keyword='panda' /> */}
        {/* <button onClick={() => setGifs(DIFERENT_GIFS)}>Cambiar gif</button> */}
      </section>
    </div>
  );
}

export default App;
