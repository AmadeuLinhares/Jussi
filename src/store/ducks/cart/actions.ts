import { action } from 'typesafe-actions';
import { CartTypes, Cart, CartRequest } from './types';

export const loadRequestCart = (data: CartRequest) => {
  return action(CartTypes.LOAD_REQUEST, data);
};
export const loadSuccessCart = (data: Cart[]) => {
  return action(CartTypes.LOAD_SUCCESS, { data });
};
export const loadErrorCart = () => {
  return action(CartTypes.LOAD_ERROR);
};
