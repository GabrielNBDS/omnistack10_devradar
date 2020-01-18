const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require("http");
const cors = require("cors");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

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

server.listen(3333);
