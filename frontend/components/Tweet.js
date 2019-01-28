import styled from "styled-components";

const Tweet = styled.div`
  flex: 1 0 29%;
  margin: 0 10px 0 10px;
  height: 340px;
  position: relative;
  hr {
    margin: 0;
  }
  small {
    color: ${props => props.theme.offWhite};
  }
  small a {
    color: ${props => props.theme.blue2};
  }
  span {
    margin: 2.5px;
    font-family: "Nunito:sans";
  }
  .user {
    font-weight: bold;
  }
  .text {
    height: auto;
  }
  .top {
    margin-bottom: 9px;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    height: 30px;
  }
  .profile-image {
    border-radius: 50%;
    margin-right: 30px;
  }
  @media (max-width: 1200px) {
    .profile-image {
      width: 30px;
      margin-right: 5px;
    }
  }
`;
export default Tweet;
