let Dados = ['1', 'T', 'JOÃO DE DEUS DA LUZ', 'MARANHÃO / PARÁ / TOCANTINS',  'FRANCISCO', 'KBI-6155', '80']
const listaCompleta = document.querySelector('.principal')
let ListaDeCaregamento = [];

/*VARIÁVEL DA CLASSE FASE*/


/* VARIÁVEIS DOS ÍCONES*/
let CARRO = "bi bi-truck"
let CONE = "bi bi-cone-striped"
let CHEKOK = "bi bi-check2-circle"
let canc = "bi bi-x-circle-fill"
let circulo = "bi bi-arrow-repeat"

/*VARIÁVEIS DAS FASES*/

/*PASSO 1*/


/*PASSO 2*/


/*PASSO 3*/


/*PASSO 4*/


/*PASSO 5*/


function addCarregamento() {
    if (Dados.length < 7){
        alert('DADOS INCOMPLETO!')
        return
    }
    ListaDeCaregamento.push({
        seq: Dados[0],
        clt: Dados[1],
        mot: Dados[2],
        dest: Dados[3],
        conf: Dados[4],
        placa: Dados[5],
        cub: Dados[6]
    
    })
    updateCarregamento()
}

//ATUALIZAR CARREGAMENTO
function updateCarregamento(){
    let novaLi = ''
    ListaDeCaregamento.forEach((item,posicao) => {
        novaLi = novaLi + `

        <div class="card">
            <header class="content">
                <nav>
                    <div class="menu">
                        <div><h1>SEQ</h1><span id="SEQ"></span>${item.seq}</div>
                        <div><h1>CLT</h1><span id="CLT"></span>${item.clt}</div>
                        <div class="motorista"><h1>MOTORISTA</h1><span id="MOT">${item.mot}</span></div>
                        <div class="destino"><h1>DESTINO</h1><span id="DEST">${item.dest}</span></div>
                        <div><h1>CONFERENTE</h1><span id="CONF">${item.conf}</span></div>
                        <div><h1>PLACA</h1><span id="PLACA">${item.placa}</span></div>
                        <div><h1>CUB</h1><span id="CUB">${item.cub}</span></div>
                    </div>
                </nav>

                <div class="logo">
                    <img src="img/images.jpg" alt="Não a imagem" onclick="DeletarCarregamento(${posicao})">
                </div>
            </header>

            <div class="mae">

                <div class="fase">
                    <div class="title">
                        <h1 onclick="CancelaAdia()">EM ESPERA</h1>
                    </div>
                    <div class="passo">
                        <i class="bi bi-truck" id="IconP1"></i>
                        <p id="MsgP1">separando mercadoria ou aguardando conferente!</p>
                    </div>
                </div>

                <div class="fase">
                    <div class="title" id="carregando">
                        <h1>CARREGANDO</h1>
                    </div>
                    <div class="passo">
                        <i class="bi bi-cone-striped" id="IconP2"></i>
                        <p id="MsgP2">Opa! jaja daremos o pontapé inicial...</p>
                    </div>
                </div>

                <div class="fase">
                    <div class="title" id="aguard-faturamento">
                        <h1>AGUARD FATURAMENTO</h1>
                    </div>
                    <div class="passo">
                        <i class="bi bi-cone-striped" id="IconP3"></i>
                        <p id="MsgP3">Parabéns! você avançou uma etapa do processo.</p>
                    </div>
                </div>

                <div class="fase">
                    <div class="title" id="faturando">
                        <h1>FATURANDO</h1>
                    </div>
                    <div class="passo">
                        <i class="bi bi-cone-striped" id="IconP4"></i>
                        <p id="MsgP4">Parabéns! você avançou uma etapa do processo.</p>
                    </div>
                </div>

                <div class="fase">
                    <div class="title" id="concluído">
                        <h1>CONCLUÍDO</h1>
                    </div>
                    <div class="passo">
                        <i class="bi bi-cone-striped" id="IconP5"></i>
                        <p id="MsgP5">Parabéns! você avançou uma etapa do processo.</p>
                    </div>
                </div>

            </div>

        </div>
    
        `
    })    
    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(ListaDeCaregamento))
}

function DeletarCarregamento(posicao){
    ListaDeCaregamento.splice(posicao, 1)
    updateCarregamento()
}

function RecarregarCarregamento(){
    const CarregamentoLocalStorage = localStorage.getItem('lista')
    if (CarregamentoLocalStorage) {
        ListaDeCaregamento = JSON.parse(CarregamentoLocalStorage)
    }
    updateCarregamento()
}



let MsgP5 = document.querySelector('#MsgP5');
/*FUNCÇÃO QUE ADIA OU CANCELA UM CARREGAMENTO*/
function CancelaAdia() {
    let mae = document.querySelector('.mae')
    let IconP1 = document.querySelector('#IconP1');
    let MsgP1 = document.querySelector('#MsgP1');
    let IconP2 = document.querySelector('#IconP2');
    let MsgP2 = document.querySelector('#MsgP2');
    let IconP3 = document.querySelector('#IconP3');
    let MsgP3 = document.querySelector('#MsgP3');
    let IconP4 = document.querySelector('#IconP4');
    let MsgP4 = document.querySelector('#MsgP4');
    let IconP5 = document.querySelector('#IconP5');
    let MsgP5 = document.querySelector('#MsgP5');
    
    let Icones = [IconP1, IconP2, IconP3, IconP4, IconP5] /*ARREY COM OS ÍCONE DE CADA CARD*/
    let mensagens = [MsgP1, MsgP2, MsgP3, MsgP4, MsgP5] /*ARREY COM AS MENSAGENS DE CADA CARD*/
    let AdiaCancela = 'CANCELADO' /* VARIÁVEL QUE RECEBE O INPUT DO USUÁRIO*/
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
    updateCarregamento()
}
    
RecarregarCarregamento()


