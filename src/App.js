import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/index';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
