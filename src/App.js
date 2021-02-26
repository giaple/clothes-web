import React from 'react'
import MainPage from './Views/Components/Main';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

// import LandingPage from './Views/LandingPage/LandingPage';
var hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/" component={MainPage} />
    </Switch>
  </Router>
  );
}

export default App;
