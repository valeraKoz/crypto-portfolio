import {StockToken} from "@entities/stock-token/model";

export type AssetsType = {
    [key: string]: StockToken;
}
export type PortfolioListState = {
    assets: AssetsType,
    totalPrice: number,
}