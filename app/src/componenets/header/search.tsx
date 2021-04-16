import "./search.css";

export const Search: React.FC = () => {
    return (
        <div className="container search">
            <input className="search__input" placeholder="Search" />
            <button className="search__button">do</button>
        </div>
    );
};
