// Actions types
// eslint-disable-next-line no-shadow
export enum ProductsTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_ERROR = '@products/LOAD_ERROR',
  LOAD_ADD_TO_CART = '@products/LOAD_ADD_TO_CART',
}

// Actions Data

export interface Products {
  name: string;
  id: string;
  price: string;
  quantity: number;
}

// State types

export interface ProductsState {
  data: Products[];
  loading: boolean;
  error: boolean;
}
