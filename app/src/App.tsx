import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./componenets/layout/header";
import { Page } from "./componenets/layout/page";
import { Sidebar } from "./componenets/layout/sidebar";

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Page />
            </BrowserRouter>
        </div>
    );
};
