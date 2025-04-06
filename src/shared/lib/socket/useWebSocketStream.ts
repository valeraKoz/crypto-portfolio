import {WebSocketStream} from "@shared/lib/socket/socket-client";
import {useEffect, useMemo, useState} from "react";
import {useStoreActions} from "@shared/lib/store/hooks";

export const useWebSocketStream = () =>{
    const [stream, setStream] = useState<string[]>([]);
    const {updateAssetsPrice} = useStoreActions();
    const [socket, setSocket] = useState<WebSocketStream>();

    useEffect(() => {
        // создаем соединение при монтировании, и закрываем его при размонтировании
        const socket = new WebSocketStream({
            useMessage: (data) => updateAssetsPrice(data),
        });
        setSocket(socket);
        return () => socket.closeConnection()
    }, []);

    useEffect(() => {
        // при изменении asset-ов, подписываемся на событие
        const tickers = stream.map(s => s.toLowerCase()+'usdt@ticker');
        if(stream.length > 0 && socket) socket.subscribe(tickers);

    }, [stream]);

    return {
        setStream: useMemo(()=>setStream,[])
    }
}