import {createAsyncThunk} from "@reduxjs/toolkit";
import {AvailableCurrency, Ticker24hrData} from "@features/add-token-form/lib/store/types";

export const fetchAvailableCurrency = createAsyncThunk(
    'portfolio-list/fetchAvailableCurrency',
    async (arg, thunkAPI)=>{
        try{
            const response: Ticker24hrData[] = await fetch('https://api.binance.com/api/v3/ticker/24hr').then((data)=> data.json())
            // фильтруем массив "в конце usdt и цена не 0"
            const responseMapped: AvailableCurrency[] = response
                .filter((item)=>item.symbol.endsWith('USDT') && +item.lastPrice)
                .map(item=>({
                    symbol: item.symbol.slice(0,-4),
                    lastPrice: parseFloat(item.lastPrice),
                    priceChangePercentage: parseFloat(item.priceChangePercent)
                }))
            return responseMapped
        } catch (err){
            return thunkAPI.rejectWithValue(err)
        }
    })