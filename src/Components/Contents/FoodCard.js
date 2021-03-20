/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 65px;
  width: 156px;
  padding: 10px 13px;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
`;

const CardImage = styled.img`
  position: relative;
  top: -65px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;

const CardTittle = styled.h1`
  text-align: center;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #333333;
  margin: 0px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const CardPrice = styled.p`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #FA4A0C;
  margin: 0px;
`
const TestDiv = styled.div`
  height: 65px;
`;

function FoodCard ({name, price, img_url}){
  return(
    <StyledCard>
      <TestDiv>
        <CardImage src={img_url}/>
      </TestDiv>
      <CardTittle>
        {name ? name:"pastaDish"}
      </CardTittle>
      <CardPrice>
        ${price ? (parseInt(price)/100):"99.99"}
      </CardPrice>
    </StyledCard>
  );
}

export default FoodCard;