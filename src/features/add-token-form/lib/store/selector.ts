import {useAppSelector} from "@shared/lib/store/hooks";


export const useGetAvailableCurrencySelector = ()=>{
    const availableCurrency = useAppSelector(state=>state.addTokenForm.availableCurrency);
    const isLoading = useAppSelector(state=> state.addTokenForm.isLoading);
    return {availableCurrency, isLoading};
}
export const useTokenFormIsHiddenSelector = () => {
    return useAppSelector(state=>state.addTokenForm.isHiddenForm)
}

export const useFormStateDataSelector = () =>{
    return useAppSelector(state=>state.addTokenForm.formDataState)
}