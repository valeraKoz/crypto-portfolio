import {StockToken} from "@entities/stock-token/model";
import {TokenTableItem} from "@features/tokenTable/ui/TokenTableItem";


export const TokenTableItems = ({tokens}:{tokens: StockToken[]}) =>{
    return(
        <div className='flex flex-col gap-4'>
            {tokens.map((token,index)=>(
                <TokenTableItem key={index} item={token}/>
            ))}
        </div>
    )
}