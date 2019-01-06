import styled from "styled-components";
export default styled.button`
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
