import {combineSlices, configureStore} from '@reduxjs/toolkit'
import {portfolioListSlice} from "@widgets/portfolio-list/lib/store";
import {addTokenFormSlice} from "@features/add-token-form/lib/store";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineSlices(portfolioListSlice,addTokenFormSlice);

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = () => configureStore({
    reducer: persistedReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store());

