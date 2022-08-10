import { createStore } from 'redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { cartItems } from './data';

// initial state
const initialState = {
  count: 0,
  name: 'Peter',
};

// reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === 'INCREASE') {
    return { ...state, count: state.count + 1, name: 'Anna' };
  }
  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === 'RESET') {
    return { ...state, count: 0 };
  }
  if (action.type === 'CHANGE_NAME') {
    return { ...state, name: 'Brian' };
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
store.dispatch({ type: 'CHANGE_NAME' });
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
