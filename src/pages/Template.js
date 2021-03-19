import styled from "@emotion/styled";
import Navbar from "../Components/Contents/NavBar"
import { css } from "@emotion/react";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > .page__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;


function Template({ children }) {
  return (
    <StyledPage>
      <div className="page__content">{children}</div>
      <Navbar/>
    </StyledPage>
  );
}

export default Template;