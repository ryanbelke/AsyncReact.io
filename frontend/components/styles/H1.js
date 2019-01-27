import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Nunito:sans-bold";
  margin: 0.2em 0.2em 0 0.2em;
  color: ${props => props.theme.grey};
  font-weight: bolder;
  letter-spacing: 4px;
  font-size: 3.5em;

  @media (max-width: 1200px) {
    font-size: 2.25em;
  }
`;
export default H1;
