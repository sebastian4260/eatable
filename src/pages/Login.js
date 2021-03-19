/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from "../Components/UI/Footer";
import StyledButton from "../Components/UI/StyledButton";
import StyledLink from "../Components/UI/StyledLink";
import LoginForm from "../features/session/LoginForm";

import logo from "../logo.svg";

export default function Login() {
  const token = useSelector((state) => state.session.token);

  if (token) {
    sessionStorage.setItem("token", token);
    return <Redirect to="/" />;
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: calc(100% - 120px);
        padding: 60px 50px 40px;
      `}
    >
      <img alt="eatable-logo" src={logo} />
      <LoginForm id="login-form" />
      <StyledLink to="/sign-up">Create an Account</StyledLink>
      <Footer>
        <StyledButton type="submit" form="login-form">
          Login
        </StyledButton>
      </Footer>
    </div>
  );
}