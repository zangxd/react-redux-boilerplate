import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LazyRoute extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentWillMount() {
    this.props.component.then((module) => {
      this.component = module.default
      this.setState({loaded: true})
    })
  }

  render() {
    const { loaded } = this.state

    if (loaded) {
      return <this.component {...this.props} />
    } else {
      return (<div />)
    }
  }
}

LazyRoute.propTypes = {
  component: PropTypes.object
}
