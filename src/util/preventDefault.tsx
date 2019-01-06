import React from "react";
export default function preventDefault(f: Function) {
  return (e: React.SyntheticEvent) => {
    e.preventDefault();
    f();
  };
}
