import styled from "styled-components"

function Aside({children}){
  return (<Wrapper>{children}</Wrapper>)
}

export const Wrapper = styled.aside`
  /* add styles */
`
export default Aside
