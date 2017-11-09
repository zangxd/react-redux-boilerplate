import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { is, fromJS} from 'immutable'

//import LazyRoute from '../libs/lazyroute/index'
//render={(props) => <LazyRoute {...props} component={import ('./Home/index')} />

import Login from './Login/index'
import TopBar from './TopBar'
import Home from './Home/index'
import SubPage from './Post/subPage'
import SubItem from './Post/subItem'

import { setAuthenticate } from '../actions/appAction'

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.setAuthenticate = this.setAuthenticate.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentDidMount() {
    this.setAuthenticate(this.props.appState.toObject().authenticated)
  }

  setAuthenticate(currAuthenticated) {
    this.props.actions.setAuthenticate(currAuthenticated)
  }

  render() {
    const store = this.props.store
    const appState = this.props.appState.toObject()

    return (
      <Router>
        <Provider store={store}>
          <div className="wrapper">
            <TopBar appState={appState} setAuthenticate={() => {this.setAuthenticate(appState.authenticated)}} />
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/posts"
              component={SubPage}
            />
            <Route
              exact
              path="/posts/:id"
              component={SubItem}
            />
            <Route
              exact
              path="/login"
              component={Login}
            />
            <footer>
              Cobbled together by zangxd | github:
              <a href="https://github.com/zangxd" rel="noopener noreferrer" target="_blank">zangxd</a>
            </footer>
          </div>
        </Provider>
      </Router>
    )
  }
}

export default connect(state => ({
  appState: state.appState
}), dispatch => ({actions: bindActionCreators({
  setAuthenticate
}, dispatch)}))(App)
