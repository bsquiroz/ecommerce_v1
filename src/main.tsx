import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { EcommerceProvider } from "./context/EcommerceContext";
import "./index.css";

const AppState = ({ children }: any) => {
    return <EcommerceProvider>{children}</EcommerceProvider>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AppState>
        <App />
    </AppState>
);
