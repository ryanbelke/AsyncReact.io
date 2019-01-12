require("dotenv").config({ path: "./.env" });

module.exports = {
  "process.env.api": process.env.API,
  "process.env.SOME_OTHER_VAR": process.env.SOME_OTHER_VAR
};
