let x = document.querySelector('.x')
let o = document.querySelector('.o')
let buttons = document.querySelectorAll('#buttons button')
let menssagemContainer = document.querySelector('#menssagem')
let menssagemTexto = document.querySelector('#menssagem p')
let boxes = document.querySelectorAll('.box')
let segundoPlayer;

//Contador de jogadas

let player1 = 0
let player2 = 0

//adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', function() {
        let el = checarEl(player1, player2)

        //verifica se tem X ou O
        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true)         
            this.appendChild(cloneEl)
            
            //computar jogadas
            
            if (player1 == player2) {
                player1++

                if(segundoPlayer == 'maquina') {
                    //executar jogada
                    computerPlay()

                    player2++
                }
            }else {
                player2++
            }
            // ver vencedor
            vencedor()
        }
    })
}

//player 1 ou IA
for(let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener('click', function() {

        segundoPlayer = this.getAttribute('id')

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }
        setTimeout(function() {
    
        let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 500)
    })
}

//quem vai jogar
function checarEl(player1, player2) {
    if(player1 == player2) {
        el = x
    }else {
        el = o
    }
    return el
}

//função ver vencedor

function vencedor() {
    let b1 = document.querySelector('#bloco-1')
    let b2 = document.querySelector('#bloco-2')
    let b3 = document.querySelector('#bloco-3')
    let b4 = document.querySelector('#bloco-4')
    let b5 = document.querySelector('#bloco-5')
    let b6 = document.querySelector('#bloco-6')
    let b7 = document.querySelector('#bloco-7')
    let b8 = document.querySelector('#bloco-8')
    let b9 = document.querySelector('#bloco-9')

    //horizontal

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x' ) {
           declaraVencedor('x')
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x' ) {
            declaraVencedor('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x' ) {
            declaraVencedor('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x' ) {
            declaraVencedor('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if(b2Child == 'x'  && b5Child == 'x' && b8Child == 'x' ) {
            declaraVencedor('x')
        } else if (b2Child == 'o'  && b5Child == 'o' && b8Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x' ) {
            declaraVencedor('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    //diagonal

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x' ) {
            declaraVencedor('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x' ) {
            declaraVencedor('x')
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o' ) {
            declaraVencedor('o')
        }
    }

    let contador = 0

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            contador++
        }
    }

    if(contador == 9) {
        declaraVencedor('deu velha')
    }
}

//limpa jogo e atualiza placar
function declaraVencedor(vencedorJogo) {
    let placarX = document.querySelector("#pontos-1")
    let placarO = document.querySelector("#pontos-2")
    let msg = ''

    if(vencedorJogo == 'x') {
        placarX.textContent = parseInt(placarX.textContent) + 1
        msg = 'O jogador 1 Ganhou!'
    } else if(vencedorJogo == 'o') {
        placarO.textContent = parseInt(placarO.textContent) + 1
        msg = 'O jogador 2 Ganhou!'
    } else {
        msg = 'Deu Velha!'
    }

    menssagemTexto.innerHTML = msg
    menssagemContainer.classList.remove('hide')

    //esconde msg
    setTimeout(function() {
        menssagemContainer.classList.add('hide')
    }, 3000)

    player1 = 0
    player2 = 0

    //remover X e O das divs
let removeBoxes = document.querySelectorAll('.box div')

    for(let i = 0; i < removeBoxes.length; i++) {
        removeBoxes[i].parentNode.removeChild(removeBoxes[i])
    }
} 

//Executar a logica da jogada

function computerPlay() {
    let cloneO = o.cloneNode(true)
    contador = 0
    filled = 0

    for(let i = 0; i < boxes.length; i++) {
        let randonNumero = Math.floor(Math.random() * 5)
        //preenche se o filoh estiver vazio
        if(boxes[i].childNodes[0] == undefined) {
            if(randonNumero <= 1) {
                boxes[i].appendChild(cloneO)
                contador++
                break
            }
        //Checa quantos estão preenchidos   
        }else {
            filled++

        }
    }
if(contador == 0 && filled < 9) {
    computerPlay()
}

}