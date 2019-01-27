var express = require("express");
var next = require("next");
var axios = require("axios");
var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== "production";
var app = next({ dev });
var handle = app.getRequestHandler();
var Twitter = require("twitter");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var https = require("https");
var querystring = require("querystring");

//include credentials stored in .env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
//base64 encode the key/secret
var token = `${process.env.AK}:${process.env.AS}`;

var buff = new Buffer.from(token);
var base64data = buff.toString("base64");

console.log("key = " + process.env.AK);
console.log("secret = " + process.env.AS);
console.log("base64 = " + base64data);
console.log("mail = " + process.env.MC);

var bearer_token;

const config = {
  headers: {
    Authorization: `Basic ${base64data}`,
    "Content-Type": "application/x-www-form-urlencoded"
  }
};
// axios.defaults.headers.common["Authorization"] = `Basic ${base64data}`;
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
//make request to get bearer_token and assign it
axios
  .post(
    "https://api.twitter.com/oauth2/token",
    querystring.stringify({
      grant_type: "client_credentials"
    }),
    config
  )
  .then(res => (bearer_token = res.data.access_token))

  .catch(err => {
    if (err.response) {
      console.log(err.response);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(err.message);
    }
  });

var params = { screen_name: "reactjs", tweet_mode: "extended" };
//pull based on query
// var params = { q: "#reactjs" }
//setup server
app.prepare().then(() => {
  const server = express();
  //use bodyParser for request body
  server.use(bodyParser.json());
  //GET /tweets
  // returns array of tweet objects based on param
  server.get("/tweets", (req, res) => {
    //establish new twitter client
    var client = new Twitter({
      consumer_key: process.env.AK,
      consumer_secret: process.env.AS,
      //bearer_token retireved at start of server and stored as global variable
      bearer_token: bearer_token
    });

    client.get("statuses/user_timeline", params, function(
      error,
      tweets,
      response
    ) {
      if (!error) {
        console.log("found tweets");
        res.send(tweets);
      } else {
        console.log(error);
      }
    });
  });

  const mailUrl = `https://us20.api.mailchimp.com/3.0/lists/520abc11d8/members/`;

  server.post("/mail", (req, res) => {
    const config = {
      headers: {
        Authorization: `api ${process.env.MC}`
      }
    };
    console.log(req.body.email);
    const data = {
      email_address: req.body.email,
      status: "subscribed",
      merge_fields: { FNAME: "", LNAME: "" }
    };

    return axios
      .post(mailUrl, data, config)
      .then(res => res.send({ message: "Thank you for subscribing" }))
      .catch(err => res.send({ message: "Error" }));
  });

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  if (dev) {
    //set SSL localhost cert
    var certOptions = {
      key: fs.readFileSync(path.resolve("build/cert/server.key")),
      cert: fs.readFileSync(path.resolve("build/cert/server.crt"))
    };

    https.createServer(certOptions, server).listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } else {
    server.listen(port || 3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  }
});
