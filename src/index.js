const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://root:SUr4TWYLUaa0JJDC@insta-c2ap1.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(require("./routes"));

app.listen(3333);
