import styled, { css } from "styled-components";
import { PX } from "../types/PX";

const style = css`
  all: unset;

  cursor: pointer;
  color: white;
  background-color: dodgerblue;
  margin: 0.25em;
  padding: 0.5em 1em;

  :hover {
    background-color: lightskyblue;
  }
`;

export default styled.button<PX>`
  ${style}
`;
