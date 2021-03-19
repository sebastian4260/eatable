/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledImg = styled.img`
  width: 180px;
  height: 71px;
`;



function Logo (){
  return(
      <StyledImg src={"https://res.cloudinary.com/dzifwhokp/image/upload/v1616196264/Logo_gyvpza.png"} />
  );
}

export default Logo;