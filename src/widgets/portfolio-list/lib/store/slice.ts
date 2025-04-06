import {createSlice} from "@reduxjs/toolkit";
import {PortfolioListState} from "@widgets/portfolio-list/lib/store/types";
import {StockToken} from "@entities/stock-token/model";
import {SymbolTickerStreamData} from "@shared/lib/socket";

const initialState: PortfolioListState = {
    assets: {},
    totalPrice: 0,
}

export const portfolioListSlice = createSlice({
    name: 'portfolioList',
    initialState,
    reducers: {
        addAsset: (state,{payload}: {payload: StockToken})=>{
            const hasAssets = state.assets[payload.symbol];
            if(!hasAssets){
                state.assets[payload.symbol] = {
                    symbol: payload.symbol,
                    lastPrice: payload.lastPrice,
                    quantity: +payload.quantity,
                    totalPrice: payload.lastPrice * +payload.quantity,
                    priceChangePercentage: payload.priceChangePercentage,
                }
                state.totalPrice += state.assets[payload.symbol].totalPrice!
            } else {
                state.totalPrice = state.totalPrice - hasAssets.totalPrice!;
                hasAssets.lastPrice = payload.lastPrice;
                hasAssets.quantity += +payload.quantity;
                hasAssets.totalPrice! += hasAssets.quantity * hasAssets.lastPrice;
                state.totalPrice += hasAssets.totalPrice!;
            }
            Object.values(state.assets).forEach(asset=>{
                asset.percentageOfPortfolio = (asset.totalPrice! / state.totalPrice) * 100
            })


        },
        deleteAsset: (state, {payload}: {payload: string})=>{
            delete state.assets[payload]
        },

        updateAssetsPrice: (state, {payload}:{payload:SymbolTickerStreamData})=>{
            const assetsName = payload.data.s.slice(0,-4);
            const thisAsset = state.assets[assetsName];
            if(thisAsset){
                state.totalPrice = state.totalPrice - thisAsset.totalPrice!;
                thisAsset.lastPrice = +payload.data.c;
                thisAsset.priceChangePercentage = +payload.data.P;
                thisAsset.totalPrice = thisAsset.quantity * thisAsset.lastPrice;
                state.totalPrice += thisAsset.totalPrice!;

            }
            Object.values(state.assets).forEach(asset=>{
                asset.percentageOfPortfolio = (asset.totalPrice! / state.totalPrice) * 100
            })
        }

    },

})
export const {actions: portfolioListActions, reducer: portfolioListReducer} = portfolioListSlice

// assets: [ {id:1} ]
// [ 'BTC':{}]


// 1000 / 100 = 10
// 300 / 10 = 30

// 300 / (1000/100)
// 300/1000 * 100