import {useStoreActions} from "@shared/lib/store/hooks";
import {useFormStateDataSelector} from "@features/add-token-form/lib/store";

export const useFormDataState = () => {
    const {setQuantity,setToken, addAsset, resetFormDataState} = useStoreActions();
    const formDataState = useFormStateDataSelector()

    return {
        setQuantity,
        setToken,
        formDataState,
        addAsset,
        resetFormDataState
    }
}