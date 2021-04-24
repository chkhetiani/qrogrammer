// import ReactHTMLParser from "react-html-parser";
import { useLocation } from "react-router-dom";
import { useGet } from "../../hooks/http";
import { parse } from "../../services/parser";
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
                    {/* <p>{ReactHTMLParser(parse(data!.content))}</p> */}
                    <p
                        dangerouslySetInnerHTML={{
                            __html: parse(data!.content),
                        }}
                    />
                    {/* <p>{JSON.stringify(data)}</p> */}
                </>
            )}
        </div>
    );
};
