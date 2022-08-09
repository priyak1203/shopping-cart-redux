import { createStore } from 'redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { cartItems } from './data';

// initial state
const initialState = {
  count: 0,
};

// reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === 'INCREASE') {
    return { count: state.count + 1 };
  }
  if (action.type === 'DECREASE') {
    return { count: state.count - 1 };
  }
  if (action.type === 'RESET') {
    return { count: 0 };
  }
  return state;
}

// store
const store = createStore(reducer, initialState);
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'RANDOM' });
store.dispatch({ type: 'INCREASE' });

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
