import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import persistReducers from "./modules/reduxPersist";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddlere = createSagaMiddleware();

const store = createStore(persistReducers(rootReducer), applyMiddleware(createSagaMiddleware));

sagaMiddlere.run(rootSaga)

export const persistor = persistStore(store)
export default store;
