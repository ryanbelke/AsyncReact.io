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
  margin-top: 7px;
  a {
    font-family: "Black Han Sans", sans-serif;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.blue3};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Nav = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10%;
  li {
    font-size: 1.5em;
    font-family: "Nunito:sans";
    margin-left: 2%;
  }
  small {
    font-family: "Nunito:sans";
    color: ${props => props.theme.blue3};
    margin-bottom: 9px;
  }
  .ant-menu-item a :after {
    border-right: 1px solid #e8e8e8;
  }
`;
const StyledHeader = styled.header`
  .bar {
    /* border-bottom: 1px solid ${props => props.theme.offwhite}; */
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    box-shadow: 1px 5px 10px rgba(245,245,245 ,1);
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo className="logo">
        <Link href="/">
          <a>AsyncReact</a>
        </Link>
      </Logo>
      <Nav>
        <small>coming soon</small>
        <Menu style={{ borderBottom: "none" }} mode="horizontal">
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
    </div>
  </StyledHeader>
);

export default Header;
