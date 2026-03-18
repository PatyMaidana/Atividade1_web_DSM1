//importando o express
const express = require("express");
//importando o dotenv
const dotenv = require("dotenv");
//importanto o path
const path = require("path");
//definir o caminho da pasta public
const publicPath = path.join(__dirname, "public");
const pagesPath = path.join(publicPath, "pages");
const app = express();
app.use("/assets", express.static(path.join(publicPath, "assets")));

//carregar o arquivo .env no servidor
dotenv.config({ quiet: true });
//process.env é ambiente do sistema
const PORT = process.env.PORT;

//subir o servidor
app.listen(PORT, function () {
  console.log(`Rodando em http://localhost:${PORT}`);
});

app.get("/", function (_req, res) {
  res.sendFile(path.join(pagesPath, "index.html"));
});

app.get("/login", function (_req, res) {
  res.sendFile(path.join(pagesPath, "login.html"));
});

app.get("/cadastro", function (_req, res) {
  res.sendFile(path.join(pagesPath, "cadastro.html"));
});

app.use(function (_req, res) {
  res.sendFile(path.join(pagesPath, "404.html"));
});
