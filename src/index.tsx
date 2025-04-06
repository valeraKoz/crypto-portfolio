import {createRoot} from "react-dom/client";
import {App, StoreProvider} from "./app";
import './index.css'

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать React приложение',
    );
}

const root = createRoot(container);

root.render(
    <StoreProvider>
        <App/>
    </StoreProvider>
)

