import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import reducer from './reducer';

// store
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
