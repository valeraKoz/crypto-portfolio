import {AvailableCurrency} from "@widgets/portfolio-list/lib/store";
import {SortType} from "@widgets/portfolio-list/lib/utils/types";

export const availableCurrencySort = (
    {state, value}:{state: AvailableCurrency[],value: SortType})=>{
    switch (value){
        case 'name': return state.sort((a,b)=> a.symbol.localeCompare(b.symbol))
        case 'price': return state.sort((a,b)=> a.lastPrice - b.lastPrice)
        case 'changePrice': return state.sort((a,b)=>a.priceChangePercentage - b.priceChangePercentage)
        default: return state
    }
}