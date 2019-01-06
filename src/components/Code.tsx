import React, { ReactNode } from "react";
import { ElementProps } from "../types/elementProps";

type CodeProps = ElementProps & {
  children: ReactNode
}

export function Code({ children, ...props }: CodeProps) {
  return (
    <code {...props}>
      <pre>{children}</pre>
    </code>
  );
}
