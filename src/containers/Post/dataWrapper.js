import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getData, clearData } from '../../actions/appAction'

export default function DataWrapper(ComposedComponent){
  @connect(state => ({
    appState: state.appState
  }), dispatch => ({actions: bindActionCreators({
    getData,
    clearData
  }, dispatch)}))
  class DataFetcher extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      actions: PropTypes.object
    }

    componentDidMount() {
      const { match } = this.props
      let id = match.id ? match.id : null

      this.props.actions.getData(match.url, id)
    }

    componentWillUnmount() {
      this.props.actions.clearData()
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  return DataFetcher
}
