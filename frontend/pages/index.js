// index page for site front page
import { Input, Icon, Button } from "antd";
import { Component } from "react";
import axios from "axios";
import moment from "moment";

import H1 from "../components/styles/H1";
import H2 from "../components/styles/H2";
import H3 from "../components/styles/H3";
import Tweet from "../components/Tweet";
import TweetContainer from "../components/TweetContainer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null
    };
  }
  componentDidMount() {
    axios
      .get("https://localhost:3000/tweets")
      .then(res => this.setState({ tweets: res.data }))
      .catch(err => console.warn(err));
  }
  render() {
    let tweetNodes;
    const { tweets } = this.state;
    tweets !== null && tweets.length
      ? (tweetNodes = tweets.slice(0, 3).map(tweet => (
          <Tweet key={tweet.id}>
            <div>
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
            <span className="test">{tweet.text}</span>
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
              <Input
                style={{ width: 300 }}
                prefix={
                  <Icon type="user-add" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="enter your email"
              />
              <Button style={{ width: 200 }} type="primary" size="large">
                Keep me updated
              </Button>
            </div>
          </div>
        </div>
        <TweetContainer>{tweetNodes}</TweetContainer>
      </>
    );
  }
}

export default Home;
