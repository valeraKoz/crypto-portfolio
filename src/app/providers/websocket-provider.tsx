import {createContext} from "react";
import {WebSocketStream} from "@shared/lib/socket";
import {useStoreActions} from "@shared/lib/store/hooks";

const WSProvider = createContext<WebSocketStream|undefined>(undefined)

export const WebsocketProvider = (
    {children}:{children: React.ReactNode}
) =>{
    const {updateAssetsPrice} = useStoreActions();

    return(
        <WSProvider value={new WebSocketStream({
            useMessage: (data) => updateAssetsPrice(data)
        })}>
            {children}
        </WSProvider>
    )

}