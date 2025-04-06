import {TokenTableFilters} from "@features/tokenTable/ui/TokenTableFilters";
import {TokenTableItems} from "@features/tokenTable/ui/TokenTableItems";
import {useEffect, useState} from "react";
import {AssetsType} from "@widgets/portfolio-list/lib/store";
import {StockToken} from "@entities/stock-token/model";
import {filtered, FilterValue} from "@features/tokenTable/lib";




export const TokenTable = ({assets}: {assets: AssetsType}) =>{
    const [filterValue, setFilterValue] = useState<FilterValue>('default');
    const [tokens, setToken] = useState<StockToken[]>([]);

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