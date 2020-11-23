import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'
import Exercises from './pages/ExercisePage'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
      <Route exact path="/">
      <Exercises/>
      </Route>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
