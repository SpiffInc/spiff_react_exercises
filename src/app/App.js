import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom"
import ParserExercise from "../parser_exercise/ParserExercise"
import ProgressBarExercise from "../progress_bar_exercise/ProgressBarExercise"

import "./App.scss"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="layout-container">
          <div className="exercise-index">
            <h2 className="title">Exercises</h2>

            <ul className="exercise-links">
              <li>
                <NavLink exact={true} to="/progress_bar">
                  Progress Bar
                </NavLink>
              </li>
              <li>Parser (Deprecated)</li>
            </ul>
          </div>

          <div className="exercise-show">
            <Switch>
              <Route path="/progress_bar">
                <ProgressBarExercise />
              </Route>
              <Route path="/parser">
                <ParserExercise />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
