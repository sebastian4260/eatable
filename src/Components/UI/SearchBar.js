/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledInput = styled.input`
  border: none;
  outline: none;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: #000000;
  padding: 53px 41px;
`;

function SearchBar ({placeholder}){
  return(
    <StyledDiv>
      <div>
        <i class="ri-search-line" />
        <StyledInput placeholder={placeholder} />
      </div>
      <i class="ri-shopping-cart-line" />
    </StyledDiv>
  );
}

export default SearchBar;