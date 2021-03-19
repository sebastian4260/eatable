import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function FormField({ isFile, children }) {
  return <StyledDiv isFile={isFile}>{children}</StyledDiv>;
}

const withIcon = css`
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  width: 314px;
  border-bottom: ${(props) => (props.isFile ? "none" : "1px solid #333333")};
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #b8b8bb;
    ${(props) => (props.isFile ? withIcon : null)};
  }
  input {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
    border: none;
    background-color: transparent;
    &[type="file"] {
      display: ${(props) => (props.isFile ? "none" : "initial")};
    }
    &:focus {
      outline: none;
    }
  }
  p {
    color: #b8b8bb;
    text-align: center;
  }
`;