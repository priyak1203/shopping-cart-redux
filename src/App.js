import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { cartItems } from './data';
import reducer from './reducer';

// initial state
const initialState = {
  cart: cartItems,
  total: 0,
  amount: 2,
};

// store
const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
