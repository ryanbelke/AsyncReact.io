import styled from "styled-components";

const TweetContainer = styled.div`
  display: flex;
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 30px;
  padding: 15px;
`;
export default TweetContainer;
