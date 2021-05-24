import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducers';
import { ProductsState } from './ducks/products/types';
import { CartState } from './ducks/cart/types';
import rootSaga from './ducks/rootSagas';

export interface ApplicationState {
  products: ProductsState;
  cart: CartState;
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
export default store;
