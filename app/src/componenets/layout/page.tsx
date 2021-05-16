import { Route, Switch } from "react-router";
import { About } from "../pages/about";
import { AddPost } from "../pages/admin/add-post";
import { Login } from "../pages/admin/login";
import { PostList } from "../pages/admin/postlist";
import { Home } from "../pages/home";
import { Post } from "../pages/post";
import "./page.css";

export const Page: React.FC = () => {
    return (
        <div className="container page">
            <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/login" exact component={Login} />
                <Route path="/postlist" exact component={PostList} />
                <Route path="/add-post" exact component={AddPost} />
                <Route path="/" exact component={Home} />
                <Route path="/" component={Post} />
            </Switch>
        </div>
    );
};
