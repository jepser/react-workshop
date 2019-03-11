import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { API_BASE_URL } from './constants'

import './styles.css'

const getUsers = () => {
  return fetch(`${API_BASE_URL}/users`).then(r => r.json())
}

class Users extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  UNSAFE_componentWillMount() {
    return getUsers().then(users => {
      console.log(users)

      this.setState({
        users
      })
    })
  }

  render() {
    const { users } = this.state
    return (
      <div className="App">
        <h1>Users</h1>
        <ul class="table">
          <li className="cell">
            <span className="column">Name</span>
            <span className="column">Email</span>
          </li>
          {users.map(user => (
            <li className="cell">
              <span className="column">{user.name}</span>
              <span className="column">{user.email}</span>
              <Link to={`/user/${user.id}`}>See details</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Users
