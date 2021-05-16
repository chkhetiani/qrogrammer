import { Field, Form, Formik } from "formik";
import React from "react";
import { Redirect, useHistory } from "react-router-dom";

interface BlogPostInitalValues {
    title: string;
    content: string;
}

export const AddPost: React.FC = () => {
    const initialValues: BlogPostInitalValues = {
        title: "",
        content: "",
    };

    const history = useHistory();

    if (localStorage.getItem("token") == null) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    fetch("/blogs/add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Auth: localStorage.getItem("token") ?? "",
                        },
                        body: JSON.stringify(values),
                    }).then((x) => {
                        history.push("/postlist");
                    });
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" placeholder="title" />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <Field
                            id="content"
                            name="content"
                            as="textarea"
                            placeholder="content"
                        />
                    </div>
                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </div>
    );
};
