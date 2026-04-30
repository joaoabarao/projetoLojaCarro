const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "loja_carro",
});

db.connect((err) => {
  if (err) {
    console.log("Erro ao conectar:", err);
  } else {
    console.log("Conectando ao Mysql");
  }
});

app.post("/carros,", (req, res) => {
  const carro = req.body;
});

const sql = `
INSERT INTO carros (
    titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio
) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

const valores = [
  carro.titulo,
  carro.preco,
  carro.descricao,
  carro.marca,
  carro.modelo,
  carro.kilometragem,
  carro.data_compra,
  carro.cambio,
];

db.query(sql, valores, (err, result) => {
  if (err) {
    return res.status(500).json(err);
  }
  res.json({ mensagem: "Carro salvo com sucesso!" });
});

app.get("/carros", (req, res) => {
  db.query("SELECT * FROM carros", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});