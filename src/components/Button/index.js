import React, { PropTypes } from 'react'

const Button = ({...props}) => {
  return <a className="button" onClick={props.onClick}>{props.title}</a>
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default Button
