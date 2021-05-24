/* eslint-disable no-debugger */
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import api from '../../../services/index';
import { loadSuccessCart, loadErrorCart } from './actions';
import { loadAddToCart } from '../products/actions';
import { CartRequest } from './types';

export function* loadCart({ payload }: AnyAction) {
  try {
    console.log(payload);
    const { data } = yield call(api.get, `/stocks/${payload.id}`);
    debugger;
    if (data.quantity > payload.quantity) {
      console.log('===> STOCKS', data);
      yield put(loadAddToCart(payload.id));
    } else {
      alert('Estoque indisponivel');
    }
  } catch (err) {
    yield put(loadErrorCart());
    console.log(err);
  }
}
