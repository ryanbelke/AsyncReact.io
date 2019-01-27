import styled from "styled-components";
import Link from "next/link";
import { Menu, Icon } from "antd";

//create logo
export const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  letter-spacing: 1px;
  font-weight: 100;
  margin-top: 10px;
  display: inline-block;
  order: 1;
  a {
    font-family: "Black Han Sans", sans-serif;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.blue3};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1100px) {
    margin: 5px;
    text-align: center;
    display: block;
  }
`;

const Nav = styled.span`
  padding: 5px;
  display: inline-block;
  margin-right: 10%;
  order: 2;
  ul {
    justify-content: flex-end;
    align-items: flex-end;
  }
  li {
    font-size: 1.5em;
    font-family: "Nunito:sans";
    margin-left: 2%;
  }
  small {
    font-family: "Nunito:sans";
    color: ${props => props.theme.blue3};
  }
  .ant-menu-item a :after {
    border-right: 1px solid #e8e8e8;
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;
//cleared cache
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: ${props => props.theme.boxShadow};

  @media (max-width: 1100px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo className="logo">
      <Link href="/">
        <a>AsyncReact</a>
      </Link>
    </Logo>

    <Nav>
      <Menu style={{ borderBottom: "none" }} mode="horizontal">
        <Menu.Item>
          <small>coming soon</small>
        </Menu.Item>
        <Menu.Item disabled>
          <Link href="/">
            <a>
              <Icon type="snippets" /> Posts
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item disabled>
          <Link href="/">
            <a>
              <Icon type="profile" />
              Tutorials
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </Nav>
  </StyledHeader>
);

export default Header;
