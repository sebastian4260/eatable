import styled from "@emotion/styled";
//import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  background: #F6F6F9;
  padding: 35px 53px;
  margin: 0px;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 25px;
  &.selected {
            color: #fa4a0c;
            filter: drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.4));
          }
  }
`;

const sections = ["home", "profile", "history"];
const icons = {
  home: <i className="ri-home-2-line"></i>,
  profile: <i className="ri-user-line"></i>,
  history: <i className="ri-history-line"></i>,
};

export default function Navbar() {
  const location = useLocation();
  const isSelected = (section) => {
    return (
      (location.pathname === "/" && section === "home") ||
      location.pathname === `/${section}`
    );
  };

  return (
    <StyledUl>
      {sections.map((section) => (
        <ListItem key={section}>
          <Link
            className={isSelected(section) ? "selected" : ""}
            to={section === "home" ? "/" : `/${section}`}
          >
            {icons[section]}
          </Link>
        </ListItem>
      ))}
    </StyledUl>
  );
}