
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/typeActions.js';

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return products.map((product) => (product._id === action.payload._id ? action.payload : product));
    case CREATE:
      return [...products, action.payload];
    case UPDATE:
      return products.map((product) => (product._id === action.payload._id ? action.payload : product));
    case DELETE:
      return products.filter((product) => product._id !== action.payload);
    default:
      return products;
  }
};

export default productsReducer;
