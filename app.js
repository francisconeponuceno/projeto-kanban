import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criardb(nome, sobrenome) {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });
    db.run(`CREATE TABLE IF NOT EXISTS carrego (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT)`)
}

criardb()



function salvardb(){
    alert('dados salvos')
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database(':banco.db:');
    db.serialize(
        db.run("CREATE TABLE carrego (nome TEXT)"),
        db.prepare("INSERT INTO carrego VALUES (francisco)"),
        db.close()
    );
    
}





