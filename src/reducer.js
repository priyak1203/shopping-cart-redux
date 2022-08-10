import { CLEAR_CART, DECREASE, INCREASE } from './actions';

function reducer(state, action) {
  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [] };
  // }
  // return state;

  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
}

export default reducer;
