import React, { PropTypes } from "react"
import { Route, Link } from "react-router-dom"

const ActiveLink = ({ to, activeOnlyWhenExact, ...rest }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link to={to} {...rest} className={match ? "active" : ""} />
    )}
  />
)

ActiveLink.propTypes = {
  to: PropTypes.string,
  activeOnlyWhenExact: PropTypes.bool
}

export default ActiveLink;
