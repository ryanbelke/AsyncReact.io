// MarkdownRenderer.js
import { PureComponent } from "react";
import marked from "marked";
import renderHTML from "react-render-html";
import hljs from "highlight.js";
import axios from "axios";
//import "highlight.js/styles/tomorrow-night-eighties.css";

marked.setOptions({
  highlight: (code, language) =>
    language
      ? hljs.highlight(language, code).value
      : hljs.highlightAuto(code).value
});

class MarkdownRenderer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: null
    };
  }
  componentDidMount() {
    axios.get("http://localhost:1337/posts").then(res => {
      console.log(res);
      return this.setState({ code: res.data[0].text });
    });
  }
  render() {
    let markdown;
    this.state.code !== null
      ? (markdown = renderHTML(marked(this.state.code)))
      : null;

    return (
      <div>
        <style jsx global>
          {`
            h1 {
              font-family: "Black Han Sans", sans-serif;
            }
            code {
              color: darkgray;
            }
            pre {
              padding: 15px;
              background: gray;
            }

            .hljs .hljs-keyword {
              display: block;
              overflow-x: auto;
              padding: 0.5em;
              background: #23241f;
            }

            .hljs,
            .hljs-tag,
            .hljs-subst {
              color: #f8f8f2;
            }

            .hljs-strong,
            .hljs-emphasis {
              color: #a8a8a2;
            }

            .hljs-bullet,
            .hljs-quote,
            .hljs-number,
            .hljs-regexp,
            .hljs-literal,
            .hljs-link {
              color: #ae81ff;
            }

            .hljs-code,
            .hljs-title,
            .hljs-section,
            .hljs-selector-class {
              color: #a6e22e;
            }

            .hljs-strong {
              font-weight: bold;
            }

            .hljs-emphasis {
              font-style: italic;
            }

            .hljs-keyword,
            .hljs-selector-tag,
            .hljs-name,
            .hljs-attr {
              color: #f92672;
            }

            .hljs-symbol,
            .hljs-attribute {
              color: #66d9ef;
            }

            .hljs-params,
            .hljs-class .hljs-title {
              color: #f8f8f2;
            }

            .hljs-string,
            .hljs-type,
            .hljs-built_in,
            .hljs-builtin-name,
            .hljs-selector-id,
            .hljs-selector-attr,
            .hljs-selector-pseudo,
            .hljs-addition,
            .hljs-variable,
            .hljs-template-variable {
              color: #e6db74;
            }

            .hljs-comment,
            .hljs-deletion,
            .hljs-meta {
              color: #75715e;
            }
          `}
        </style>
        {markdown}
        <h1>should be font</h1>
      </div>
    );
  }
}

export default MarkdownRenderer;
