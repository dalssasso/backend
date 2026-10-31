const express = require("express");
const app = express();
const PORT = 3000;

//codigo node rotas e afins

app.get("/", (req, res) => {
    res.send("Bem-vindo ao site da Marvel e DC!");
})

app.get("/dc", (req, res) => {
    res.send("Bem-vindo ao site da DC!");
})

app.get("/marvel", (req, res) => {
    res.send("Bem-vindo ao site da Marvel!");
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

console.log("node tá bombando")
