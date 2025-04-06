import {useAppSelector} from "@shared/lib/store/hooks";
import {useMemo} from "react";

export const useTokenAssetsSelector = () => {
    const assets = useAppSelector(state => state.portfolioList.assets);

    const symbols = useMemo(() =>
            JSON.stringify(Object.keys(assets).sort()), // Сортируем для стабильности
        [assets]);

    return { assets, symbols: JSON.parse(symbols) };
}