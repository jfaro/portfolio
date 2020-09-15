import React, { Fragment } from 'react';
import './styles.css';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Header from './components/Header'

import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import Drawing from './pages/Drawing'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="page-container">
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <Header />
                <Switch>
                  <Route path="/web-development" render={() => <WebDevelopment />} />
                  <Route path="/drawing" render={() => <Drawing />} />
                  <Route path="/" render={() => <Home />} />
                </Switch>
              </Fragment>
            )}
          />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
