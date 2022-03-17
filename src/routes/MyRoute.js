import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function MyRoutes({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && isLoggedIn) {
    return <Route />;
  }
}
