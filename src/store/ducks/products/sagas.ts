/* eslint-disable arrow-parens */
import { call, put } from 'redux-saga/effects';
import api from '../../../services/index';
import { loadSuccess, loadError } from './actions';
import { Products } from './types';

export function* load() {
  try {
    const { data } = yield call(api.get, '/products');
    console.log('===> data', data);
    const formattedProducts = data.map((val: Products[]) => {
      return {
        ...val,
        quantity: 0,
      };
    });
    yield put(loadSuccess(formattedProducts));
  } catch (err) {
    yield put(loadError());
    console.log(err);
  }
}
