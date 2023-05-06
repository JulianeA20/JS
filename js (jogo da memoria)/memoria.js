let cards = document.querySelectorAll(".memory-card")

for(let card of cards) {
    card.addEventListener("click", virarCarta)
}

let primeiraCarta, segundaCarta;
let algumaCartaVirou = false;
let tabuleiroTravado = false;

function virarCarta() {
    if(tabuleiroTravado) {
        return
    }

    this.classList.add("flip")

    if(!algumaCartaVirou) {
        primeiraCarta = this
        algumaCartaVirou = true
        return;
    }

    if(this === primeiraCarta) {
        return
    }

    segundaCarta = this
    algumaCartaVirou = false

    verificarMatch()
}

function verificarMatch() {
    let deuMatch = primeiraCarta.dataset.framework === segundaCarta.dataset.framework

    deuMatch ? desabilitarCards() : desvirarCartas()
}

function desabilitarCards() {
    primeiraCarta.removeEventListener("click", virarCarta)
    segundaCarta.removeEventListener("click", virarCarta)

    primeiraCarta = null
    segundaCarta = null
}

function desvirarCartas() {
    tabuleiroTravado = true

    setTimeout(() => {
        primeiraCarta.classList.remove('flip')
        segundaCarta.classList.remove('flip')
        tabuleiroTravado = false
    }, 1500)
}

(function aleatorio() {
    for(let card of cards) {
        let random = Math.floor(Math.random() * 12)
        card.style.order = random
    }
})()