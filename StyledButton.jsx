import styled from "styled-components";

export const StyledButton = styled.a`
  padding: 0.75em 1em;
  background-color: ${(props) => props.theme.btnBg};
  color: white;
  display: inline-flex;
  text-decoration: none;
  border-radius: 0.25em;
  transition:
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.btnHoverBg};
    color: ${({ theme }) => theme.btnHoverColor};
  }
`;
StyledButton.defaultProps = {
  theme: {
    btnBg: "palevioletred", // Button background
    btnColor: "#eee", // Button text color
    btnHoverBg: "yellow", // Button hover background
    btnHoverColor: "white",
  },
};
export const BtnGroup = styled.button`
  display: flex;
  gap: 1rem;
`;

export const GreenStyledButton = styled(StyledButton)`
  color: green;
  border-color: green;
`;
