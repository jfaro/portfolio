import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/other_route">
          {/*<Other page />*/}
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
