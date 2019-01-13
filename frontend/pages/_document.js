import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Black Han Sans';
    src: url("/static/blackhansans-regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito:600';
    src: url("/static/nunito-regular-webfront.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito:bold';
    src: url("/static/nunito-bold-webfront.woff2") format("woff2");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito:regular';
    src: url('/static/nunito-regular-webfront.woff2') format("woff2");
  }
  @font-face {
    font-family: 'Nunito:sans';
    src: url('/static/nunitosans-regular-webfont.woff2') format("woff2");
  }
  @font-face {
    font-family: 'Nunito:sans-black';
    src: url('/static/nunitosans-black-webfont.woff2') format("woff2");
  }
  @font-face {
    font-family: 'Nunito:sans-bold';
    src: url('/static/nunitosans-bold-webfont.woff2') format("woff2");
  }
  @font-face {
    font-family: 'Nunito:sans-extra-bold';
    src: url('/static/nunitosans-extrabold-webfont.woff2') format("woff2");
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  hr {
    border-top: 1px solid #EDEDEDED;
    width: 100%;

    display: block;
  }
  .ant-input { font-family: 'Nunito:sans'; }
  .border-box { 
    box-shadow: 1px 5px 10px rgba(245,245,245 ,1); 
    padding: 20px 20px 70px 10px;
    margin-top: 100px
   }
   @media (max-width: 1000px) {
     .border-box { margin-top: 30px; }
     .ant-btn { margin-top: 20px;}
   }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'sans-serif';
    background: #ffffff;
    padding-bottom: 40px;
  }
  small { font-family: 'Nunito:sans'; color: rgba(0,0,0,0.25); padding-left: 30px; }
  a {
    text-decoration: none;
  }
  button {  font-family: 'Nunito:sans'; }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <Global />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Footer />
      </html>
    );
  }
}
