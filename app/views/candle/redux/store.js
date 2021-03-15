import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {reducerForThunk} from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = reducerForThunk;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return {store, persistor};
};
