// index page for site front page
import { Icon, Spin } from "antd";
import { Component } from "react";
import axios from "axios";
import moment from "moment";

import H1 from "../components/styles/H1";
import H2 from "../components/styles/H2";
import H3 from "../components/styles/H3";
import Tweet from "../components/Tweet";
import TweetContainer from "../components/TweetContainer";
import SignupForm from "../components/SignupForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
      loading: false,
      error: null,
      message: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        process.env.NODE_ENV == "production"
          ? "https://asyncreact.herokuapp.com/tweets"
          : "https://localhost:3000/tweets"
      )
      .then(this.setState({ loading: true }))
      .then(res => this.setState({ tweets: res.data, loading: false }))
      .catch(err => this.setState({ error: err }));
  }

  render() {
    let tweetNodes;
    const { tweets } = this.state;

    tweets !== null && tweets.length
      ? (tweetNodes = tweets.slice(0, 3).map(tweet => (
          <Tweet key={tweet.id}>
            <div className="top">
              <img
                style={{ borderRadius: "50%", marginRight: 30 }}
                src={tweet.user.profile_image_url_https}
              />
              {tweet.verified ? (
                <span className="verified">
                  <Icon type="circle-check" />
                </span>
              ) : null}
              <span className="user">{tweet.user.name}</span>
              <span className="user-screenname">@{tweet.user.screen_name}</span>
              <span className="date">
                {moment().from(tweet.created_at, true)} ago
              </span>
            </div>
            <span className="text">
              {tweet.full_text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, "")}
            </span>
            <div>
              <span className="image">
                {tweet.entities.media ? (
                  <a
                    target="_blank"
                    href={tweet.entities.media[0].media_url_https}
                  >
                    <img
                      src={tweet.entities.media[0].media_url_https}
                      width="350"
                      height="150"
                    />
                  </a>
                ) : null}
              </span>
            </div>
            <div>
              <span className="urls">
                {tweet.entities.urls.length
                  ? tweet.entities.urls.map(url => (
                      <a key={url.url} href={`${url.url}`}>
                        {url.url}
                      </a>
                    ))
                  : null}
              </span>
            </div>
            <div className="bottom">
              <hr />
              <small>
                <a
                  target="_blank"
                  href={`https://twitter.com/statuses/${tweet.id_str}`}
                >
                  view original tweet
                </a>
              </small>
            </div>
          </Tweet>
        )))
      : null;
    return (
      <>
        <div className="border-box">
          <style jsx>
            {`
              span {
                font-weight: bold;
              }
            `}
          </style>
          <H1>AsyncReact</H1>
          <div style={{ marginLeft: 20 }}>
            <H2>Tutorials, tips and tricks</H2>
            <H2>to increase the performance of your React app.</H2>

            <H3>coming soon</H3>
            <div>
              <SignupForm />
            </div>
          </div>
        </div>
        <>
          <small style={{ marginTop: 50 }}>tweets from @reactjs</small>
          <TweetContainer loading={this.state.loading}>
            {this.state.error !== null ? this.state.error : null}
            {this.state.loading ? (
              <Spin style={{ margin: "0 auto", marginTop: 40 }} />
            ) : (
              <>{tweetNodes}</>
            )}
          </TweetContainer>
        </>
      </>
    );
  }
}

export default Home;
