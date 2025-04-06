import {createSlice} from "@reduxjs/toolkit";
import {AddTokenFormState} from "@features/add-token-form/lib/store/types";
import {fetchAvailableCurrency} from "@features/add-token-form/lib/store/thunk";

const initialState:AddTokenFormState = {
    availableCurrency: [],
    isHiddenForm: true,
    isLoading: false,
    error: null,
    formDataState:{},
}

export const addTokenFormSlice = createSlice({
    name: 'addTokenForm',
    initialState,
    reducers: {
        setIsFormHidden: (state)=>{
            state.isHiddenForm = !state.isHiddenForm
        },
        setQuantity: (state,{payload})=>{
            state.formDataState.quantity = payload
        },
        setToken: (state,{payload})=>{
            state.formDataState.token = payload
        },
        resetFormDataState: (state)=>{
            state.formDataState = {}
        }

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAvailableCurrency.pending, state => {
            state.isLoading = true;
            state.error = null
        });
        builder.addCase(fetchAvailableCurrency.fulfilled, (state,{payload}) => {
            state.isLoading = false;
            state.error = null;
            state.availableCurrency = payload
        });
        builder.addCase(fetchAvailableCurrency.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error || 'Ошибка запроса';
        })
    }
})

export const {actions:addTokenFormActions, reducer:addTokenFormReducer} = addTokenFormSlice