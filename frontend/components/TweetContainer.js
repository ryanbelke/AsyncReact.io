import styled from "styled-components";

const TweetContainer = styled.div`
  display: flex;
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 15px;

  background: ${props => (props.loading ? "rgba(0, 0, 0, 0.01)" : "#ffffff")};
  border-radius: 4px;

  height: 360px;
  @media (max-width: 1200px) {
    height: auto;
  }
`;
export default TweetContainer;
