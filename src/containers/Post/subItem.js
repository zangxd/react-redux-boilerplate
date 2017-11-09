import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import DataWrapper from './dataWrapper'
import Protected from './protected'

@DataWrapper @Protected @connect(store => store)
export default class Subitem extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired
  }

  render() {
    const appState = this.props.appState.toObject()
    const item = appState.item.toObject()

    return (
      <div className="page post">
        <Link to="/posts">&larr; Back to Posts</Link>
        {!!appState.item && (
          <article>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </article>
        )}
      </div>
    )
  }
}
