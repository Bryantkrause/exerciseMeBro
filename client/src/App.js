import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'
import Exercises from './pages/ExercisePage'
import Charts from './pages/ChartPage'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
      <Route exact path="/">
      <Exercises/>
      </Route>
      <Route exact path="/chart">
      <Charts/>
      </Route>

      </Switch>
      </Router>
    </div>

  );
}

export default App;
