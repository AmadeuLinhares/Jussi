// Actions types
// eslint-disable-next-line no-shadow
export enum CartTypes {
  LOAD_REQUEST = '@cart/LOAD_REQUEST',
  LOAD_SUCCESS = '@cart/LOAD_SUCCESS',
  LOAD_ERROR = '@cart/LOAD_ERROR',
}

// Actions Data

export interface Cart {
  name: string;
  id: string;
  price: string;
  quantity: number;
}

// State types

export interface CartState {
  data: Cart[];
  loading: boolean;
  error: boolean;
}

export interface CartRequest {
  id: number;
  quantity: number;
}
