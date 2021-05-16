import { Field, Form, Formik } from "formik";
import { Redirect, useHistory } from "react-router-dom";

interface LoginFormInitalValues {
    username: string;
    password: string;
}

export const Login: React.FC = () => {
    const initialValues: LoginFormInitalValues = {
        username: "",
        password: "",
    };
    const history = useHistory();

    if (localStorage.getItem("token") != null) {
        return <Redirect to="/postlist" />;
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    fetch("/auth/auth", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                    })
                        .then((x) => x.json())
                        .then((x) => {
                            localStorage.setItem("token", x.token);
                            history.push("/postlist");
                        });
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="username">Login</label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </div>
    );

    // const { loading, data } = usePost<any>("/auth/auth", login);

    // if (!loading) {
    //     return <div>{JSON.stringify(data, null, 2)}</div>;
    // }
};
