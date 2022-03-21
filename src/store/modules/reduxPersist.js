
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistReducers = persistReducer(
    {
      key: 'NOME-DO-APP',
      storage,
      whitelist: ['example'],
    },
     reducers
  );

  return persistReducers;
}
