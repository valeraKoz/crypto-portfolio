import {StockToken} from "@entities/stock-token/model";
import {ReactNode} from "react";
import {useStoreActions} from "@shared/lib/store/hooks";
import {MdDeleteForever} from "react-icons/md";

export const TokenTableItem = (
    {item}:{item:StockToken}
) =>{
    const {symbol, lastPrice, totalPrice, quantity, priceChangePercentage, percentageOfPortfolio} = item;
    const {deleteAsset} = useStoreActions()
    return (
        <div
            className='relative flex items-center justify-between bg-white/2 hover:bg-white/10 p-2 rounded-lg cursor-pointer group/tokenItem w-full hover:w-[93.5%] duration-300'>
            <button
                    className='bg-red-800 hover:bg-red-600 h-full w-[7%] flex items-center justify-center rounded-lg absolute -right-[7%] duration-300 opacity-0 pointer-events-none cursor-pointer group-hover/tokenItem:opacity-100 group-hover/tokenItem:pointer-events-auto'
                    onClick={()=>deleteAsset(symbol)}>
                <MdDeleteForever size={30}/>
            </button>
            <TokenTalbeItemSection>
                <div></div>
                <h6>{symbol}</h6>
            </TokenTalbeItemSection>
            <TokenTalbeItemSection>
                <p>
                    {`${percentageOfPortfolio?.toFixed(2)}%`}
                </p>
                <p className='text-white/30 text-xs'>
                    {`${quantity}`}
                </p>
            </TokenTalbeItemSection>
            <TokenTalbeItemSection>
                <p>
                    {`$${lastPrice.toFixed(2)}`}
                </p>
                <p className='text-xs'
                    style={{color: priceChangePercentage < 0 ? "red" : "green"}}>
                    {`${priceChangePercentage < 0 ? '':'+'}${priceChangePercentage.toFixed(2)}%`}
                </p>
            </TokenTalbeItemSection>
            <TokenTalbeItemSection>
                <p>
                    {`$${totalPrice?.toFixed(2)}`}
                </p>
            </TokenTalbeItemSection>
        </div>
    )
}

const TokenTalbeItemSection = ({children}:{children: ReactNode}) => {
    return(
        <div className='flex flex-col items-center gap-1 p-2 min-w-[150px]'>
            {children}
        </div>
    )
}