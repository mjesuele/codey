import React from "react";
import { ElementProps } from "../types/elementProps";
import Prism from "prismjs";

type CodeProps = ElementProps & {
  children: string;
  language? :string
};

export function Code({ children, language, ...props }: CodeProps) {
  const lang = language || 'js';
  return (
    <pre {...props}>
      <code className={`language-${lang}`} dangerouslySetInnerHTML={{ __html: Prism.highlight(children, Prism.languages[lang]) }} />
    </pre> 
  );
}
