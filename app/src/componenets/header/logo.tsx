import "./logo.css";

export const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img
                className="logo__img"
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt="logo"
            />
            <h1 className="logo__heading">qrogrammer</h1>
            <span className="logo__desc">qrogramming and human factors</span>
        </div>
    );
};
