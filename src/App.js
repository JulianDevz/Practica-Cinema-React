import React from 'react'
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import Login from './components/auth/Login';
import Peliculas from './components/peliculas/Peliculas'
import PeliculaState from './context/pelicula/peliculaState'

function App() {

  return (
    <PeliculaState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/peliculas" component={Peliculas} />
        </Switch>
      </Router>
    </PeliculaState>
  );
}

export default App;
