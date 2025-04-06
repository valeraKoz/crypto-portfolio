import {StockToken} from "@entities/stock-token/model";
import {FilterValue} from "@features/tokenTable/lib/types";

export const filtered = ({tokens, sortType}:{tokens: StockToken[], sortType:FilterValue}): StockToken[] => {

    switch (sortType) {
        case "nameUp":{
            return tokens.sort((a,b) => a.symbol.localeCompare(b.symbol));
        }
        case "nameDown":{
            return tokens.sort((a,b) => b.symbol.localeCompare(a.symbol));
        }
        case "percentUp":{
            return tokens.sort((a,b)=> a.percentageOfPortfolio! - b.percentageOfPortfolio!);
        }
        case "percentDown":{
            return tokens.sort((a,b)=> b.percentageOfPortfolio! - a.percentageOfPortfolio!);
        }
        case "priceUp":{
            return tokens.sort((a,b)=> a.lastPrice - b.lastPrice);
        }
        case "priceDown":{
            return tokens.sort((a,b)=> b.lastPrice - a.lastPrice);
        }
        case "balanceUp":{
            return tokens.sort((a,b)=>a.totalPrice! - b.totalPrice!);
        }
        case "balanceDown":{
            return tokens.sort((a,b)=> b.totalPrice! - a.totalPrice!);
        }
        default: {
            return tokens
        }

    }
}


/*

| 'nameUp'
| 'nameDown'
| 'percentUp'
| 'percentDown'
| 'priceUp'
| 'priceDown'
| 'balanceUp'
| 'balanceDown'
| 'default'

*/
