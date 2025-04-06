import {TokenTableFilters} from "@features/tokenTable/ui/TokenTableFilters";
import {TokenTableItems} from "@features/tokenTable/ui/TokenTableItems";
import {useEffect, useState} from "react";
import { useTokenAssetsSelector} from "@widgets/portfolio-list/lib/store";
import {StockToken} from "@entities/stock-token/model";
import {filtered, FilterValue} from "@features/tokenTable/lib";
import {useWebSocketStream} from "@shared/lib/socket";




export const TokenTable = () =>{
    const [filterValue, setFilterValue] = useState<FilterValue>('default');
    const {assets ,symbols} = useTokenAssetsSelector();
    const [tokens, setToken] = useState<StockToken[]>([]);
    // const {setStream} = useWebSocketStream();



    // useEffect(() => {
    //     if(symbols.length > 0) setStream(symbols);
    // }, [symbols.toString()]);

    useEffect(() => {
        setToken(filtered({tokens: Object.values(assets), sortType: filterValue}))
    },[filterValue, assets])

    return(
        <div className='flex flex-col gap-6'>
            <TokenTableFilters filterValue={filterValue} setFilterValue={setFilterValue}/>
            <TokenTableItems tokens={tokens}/>
        </div>
    )
}