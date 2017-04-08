import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { is, fromJS} from 'immutable'

import LazyRoute from '../libs/lazyroute/index'

import * as appAction from '../actions/appAction'

import TopBar from './TopBar'

@connect(store => store,
  dispatch => bindActionCreators({
  ...appAction
}, dispatch))
export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    authenticate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.authenticate = this.authenticate.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
      return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentDidMount() {
    this.authenticate()
  }

  authenticate(e) {
    if (e) e.preventDefault()
    this.props.authenticate(this.props.appState.toObject().authenticated)
  }

  render() {
    return (
      <Router>
        <Provider store={this.props.store}>
          <div className="wrapper">
            <TopBar appState={this.props.appState.toObject()} authenticate={this.authenticate} />
            <Route
              exact
              path="/"
              render={(props) => <LazyRoute {...props} component={import ('./Home/index')} />}
            />
            <Route
              exact
              path="/posts"
              render={(props) => <LazyRoute {...props} component={import ('./Post/subPage')} />}
            />
            <Route
              exact
              path="/posts/:id"
              render={(props) => <LazyRoute {...props} component={import ('./Post/subItem')} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <LazyRoute {...props} component={import ('./Login/index')} /> }
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
