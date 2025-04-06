import {WebSocketStream} from "@shared/lib/socket/socket-client";
import {useEffect, useMemo, useState} from "react";
import {AssetsType} from "@widgets/portfolio-list/lib/store";

export const useWebSocketStream = () =>{
    const [stream, setStream] = useState<AssetsType>({});
    const format = 'usdt@ticker';

    useEffect(() => {
        const socket = new WebSocketStream();
        const tickersMap = Object.values(stream).map(tickerName => tickerName.symbol+format);
        if(Object.values(stream).length > 0) {
            console.log(stream);
            socket.subscribe(tickersMap)
        };
    }, [stream]);

    return {
        setStream: useMemo(()=>setStream,[])
    }
}