const express = require("express");
const app = express();
const port = 443;

app.get("/contato", function (reg, res) {
  res.send("Contato");
});

app.get("/sobre", function (reg, res) {
  res.send("Sobre");
});
app.get("/", function (reg, res) {
  res.sendFile(__dirname + "/pagina.html");
});

app.listen(port, () => {
  console.log("Servidor rodando");
});
