import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 5px;
  display: flex;
  height: 60px;
  width: 100%;
  left: 0;
  z-index: -1;
  .bar-top {
    /* border-bottom: 1px solid ${props => props.theme.offwhite}; */
    display: flex;
    grid-template-columns: auto 1fr;
    width: 100%;
    padding-right: 5%;
    box-shadow: 1px -5px 10px rgba(245,245,245 ,1);
    align-items: flex-end;
  justify-content: flex-end;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="bar-top">AsyncReact &#169; 2018</div>
  </StyledFooter>
);

export default Footer;
