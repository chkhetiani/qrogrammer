// header = (#+) (.*)/g = ## header
// bold = (\*\*)(.*?)\1/g = **bold**
// italic = (\*)(.*?)\1/g = *italic*
// bolditalic = (\*\*\*)(.*?)\1/g = ***bolditalic***
// link = \[(.*?)\]\((.*?)\)/g = "[link](https://google.com)"
// backquote = ^> (.*)/gm = > backquote
// p = /(^\s*$)(.*?)(^\s*$)/gms => <p>$2</p>

interface Rule {
    regex: RegExp;
    replace: string;
    name?: string;
}

const rules: Rule[] = [
    { regex: /(\*\*)(.*?)\1/g, replace: "<b>$2</b>" },
    { regex: /(\*)(.*?)\1/g, replace: "<i>$2</i>" },
    { regex: /(\*\*\*)(.*?)\1/g, replace: "<b><i>$2</i></b>" },
    { regex: /\[(.*?)\]\((.*?)\)/g, replace: "<a href='$1'>$2</a>" },
    { regex: /^> (.*)/gm, replace: "<blockquote>$1</blockquote>" },
    { regex: /(```)(.*?)\1/g, replace: "<pre>$2</pre>" },
    { regex: /(#+) (.*)/g, replace: "<h$1>$2</h$1>", name: "h" },
    { regex: /(^\s*$)/gms, replace: "<br/>" },
];

export const parse = (str: string): string => {
    rules.forEach((rule) => {
        if (rule.name && rule.name === "h") {
            const m = str.match(rule.regex);
            m?.forEach((h) => {
                let index = 0;
                while (h[index++] === "#") {}
                const x = `<h${index - 1}>${h.slice(index)}</h${index - 1}`;
                str = str.replace(h, x);
            });
        } else {
            str = str.replace(rule.regex, rule.replace);
        }
    });

    return str;
};
