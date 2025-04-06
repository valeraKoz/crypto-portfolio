import {SymbolTickerStreamData, WebSocketPayload, WebSocketStreamOptions} from "@shared/lib/socket/types";

export class WebSocketStream{
    wsUrl: string;
    wsConnected?: WebSocket;
    isSubscribed: boolean;
    timeToReconnectMS: number;
    reconnectTimeout?: ReturnType<typeof setTimeout>;
    aC?: SymbolTickerStreamData;
    useMessage?: (data: SymbolTickerStreamData) => void


    constructor(options?: WebSocketStreamOptions) {
        this.wsUrl = options && options.wsUrl ? options.wsUrl : "wss://stream.binance.com:9443";
        this.timeToReconnectMS = options && options.timeToRecconectMS ? options.timeToRecconectMS : 3000;
        this.isSubscribed = false
        this.reconnectTimeout = undefined;
        this.useMessage = options?.useMessage;
    }

    private prepareUrl(stream: string | string[]){
        return `${this.wsUrl}/stream?streams=${stream}`
    }
    private isConnected(){
        return !(!this.wsConnected || this.wsConnected.readyState !== WebSocket.OPEN);
    }

    initConnection(url: string){
        const ws = new WebSocket(url);
        this.wsConnected = ws;

        ws.onopen = ()=> {
            console.log('Соединение установлено');
        };
        ws.onmessage = (event)=> {
            const eventData: SymbolTickerStreamData = JSON.parse(event.data);
            this.aC = eventData;
            if(this.useMessage){
                this.useMessage(eventData);
                console.log(eventData);
            }
        };

        ws.onclose = (event)=> {
            console.log('Соединение закрыто');
        };

        ws.onerror = (error)=> {
            console.log(`Ошибка: ${error}`);
        };
    }
    closeConnection(){
        if(!this.isConnected() || !this.wsConnected) console.log('WebSocket не подключен!')
        else {
            this.wsConnected.close();
        }
    }

    send(payload: WebSocketPayload){
        if(!this.isConnected()) console.log('Веб сокет клиент не запущен!')
        else{
            if(this.wsConnected) this.wsConnected.send(JSON.stringify(payload));
            else throw new Error('Веб сокет клиент не инициализирован')
        }
    }

    // Подписка на соединение с заданными параметрами
    subscribe(stream: string | string[]){
        if(!this.isConnected()){
            if(Array.isArray(stream)) stream = stream.join('/');
            const url = this.prepareUrl(stream);
            this.initConnection(url);
        }else{
            if(!Array.isArray(stream)){
                stream = [stream];
            }
            const payload:WebSocketPayload = {
                method: 'SUBSCRIBE',
                params: stream,
                id: Date.now(),
            };
            this.send(payload);
        }
    }

    // Отписка от соединения заданных параметров
    unsubscribe(stream: string | string[]){
        if(!this.isConnected()){
            console.log('Нет соединения!');
        } else {
            if(!Array.isArray(stream)){
                stream = [stream]
            }
            const payload:WebSocketPayload = {
                method: 'UNSUBSCRIBE',
                params: stream,
                id: Date.now()
            };
            this.send(payload);
        }
    }
}