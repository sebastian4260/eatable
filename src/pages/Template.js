/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Navbar from "../Components/Contents/NavBar"
import { css } from "@emotion/react";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
    overflow: auto;
    &::-webkit-scrollbar{
      display: none;
    }
`;

function Template({ children }) {
  return (
    <StyledPage>
      <Content>{children}</Content>
      <Navbar/>
    </StyledPage>
  );
}

export default Template;