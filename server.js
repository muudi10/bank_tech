const config = require("./config.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

console.log(`NODE_ENV=${config.NODE_ENV}`);
const branchRouter = require("./routes/branch.js");
// function setHeaders(res) {
//   res.append("Access-Control-Allow-Origin", "*");
//   res.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.append("Access-Control-Allow-Headers", "Content-Type");
// }

// app.use({ setHeaders: setHeaders });

  app.use('/', branchRouter.healthCheck);

app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});
