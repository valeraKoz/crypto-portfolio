import {useAppSelector} from "@shared/lib/store/hooks";

export const useTokenAssetsSelector = () => {
    return useAppSelector(state=> state.portfolioList.assets);
}