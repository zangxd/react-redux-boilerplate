import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function DataWrapper(props){
  console.log('DataWrapper:', props)
  @connect(store => store)
  class DataFetcher extends Component {
    static propTypes = {
      appState: PropTypes.object.isRequired,
      match:  PropTypes.object.isRequired
    }

    constructor(props) {
      super(props)

      this.store = this.props.appState
    }

    componentDidMount() {
      let pathname = this.props.match.url
      let id = this.props.match.id ? this.props.match.id : null

      this.store.fetchData(pathname, id)
    }

    componentWillUnmount() {
      this.store.clearItems()
    }

    render() {
      return <Component {...this.props} />
    }

  }
  return DataFetcher
}
