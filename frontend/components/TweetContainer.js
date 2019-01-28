import styled from "styled-components";

const TweetContainer = styled.div`
  display: flex;
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 35px;
  position: relative;
  background: ${props =>
    props.loading ? "rgba(0, 0, 0, 0.01)" : props.theme.grey1};
  border-radius: 1%;

  height: 380px;
  @media (max-width: 1200px) {
    height: auto;
    padding: 15px;
  }
`;
export default TweetContainer;
