import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Logo } from "./componenets/header/logo";
import { Search } from "./componenets/header/search";
import { Page } from "./componenets/layout/page";
import { Sidebar } from "./componenets/layout/sidebar";

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Logo />
                <Search />
                <Sidebar />
                <Page />
            </BrowserRouter>
        </div>
    );
};
