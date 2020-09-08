import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/other_route">
            {/*<Other page />*/}
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
