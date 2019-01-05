import React, { ReactNode } from "react";

export function Code({ children }: { children: ReactNode }) {
  return (
    <code>
      <pre>{children}</pre>
    </code>
  );
}
