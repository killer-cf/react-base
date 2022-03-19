import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider} from 'react-redux';

import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/index';
import Routes from './routes';
import history from './services/history';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className='toast-container' />
      </Router>
    </Provider>
  );
}

export default App;
