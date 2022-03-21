import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store/store'
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/index';
import Routes from './routes';
import history from './services/history';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className='toast-container' />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
