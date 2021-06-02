var mysql = require('mysql2');

function inserir(esporte) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "x@x",
    database: "jogos_olimpicos"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = 'INSERT INTO esportes (modalidade, tipo, distancia, sexo, local) VALUES (?,?,?,?,?);';
    const values = [esporte.modalidade, esporte.tipo, esporte.distancia, esporte.sexo, esporte.local];
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}

esporte = [{modalidade:"teste1", tipo: "teste2", distancia: "teste3", sexo: "teste4", local: "teste5"},
{modalidade:"teste1", tipo: "teste2", distancia: "teste3", sexo: "teste4", local: "teste5"},
{modalidade:"teste1", tipo: "teste2", distancia: "teste3", sexo: "teste4", local: "teste5"},
{modalidade:"teste1", tipo: "teste2", distancia: "teste3", sexo: "teste4", local: "teste5"},
{modalidade:"teste1", tipo: "teste2", distancia: "teste3", sexo: "teste4", local: "teste5"}];

for (var i = 0; i < esporte.length; i++){
  inserir(esporte[i]);
}
