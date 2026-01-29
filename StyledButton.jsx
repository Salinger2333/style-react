import styled from "styled-components";

export const StyledButton = styled.a`
  padding: 0.75em 1em;
  background-color: ${({ primary }) => (primary ? "#07c" : "#333")};
  color: white;
  display: inline-flex;
  text-decoration: none;
  border-radius: 0.25em;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#09c" : "#111")};
  }
`;

export const BtnGroup = styled.button`
  display: flex;
  gap: 1rem;
  gap: 1rem;
`;
