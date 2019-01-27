import styled from "styled-components";

const H2 = styled.h2`
  font-family: "Nunito:sans";
  margin: 0em;
  color: ${props => props.theme.black};
  font-weight: 200;
  letter-spacing: 0px;
  font-size: 2em;

  display: block;
  @media (max-width: 1200px) {
    font-size: 1.25em;
  }
`;
export default H2;
