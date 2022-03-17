import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/index';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
