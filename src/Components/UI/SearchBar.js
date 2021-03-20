/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
//import { css } from "@emotion/react";

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: #000000;
  padding: 53px 0px;
  & > .input_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    & > i{
      font-size: 18px;
    }
  }
`;

function SearchBar ({placeholder}){
  return(
    <StyledDiv>
      <div className="input_container">
        <i className="ri-search-line" />
        <StyledInput placeholder={placeholder} />
      </div>
      <i className="ri-shopping-cart-line" />
    </StyledDiv>
  );
}

export default SearchBar;