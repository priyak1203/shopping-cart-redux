import { createStore } from 'redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { cartItems } from './data';

// initial state
const initialState = {
  count: 73,
};

// reducer
function reducer(state, action) {
  console.log({ state, action });
  return state;
}

// store
const store = createStore(reducer, initialState);

console.log(store.getState());

function App() {
  return (
    <main>
      <Navbar items={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
