import {createRoot} from "react-dom/client";
import {App, StoreProvider} from "./app";
import './index.css'
import {PersistProvider, WebsocketProvider} from "@app/providers";

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать React приложение',
    );
}

const root = createRoot(container);

root.render(
    <StoreProvider>
                <PersistProvider>
                    <WebsocketProvider>
                        <App/>
                    </WebsocketProvider>
                </PersistProvider>
            </StoreProvider>
)

