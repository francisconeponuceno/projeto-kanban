import sqlite3 from "sqlite3";



    

    let sqlite3 = require('sqlite3').verbose();
    alert('dados salvo')
    let db = new sqlite3.Database('bancokanban.db');
    let check;
    db.serialize(function(){
        db.prepare("INSERT INTO carregamento (CLT,MOT,DEST,CONF,PLACA,CUB) VALUES ('T', 'JOÃO DE DEUS DA LUZ', 'MARANHÃO / PARÁ / TOCANTINS',  'FRANCISCO', 'KBI-6155', '80')")
        
    });
        
    db.close();

    