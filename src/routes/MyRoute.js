import React from 'react';
import { Redirect, Route  } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoutes({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: {prevPath: rest.location.pathname}}}
      />
    )

  }

  return <Route {...rest} component={Component}/>
}

MyRoutes.defaultProps = {
  isClosed: false,
};

MyRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
}
