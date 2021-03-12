import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery'

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        {/* <Route path='*'>
          <Error />
        </Route> */}
         <Route path='/gallery'>
          <Gallery />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
