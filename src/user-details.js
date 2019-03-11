import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Endpoint for getting the user data
// `${API_BASE_URL}/users/{id}`

class UserDetails extends Component {
  componentDidMount() {
    const { params } = this.props.match
    console.log(params.id)
  }

  render() {
    return (
      <div>
        <Link to="/">Go to dashboard</Link>
        <div>Name: this will be the name</div>
        <div>Email: this is the email</div>
      </div>
    )
  }
}

export default UserDetails
