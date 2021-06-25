import contactsReducer from './rootReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter']
};

const store = configureStore({
  reducer: persistReducer(contactsPersistConfig, contactsReducer),
  middleware,
  devTools: process.env.NODE_ENV === 'development'
});
const persistor = persistStore(store);

export default {store, persistor};
