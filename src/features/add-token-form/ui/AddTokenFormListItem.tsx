import {AvailableCurrency} from "@features/add-token-form/lib/store/types";
import {useFormDataState} from "@features/add-token-form/lib/hooks";


export const AddTokenFormListItem = (
    {item,key}:{item: AvailableCurrency, key:number}) =>{
    const {setToken,formDataState} = useFormDataState();
    return (
        <div
            key={key}
            className={`${formDataState.token === item ? 'bg-main' : ''} w-full grid grid-cols-3 py-2 cursor-pointer hover:bg-main text-neutral-400 hover:text-white`}
            onClick={()=>setToken(item)}
        >
            <p>{item.symbol}</p>
            <p>{item.lastPrice}</p>
            <p style={
                {color: `${item.priceChangePercentage < 0 ? "red" : (item.priceChangePercentage > 0 ? "green" : null)}`}}>
                {item.priceChangePercentage}
            </p>
        </div>
    )
}