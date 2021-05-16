import { usePost } from "../../hooks/http";

export const About: React.FC = () => {
    const login = { username: "qrogrammer", password: "pass123" };

    const { loading, data } = usePost<any>("/auth/auth", login);

    if (!loading) {
        return <div>{JSON.stringify(data, null, 2)}</div>;
    }

    return <div>about</div>;
};
