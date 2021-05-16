import { useEffect, useState } from "react";

interface getResult<T> {
    loading: boolean;
    data: T | null;
}

export const useGet: <T>(url: string) => getResult<T> = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Auth: localStorage.getItem("token") ?? "",
            },
        })
            .then((response) => response.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            });
    }, [url]);

    return { loading, data };
};

export const usePost: <T>(url: string, rdata: any) => getResult<T> = (
    url: string,
    rdata: any
) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Auth: localStorage.getItem("token") ?? "",
            },
            body: JSON.stringify(rdata),
        })
            .then((response) => response.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            });
    }, [rdata, url]);

    return { loading, data };
};
