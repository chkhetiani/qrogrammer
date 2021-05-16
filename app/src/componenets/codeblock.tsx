import { ReactBaseProps } from "react-markdown/src/ast-to-react";
import { Prism } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/styles/prism";

export const CodeBlock: React.FC<ReactBaseProps> = ({ language, value }) => {
    return <Prism language={language as string}>{value as string}</Prism>;
};
