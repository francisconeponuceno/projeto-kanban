/* VARIÁVEIS DO MENU*/
let SEQ = document.getElementById("SEQ");
let CLT = document.getElementById("CLT");
let MOT = document.getElementById("MOT");
let DEST = document.getElementById("DEST");
let CONF = document.getElementById("CONF");
let PLACA = document.getElementById("PLACA");
let CUB = document.getElementById("CUB");
let Menu = [SEQ,CLT,MOT,DEST,CONF,PLACA,CUB]

Menu[0].innerHTML = "1"
Menu[1].innerHTML = "T"
Menu[2].innerHTML = "JOAQUIM MAIA PEREIRA"
Menu[3].innerHTML = "MARANHÃO / PARÁ / TOCANTINS"
Menu[4].innerHTML = "FRANCISCO"
Menu[5].innerHTML = "KBI-6155"
Menu[6].innerHTML = "80"


/*VARIÁVEL DA CLASSE FASE*/
let mae = document.querySelector('.mae');

/* VARIÁVEIS DOS ÍCONES*/
let CARRO = "bi bi-truck"
let CONE = "bi bi-cone-striped"
let CHEKOK = "bi bi-check2-circle"
let canc = "bi bi-x-circle-fill"
let circulo = "bi bi-arrow-repeat"

/*VARIÁVEIS DAS FASES*/

/*PASSO 1*/
let IconP1 = document.querySelector('#IconP1');
let MsgP1 = document.querySelector('#MsgP1');

/*PASSO 2*/
let IconP2 = document.querySelector('#IconP2');
let MsgP2 = document.querySelector('#MsgP2');

/*PASSO 3*/
let IconP3 = document.querySelector('#IconP3');
let MsgP3 = document.querySelector('#MsgP3');

/*PASSO 4*/
let IconP4 = document.querySelector('#IconP4');
let MsgP4 = document.querySelector('#MsgP4');

/*PASSO 5*/
let IconP5 = document.querySelector('#IconP5');
let MsgP5 = document.querySelector('#MsgP5');



/*FUNCÇÃO QUE ADIA OU CANCELA UM CARREGAMENTO*/
let Icones = [IconP1, IconP2, IconP3, IconP4, IconP5] /*ARREY COM OS ÍCONE DE CADA CARD*/
let mensagens = [MsgP1, MsgP2, MsgP3, MsgP4, MsgP5] /*ARREY COM AS MENSAGENS DE CADA CARD*/
let AdiaCancela = 'ADIA' /* VARIÁVEL QUE RECEBE O INPUT DO USUÁRIO*/

for (i = 0; i < mae.children.length; i++){
    if (AdiaCancela ==  'CANCELADO') {
        mae.children[i].className = 'cancelado'
        Icones[i].classList = canc;
        mensagens[i].innerHTML = 'CANCELADO!'
    }

    if (AdiaCancela == 'ADIADO') {
        mae.children[i].className = 'adiado'
        Icones[i].classList = circulo;
        mensagens[i].innerHTML = 'INICIOU HOJE, TERMINARÁ AMANHÁ!'
    }
}