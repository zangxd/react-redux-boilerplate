import React, { Component, PropTypes } from 'react'
import ActiveLink from './activeLink'

export default class TopNav extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    authenticate: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.appState = this.props.store.appState
  }

  authenticate(e) {
    if (e) e.preventDefault()
    this.props.store.authenticate()
  }

  render() {
    const { authenticated } = this.appState
    console.log(this.props.store)
    return (
      <nav>
        <ActiveLink activeOnlyWhenExact={true} to="/">Home</ActiveLink>
        {authenticated && <ActiveLink to="/posts">Posts</ActiveLink>}
      </nav>
    )
  }

}
