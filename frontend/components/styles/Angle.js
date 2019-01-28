import styled from "styled-components";

const Angle = styled.div`
  color: #fff;
  height: 800px;
  transform: skewY(-12deg);
  width: 100%;
  overflow: hidden;
  transform-origin: 0;
  background: ${props => props.theme.greyGradient};
  z-index: 0;
  top: ${props => props.top};
  left: 0;
  position: absolute;

  span {
    position: absolute;
    z-index: 0;
    height: 190px;
  }

  span:nth-child(1) {
    width: 33.33333%;
    left: -16.66666%;
    background: ${props => props.theme.angleLight};
  }
  span:nth-child(2) {
    width: 33.33333%;
    top: 0;
    left: 16.66666%;
    right: auto;
    background: #ffffff;
  }
  span:nth-child(3) {
    width: 33.33333%;
    left: 49.99999%;
    bottom: auto;
    background: ${props => props.theme.angleLight};
  }
  span:nth-child(4) {
    width: 33.33333%;
    top: 380px;
    right: -16.66666%;
    background: #f5f5f5;
  }
  span:nth-child(5) {
    width: 33.33333%;
    bottom: 0;
    background: ${props => props.theme.angleLight};
  }
`;
export default Angle;
