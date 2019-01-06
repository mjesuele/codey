import React from "react";
export type Props<T extends HTMLElement> = React.HTMLAttributes<T>;
export type ElementProps = Props<HTMLElement>;
export type DivProps = Props<HTMLDivElement>;
