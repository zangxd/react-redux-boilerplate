import React, { Component, PropTypes } from 'react'
import ActiveLink from './activeLink'

export default class TopNav extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { authenticated } = this.props.appState

    return (
      <nav>
        <ActiveLink activeOnlyWhenExact={true} to="/">Home</ActiveLink>
        {authenticated && <ActiveLink to="/posts">Posts</ActiveLink>}
      </nav>
    )
  }

}
