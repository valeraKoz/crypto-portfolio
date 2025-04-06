import {combineSlices, configureStore} from '@reduxjs/toolkit'
import {portfolioListSlice} from "@widgets/portfolio-list/lib/store";
import {addTokenFormSlice} from "@features/add-token-form/lib/store";

const reducers = combineSlices(portfolioListSlice,addTokenFormSlice);

export const store = () => configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

