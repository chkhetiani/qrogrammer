export const formateDate = (date: string): string => {
    const pDate = new Date(date);
    const month = pDate.toLocaleString("default", { month: "short" });
    const day = pDate.getDate();
    const year = pDate.getFullYear();
    return `${day} ${month} ${year}`;
};
