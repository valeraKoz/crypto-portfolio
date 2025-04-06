import {SymbolTickerStreamData, WebSocketPayload, WebSocketStreamOptions} from "@shared/lib/socket/types";

export class WebSocketStream{
    wsUrl: string;
    wsConnected?: WebSocket;
    isSubscribed: boolean;
    timeToReconnectMS: number;
    reconnectTimeout?: ReturnType<typeof setTimeout>;
    aC?: SymbolTickerStreamData;


    constructor(options?: WebSocketStreamOptions) {
        this.wsUrl = options && options.wsUrl ? options.wsUrl : "wss://stream.binance.com:9443";
        this.timeToReconnectMS = options && options.timeToRecconectMS ? options.timeToRecconectMS : 3000;
        this.isSubscribed = false
        this.reconnectTimeout = undefined;
    }

    // для 1 или массива разный URL
    private prepareUrl(stream: string | string[]){
        return `${this.wsUrl}/stream?streams=${stream}`
    }

    // проверка запущенного клиента WebSocket
    private isConnected(){
        // если нет клиента или состояние не OPEN вернет false или true
        console.log('wsConnected',this.wsConnected)
        console.log(!(!this.wsConnected || this.wsConnected.readyState !== WebSocket.OPEN))
        return !(!this.wsConnected || this.wsConnected.readyState !== WebSocket.OPEN);
    }

    // запуск клиента WebSocket
    initConnection(url: string){
        console.log('InitConnection')
        const ws = new WebSocket(url);
        this.wsConnected = ws;

        ws.onopen = ()=> {
            console.log('Соединение установлено');
        };

        ws.onmessage = (event)=> {
            const eventData: SymbolTickerStreamData = JSON.parse(event.data);
            this.aC = eventData;
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

    // Отправка данных на сервер соединения
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
            this.isSubscribed = true;
        }
    }

    // Отписка от соединения заданных параметров
    unsubscribe(stream: string | string[]){
        console.log('unsubscribe()');
        if(!this.isConnected()){
            console.log('No Connection');
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
            this.isSubscribed = false
        }
    }
}