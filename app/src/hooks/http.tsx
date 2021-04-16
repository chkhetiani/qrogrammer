import { useEffect, useState } from "react";

interface getResult<T> {
    loading: boolean;
    data: T | null;
}

export const useGet: <T>(url: string) => getResult<T> = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // const response = await fetch(url);
        // return await response.json();

        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            });
    }, [url]);

    return { loading, data };
};
