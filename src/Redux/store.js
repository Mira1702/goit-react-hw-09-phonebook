import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './contacts/reducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import authReducer from './auth/auth-reducer';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const authPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: reducer,
    },
    middleware,
    // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
