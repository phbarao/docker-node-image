const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello Docker (atualizado)");
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
