import { useDispatch, useSelector, useStore } from 'react-redux'
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {AppDispatch, RootState, AppStore} from "@shared/lib/store/types";
import {portfolioListActions} from "@widgets/portfolio-list/lib/store";
import {addTokenFormActions} from "@features/add-token-form/lib/store";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()



const rootActions = {
    ...portfolioListActions,
    ...addTokenFormActions
}

export const useStoreActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(()=>bindActionCreators(rootActions, dispatch), [dispatch])
}
