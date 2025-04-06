export type StockToken = AvailableCurrency & {
    quantity: number;               // 1
    totalPrice?: number;
    percentageOfPortfolio?: number;  // 65.33123121
}

export type AvailableCurrency = {
    symbol: string;
    lastPrice: number;
    priceChangePercentage: number;
}

