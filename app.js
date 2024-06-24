
// Importar o módulo sqlite3
const sqlite3 = require('sqlite3').verbose();

// Criar um banco de dados na memória ou abrir um arquivo de banco de dados
let db = new sqlite3.Database('banco.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Criar uma tabela (caso não exista)
db.run(`CREATE TABLE IF NOT EXISTS carrego (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clt TEXT ,
    mot TEXT ,
    dest TEXT ,
    conf TEXT ,
    placa TEXT ,
    cub INTEGER
)`);

// Inserir um novo usuário
/*
let Dados = ['T', 'JOÃO DE DEUS DA LUZ', 'MARANHÃO / PARÁ / TOCANTINS',  'FRANCISCO', 'KBI-6155', '80'];
db.run(`INSERT INTO carrego(clt, mot, dest, conf, placa, cub) VALUES(?, ?, ?, ?, ?, ?)`, [Dados[0],Dados[1],Dados[2],Dados[3],Dados[4],Dados[5]], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Um novo registro foi inserido com o ID `);
});
*/

/*
// Deletar um carrego
db.all(`DELETE FROM carrego WHERE id = 2`, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
});
*/

// Consultar todos os usuários
db.all(`SELECT * FROM carrego`, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row.mot);
    });
    
});



// Fechar a conexão
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Conexão com o banco de dados SQLite fechada.');
});







