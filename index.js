var mysql = require('mysql2');

function readJson() {
  const fs = require('fs');
  var text = fs.readFileSync('./settings.json', 'utf8');
  var data = JSON.parse(text);

  return [data.user, data.password];
}

function inserir(esporte, user, password) {
  var con = mysql.createConnection({
    host: "localhost",
    user: user,
    password: password,
    database: "jogos_olimpicos"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = 'INSERT INTO esportes (modalidade, tipo, distancia, sexo, local) VALUES (?,?,?,?,?);';
    const values = [esporte.modalidade, esporte.tipo, esporte.distancia, esporte.sexo, esporte.local];
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log(esporte.modalidade, esporte.local + ": record inserted");
    });
  });
}

esportes = [
{modalidade:"Natação", tipo: "teste1", distancia: "teste1", sexo: "teste1", local: "SP"},
{modalidade:"Karate", tipo: "Luta", distancia: "teste2", sexo: "teste2", local: "RJ"},
{modalidade:"teste3", tipo: "teste3", distancia: "teste3", sexo: "teste3", local: "teste3"},
{modalidade:"teste4", tipo: "teste4", distancia: "teste4", sexo: "teste4", local: "teste4"},
{modalidade:"teste5", tipo: "teste5", distancia: "teste5", sexo: "teste5", local: "teste5"}];

var settings = readJson() // le as credenciais

for (var i = 0; i < esporte.length; i++){ //insere todos os dados do vetor de esportes
  inserir(esportes[i], settings[0], settings[1]);
}
