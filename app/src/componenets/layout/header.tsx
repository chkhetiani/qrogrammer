import { Logo } from "../header/logo";
import { Search } from "../header/search";
import "./header.css";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <Logo />
            <Search />
        </div>
    );
};
