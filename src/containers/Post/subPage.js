import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Protected from './protected'
import DataWrapper from './dataWrapper'

@Protected @DataWrapper @connect(store => store)
export default class SubPage extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.appState = this.props.appState
  }

  render() {
    return (
      <div className="page posts">
        <h1>Posts</h1>
        <p className="subheader">Posts are fetched from jsonplaceholder.typicode.com</p>
        <hr />
        <ul>
          {this.appState.items && this.appState.items.length ? this.appState.items.slice(6,12).map(post => {
            return (
              <li key={post.id}>
                <Link to={`${this.props.match.path}/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.body.substring(0, 120)}</p>
              </li>
            )
          }) : 'Loading...'}
        </ul>
      </div>
    )
  }
}
