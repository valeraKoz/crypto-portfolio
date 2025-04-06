import {useEffect, useState} from "react";
import {fetchAvailableCurrency, useGetAvailableCurrencySelector} from "@features/add-token-form/lib/store";
import {useAppDispatch} from "@shared/lib/store/hooks";
import {AvailableCurrency} from "@entities/stock-token/model";

export const useAddTokenFormSearch = () => {
    const dispatch = useAppDispatch();
    const [filteredInput, setFilteredInput] = useState<string>("");
    const [filteredData, setFilteredData] = useState<AvailableCurrency[]>([]);
    const {isLoading,availableCurrency} = useGetAvailableCurrencySelector();

    useEffect(() => {
        // загружает стартово данные возможных монет для ScrolledList
        if(availableCurrency.length === 0) dispatch(fetchAvailableCurrency())
    }, [dispatch,availableCurrency]);

    useEffect(() => {
        const filtered = availableCurrency.filter(item=>{
            return item.symbol.toLowerCase().includes(filteredInput.toLowerCase());
        })
        setFilteredData(filtered)
    }, [filteredInput, availableCurrency,isLoading]);


    return {
        filteredInput,
        setFilteredInput,
        filteredData
    }
}