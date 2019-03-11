import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Users from './users'
import UserDetails from './user-details'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/user/:id" exact component={UserDetails} />
        </div>
      </Router>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
