import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from 'app/reducers';
import rootSaga from 'app/sagas';

export default function configureStore(): Store {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
