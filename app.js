

const conectaBanco = function conectaBanco(){
  // Importar o módulo sqlite3
  const sqlite3 = require('sqlite3').verbose();

  // Criar uma conexão com o  banco de dados
  let db = new sqlite3.Database('banco.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
  });
  return db
}




// Criar uma tabela (caso não exista)
function criar_tabela(){
  db = conectaBanco()
  db.run(`CREATE TABLE IF NOT EXISTS carrego (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clt TEXT ,
    mot TEXT ,
    dest TEXT ,
    conf TEXT ,
    placa TEXT ,
    cub INTEGER
  )`);
}


// Inserir um novo usuário
let Dados = ['C', 'JOAQUIM MAIA PEREIRA', 'PIAUI / TOCANTINS / PARÁ',  'VICENTE', 'KBI-6155', '80'];
function inserir_registro(){
  db = conectaBanco()
  db.run(`INSERT INTO carrego(clt, mot, dest, conf, placa, cub) VALUES(?, ?, ?, ?, ?, ?)`, [Dados[0],Dados[1],Dados[2],Dados[3],Dados[4],Dados[5]], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Um novo registro foi inserido com o ID `);
  });
}


// Consultar todos os usuários
function consultar_registro(){
  db = conectaBanco()
  db.all(`SELECT * FROM carrego`, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((item,index) => {
        console.log(item);
        console.log(index + 1)
    });
    
  });

}

// Deletar um carrego
function excluir_registro(id){
  db = conectaBanco()
  db.all(`DELETE FROM carrego WHERE id = ${id}`, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
  });
}

function excluir_tabela(){
  db = conectaBanco()
  db.all(`DROP TABLE carrego`, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
  });
}

// Fechar a conexão
function fechar_banco(){
  db = conectaBanco()
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Conexão com o banco de dados SQLite fechada.');
  });
}




 consultar_registro()



