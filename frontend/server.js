const express = require("express");
const next = require("next");
const axios = require("axios");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const Twitter = require("twitter");

const path = require("path");
const fs = require("fs");

var https = require("https");
var querystring = require("querystring");

var certOptions = {
  key: fs.readFileSync(path.resolve("build/cert/server.key")),
  cert: fs.readFileSync(path.resolve("build/cert/server.crt"))
};

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

var bearer_token;

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${base64data}`
  }
};
axios.defaults.headers.common["Authorization"] = `Basic ${base64data}`;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
//make request to get bearer_token and assign it
axios
  .post(
    "https://api.twitter.com/oauth2/token",
    querystring.stringify({
      grant_type: "client_credentials"
    })
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

var params = { screen_name: "reactjs" };
//pull based on query
// var params = { q: "#reactjs" }
//setup server
app.prepare().then(() => {
  const server = express();

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
        res.send(tweets);
        console.log(tweets);
      } else {
        console.log(error);
      }
    });
  });

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  https.createServer(certOptions, server).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
