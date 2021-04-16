import { useHistory } from "react-router-dom";
import "./logo.css";

export const Logo: React.FC = () => {
    const history = useHistory();

    return (
        <div
            className="logo"
            onClick={() => {
                history.push("/");
            }}
        >
            <img
                className="logo__img"
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt="logo"
            />
            <h1 className="logo__heading">qrogrammer</h1>
            <span className="logo__desc">programming and frustrations</span>
        </div>
    );
};
