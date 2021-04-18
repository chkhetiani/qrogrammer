// header = (#+) (.*)/g = ## header
// bold = (\*\*)(.*?)\1/g = **bold**
// italic = (\*)(.*?)\1/g = *italic*
// bolditalic = (\*\*\*)(.*?)\1/g = ***bolditalic***
// link = \[(.*?)\]\((.*?)\)/g = "[link](https://google.com)"
// backquote = ^> (.*)/gm = > backquote

interface Rule {
    regex: RegExp;
    replace: string;
}

const rules: Rule[] = [{ regex: /(\*\*)(.*?)\1/g, replace: "<b>$2</b>" }];

export const parse = (str: string): string => {
    rules.forEach((rule) => {
        str = str.replace(rule.regex, rule.replace);
    });

    return str;
};
