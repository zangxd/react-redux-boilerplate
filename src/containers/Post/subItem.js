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

  constructor(props) {
    super(props)

    this.appState = this.props.appState
  }

  render() {
    return (
      <div className="page post">
        <Link to="/posts">&larr; Back to Posts</Link>
        {!!this.appState.item && (
          <article>
            <h1>{this.appState.item.title}</h1>
            <p>{this.appState.item.body}</p>
          </article>
        )}
      </div>
    )
  }
}
