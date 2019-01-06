import styled, { css } from "styled-components";
import { PX } from "../types/PX";

const style = css`
  all: unset;

  cursor: pointer;
  color: white;
  background-color: dodgerblue;
  margin: 1em 0;
  padding: 0.5em 1em;

  * + & {
    margin-left: 1em;
  }
`;

export default styled.button<PX>`
  ${style}
`;
