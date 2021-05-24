/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-parens */
import { Reducer } from 'redux';
import produce from 'immer';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
      break;
    case ProductsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
      break;
    case ProductsTypes.LOAD_ADD_TO_CART:
      return {
        ...state,
        data: state.data.map(val => {
          return {
            ...val,
            quantity:
              val.id === action.payload ? (val.quantity += 1) : val.quantity,
          };
        }),
      };
      break;
    case ProductsTypes.LOAD_ERROR:
      return { ...state, loading: true, error: true, data: [] };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
