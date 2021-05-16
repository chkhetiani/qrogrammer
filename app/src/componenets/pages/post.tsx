// import ReactHTMLParser from "react-html-parser";
// import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import { Prism } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useGet } from "../../hooks/http";
import { formatDate } from "../../services/utils";
import { Absent } from "./absent";
import "./post.css";

export interface Blog {
    title: string;
    content: string;
    releaseDate: string;
}

const components = {
    code({ node, inline, className, children, ...props }: any) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
            <Prism
                style={ghcolors}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        );
    },
};

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
                    <ReactMarkdown
                        // source={data!.content}
                        components={components}
                    >
                        {data!.content}
                    </ReactMarkdown>
                    {/* <p
                        dangerouslySetInnerHTML={{
                            __html: parse(data!.content),
                        }}
                    /> */}
                    {/* <p>{JSON.stringify(data)}</p> */}
                </>
            )}
        </div>
    );
};
