import styled from "styled-components";
import { Wrapper as AsideWrapper } from "./Aside";

function CodeSnippet() {
  // brevity
}

const Wrapper = styled.pre`
  /* basic styles */
  ${AsideWrapper} & {
    font-size: 0.8rem;
  }
`;

export default CodeSnippet;
