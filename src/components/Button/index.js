import React from 'react'
import PropTypes from 'prop-types'

const Button = ({...props}) => {
  return <button className="button" onClick={props.onClick}>{props.title}</button>
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default Button
