import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DataWrapper from './dataWrapper'
import Protected from './protected'

@DataWrapper @Protected @connect(store => store)
export default class Subitem extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired
  }

  render() {
    const appState = this.props.appState.toObject()

    return (
      <div className="page post">
        <Link to="/posts">&larr; Back to Posts</Link>
        {!!appState.item && (
          <article>
            <h1>{appState.item.toObject().title}</h1>
            <p>{appState.item.toObject().body}</p>
          </article>
        )}
      </div>
    )
  }
}
