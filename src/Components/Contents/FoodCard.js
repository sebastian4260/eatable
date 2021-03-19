/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
`;

const CardTittle = styled.h1`
  text-align: center;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #333333;
`;

const CardPrice = styled.p`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #FA4A0C;
`

function FoodCard ({name, price, img_url}){
  return(
    <StyledCard>
      <CardTittle>
        {name ? name:"pastaDish"}
      </CardTittle>
      <CardPrice>
        {price ? price:"99.99"}
      </CardPrice>
    </StyledCard>
  );
}

export default FoodCard;