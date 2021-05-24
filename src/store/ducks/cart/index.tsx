import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.LOAD_REQUEST:
      return { ...state, loading: true };
      break;
    case CartTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
      break;
    case CartTypes.LOAD_ERROR:
      return { ...state, loading: true, error: true, data: [] };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
