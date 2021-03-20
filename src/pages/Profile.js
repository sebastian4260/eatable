/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Navbar from "../Components/Contents/NavBar";
import { fetchLogout } from "../features/session/sessionSlice";
import { fetchProfile } from "../features/users/usersSlice";
import StyledButton from "../Components/UI/StyledButton";
import Footer from "../Components/UI/Footer";
import SectionTitle from "../Components/UI/SectionTitle";
import { css } from "@emotion/react";

export default function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const profile = useSelector((state) => state.users.profile);
  const status = useSelector((state) => state.users.status);

  if (status === "idle") {
    dispatch(fetchProfile(token));
  }

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <SectionTitle>My Profile</SectionTitle>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          img {
            width: 91px;
            height: 100px;
            border-radius: 50px;
          }

          p {
            font-family: Source Sans Pro;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #000000;
            opacity: 0.5;
            margin: 0;
            padding: 0;
            &.title {
              font-family: Source Sans Pro;
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 23px;
              text-align: center;
              color: #000000;
            }
          }
        `}
      >
        <p>Personal Details</p>
        <button>change</button>
        <img alt={profile.email} src={profile.avatar_url} />
        <p className="title">{profile.name}</p>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
        <p>{profile.address}</p>
      </div>
      <Footer>
        <StyledButton onClick={() => dispatch(fetchLogout(token))}>
          Logout
        </StyledButton>
        <Navbar />
      </Footer>
    </div>
  );
}