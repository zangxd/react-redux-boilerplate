import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as appAction from '../../actions/appAction'

export default function DataWrapper(ComposedComponent){
  @connect(store => store,
    dispatch => bindActionCreators({
    ...appAction
  }, dispatch))
  class DataFetcher extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      fetchData: PropTypes.func.isRequired,
      clearItems: PropTypes.func.isRequired
    }

    componentDidMount() {
      let pathname = this.props.match.url
      let id = this.props.match.id ? this.props.match.id : null

      this.props.fetchData(pathname, id)
    }

    componentWillUnmount() {
      this.props.clearItems()
    }

    render() {
      return <ComposedComponent {...this.props} />
    }

  }
  return DataFetcher
}
