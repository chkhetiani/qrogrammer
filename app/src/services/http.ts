export const post = async (url: string, data: {}) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};

export const get = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
};
