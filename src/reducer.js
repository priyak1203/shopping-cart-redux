import {
  CLEAR_CART,
  DECREASE,
  GET_TOTALS,
  INCREASE,
  REMOVE,
  TOGGLE_AMOUNT,
} from './actions';

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    case INCREASE: {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }

    case DECREASE: {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    }

    case GET_TOTALS: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = amount * price;

          cartTotal.amount += amount;
          cartTotal.total += itemTotal;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }

    case TOGGLE_AMOUNT: {
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === 'inc') {
              cartItem = { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (action.payload.toggle === 'dec') {
              cartItem = { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        }),
      };
    }
    default:
      return state;
  }
}

export default reducer;
