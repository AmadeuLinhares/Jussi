import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from './products/types';
import { load } from './products/sagas';

import { CartTypes } from './cart/types';
import { loadCart } from './cart/sagas';

type Params = { id: number; quantity: number };

function* rootSaga(): any {
  return yield all([
    takeLatest(ProductsTypes.LOAD_REQUEST, load),
    takeLatest(CartTypes.LOAD_REQUEST, loadCart),
  ]);
}
export default rootSaga;
