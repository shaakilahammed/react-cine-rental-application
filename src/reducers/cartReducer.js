const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return [...state, action.payload];
    }
    case 'REMOVE_FROM_CART': {
      return state.filter((item) => item.id !== action.payload);
    }
    default: {
      console.error(action.type + ' is invalid type');
      return state;
    }
  }
};

export default cartReducer;
