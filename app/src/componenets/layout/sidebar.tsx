import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar: React.FC = () => {
    return (
        <div className="container sidebar">
            <h3 className="sidebar__title">sidebar</h3>
            <ul className="sidebar__urls">
                <li>
                    <Link className="url" to="/">
                        home
                    </Link>
                </li>
                <li>
                    <Link className="url" to="/about">
                        about
                    </Link>
                </li>
                <li>
                    <Link className="url" to="/absent">
                        absent
                    </Link>
                </li>
                <li>
                    <Link className="url" to="/1">
                        1
                    </Link>
                </li>
                <li>
                    <Link className="url" to="/4">
                        4
                    </Link>
                </li>
                <li>
                    <Link className="url" to="/login">
                        login
                    </Link>
                </li>
            </ul>
        </div>
    );
};
