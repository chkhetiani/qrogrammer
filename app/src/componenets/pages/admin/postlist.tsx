import { Link } from "react-router-dom";
import { useGet } from "../../../hooks/http";
import { formatDate } from "../../../services/utils";

interface BlogPost {
    id: number;
    title: string;
    content: string;
    releaseDate: string;
}

export const PostList: React.FC = () => {
    const { loading, data } = useGet<BlogPost[]>("/Blogs");

    if (!loading) {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data!.map((post) => {
                            return (
                                <tr key={post.id + "2"}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{formatDate(post.releaseDate)}</td>
                                    <td>
                                        <Link to="/edit">asdad</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Link to="add-post">add new post</Link>
            </div>
        );
    }

    return <div>list</div>;
};
