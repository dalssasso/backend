const express = require("express");
const app = express();
const PORT = 3000;

//codigo node rotas e afins

app.get("/", (req, res) => {
    res.send("Hello World! 1");
})

app.get("/rota2", (req, res) => {
    res.send("Hello World! 2");
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

console.log("node tá bombando")
