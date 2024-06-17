

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


    function criarBanco() {
    const db = open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });

    db.run("CREATE TABLE IF NOT EXISTS carrego (id INTEGER PRIMARY KEY,clt TEXT,mot TEXT, dest TEXT,placa TEXT,cub INTEGER) VALUES ('T', 'JOÃO DE DEUS DA LUZ', 'MARANHÃO / PARÁ / TOCANTINS',  'FRANCISCO', 'KBI-6155', '80')");
}

criarBanco();