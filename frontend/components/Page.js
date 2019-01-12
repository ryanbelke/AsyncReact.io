import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  titleFont: 'Black Han Sans", sans-serif',
  blue1: "#3DA0FF",
  blue2: "#077BFF",
  blue3: "#0067FF",
  grey1: "#ffffff",
  grey2: "#fafafa",
  grey3: "#f5f5f5",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1200px"
};

const StyledPage = styled.div`
  background: white;
  color: #393939;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 1rem;
`;

class Page extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </>
    );
  }
}

export default Page;
