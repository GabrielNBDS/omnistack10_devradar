const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose
  .connect("mongodb://localhost/omnistack", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Conectado ao banco de dados "))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
