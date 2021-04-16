import { useLocation } from "react-router-dom";
import { useGet } from "../../hooks/http";
import { formatDate } from "../../services/utils";
import { Absent } from "./absent";
import "./post.css";

interface Blog {
    title: string;
    content: string;
    releaseDate: string;
}

export const Post: React.FC = () => {
    const id = useLocation().pathname;

    const { loading, data } = useGet<Blog>(`/Blogs${id}`);

    if (!loading && !data) {
        return <Absent />;
    }

    return (
        <div className="post">
            {loading ? (
                "..."
            ) : (
                <>
                    <span>{formatDate(data!.releaseDate)}</span>
                    <h1 className="post__title">{data!.title}</h1>
                    <p>{data!.content}</p>
                    {/* <p>{JSON.stringify(data)}</p> */}
                </>
            )}
        </div>
    );
};
