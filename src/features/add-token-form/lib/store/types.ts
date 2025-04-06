import {SerializedError} from "@reduxjs/toolkit";
import {AvailableCurrency} from "@entities/stock-token/model";

type TokenFormDataState = {
    token: AvailableCurrency,
    quantity: number;
}
export type AddTokenFormState = {
    isLoading: boolean;
    error: SerializedError | null,
    isHiddenForm: boolean,
    availableCurrency: AvailableCurrency[],
    formDataState: Partial<TokenFormDataState>,
}


export type Ticker24hrData = {
    "symbol": string,
    "priceChange": string,
    "priceChangePercent": string,
    "weightedAvgPrice": string,
    "prevClosePrice": string,
    "lastPrice": string,
    "lastQty": string,
    "bidPrice": string,
    "bidQty": string,
    "askPrice": string,
    "askQty": string,
    "openPrice": string,
    "highPrice": string,
    "lowPrice": string,
    "volume": string,
    "quoteVolume": string,
    "openTime": number,
    "closeTime": number,
    "firstId": number,   // First tradeId
    "lastId": number,    // Last tradeId
    "count": number         // Trade count
}