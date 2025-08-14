import express from 'express'

const app = express();
const PORT = 3000;

let usuarios = [];
let contador = 1;

app.use(express.json());

//ROTA DE TESTE
app.get("/status", (req, res) => {
  res.json({message: "API Online"});
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.post("/usuarios", (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});