altura = 0
largura = 0
vidas = 1
tempo = 15

criaMosquitoTempo = 1500

nivel = window.location.search
nivel = nivel.replace('?', '')  

if(nivel === 'easy'){
    // 1500
    criaMosquitoTempo = 1500
} else if (nivel === 'hard'){
    // 1000
    criaMosquitoTempo = 1000
} else if (nivel === 'hardcore'){
    // 750
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcojogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)
}

cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo   
    }   
} , 1000)

ajustaTamanhoPalcojogo()

function posicaoRandomica(){

    // remover o mosquito caso exista 
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'game_over.html'
        } else{   
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }

    posicaoX = Math.floor(Math.random() * largura) - 90
    posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX , posicaoY)

    // criar elemento html
    mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    classe = Math.floor(Math.random() * 3 )
    
    switch(classe){
        
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        
        case 1:
            return 'ladoB'
    }
}