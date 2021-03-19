import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Icon from "../UI/icons"
import { Link, useLocation } from "react-router-dom";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 30px 50px 0;
  justify-content: space-around;
  align-items: center;
`;

const ListItem = styled.li`
  text-decoration: none;
  &.selected {
            color: #fa4a0c;
            filter: drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.4));
          }
`;

const Sections = ["home", "profile", "history"];
const icons = {
  home: <i className="ri-home-2-line"></i>,
  profile: <i className="ri-user-line"></i>,
  history: <i className="ri-history-line"></i>,
};

export default function Navbar() {
  const location = useLocation();
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