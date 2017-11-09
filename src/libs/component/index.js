import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Component extends React.Component {
  classNames(...args: Array<mixed>): mixed {
    return classnames(args)
  }

  className(...args: Array<mixed>): mixed {
    return this.classNames.apply(this, args.concat([this.props.className]))
  }

  style(args: Object): Object {
    return Object.assign({}, args, this.props.style)
  }
}

Component.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}
