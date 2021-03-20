/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Logo from "../Components/UI/Logo";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(https://res.cloudinary.com/dzifwhokp/image/upload/v1616195304/iPhone_11_Pro_Max_-_24_ghcrao.png);
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  width: 262px;
  height: 262px;
  border-radius: 50%;
`;

function Loading (){
  return(
    <StyledDiv>
      <StyledLogo>
        <Logo />
      </StyledLogo>
    </StyledDiv>
  );
}

export default Loading;