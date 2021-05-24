import { action } from 'typesafe-actions';
import { ProductsTypes, Products } from './types';

export const loadRequest = () => {
  return action(ProductsTypes.LOAD_REQUEST);
};
export const loadSuccess = (data: Products[]) => {
  return action(ProductsTypes.LOAD_SUCCESS, { data });
};
export const loadError = () => {
  return action(ProductsTypes.LOAD_ERROR);
};
export const loadAddToCart = (id: number) => {
  return action(ProductsTypes.LOAD_ADD_TO_CART, id);
};
