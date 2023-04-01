// Laços de Repetição - Loops

/* Loop -> Executa um ou mais comeandos até que a condição estabeleciada seja falsa. Ou seja,
enquanto a condição for verdadeira, repita determinada sequÊncia de comandos. */

// for -> executa um bloco de código diversas vezes

// while -> executa um bloco de código controlando o número de execuções com um teste lógico

let p = document.getElementById("res")

// Atividade 01
 /* function contagemRegressiva() {
            let input = Number(document.getElementById("num").value)
            p.innerHTML = ""

            for(let i = input; i >= 0; i--) {
                p.innerHTML += `${i} <br>`
                //p.innerHTML += i + "<br>"
            }
        } */
    /* 
        while(sorteado != usuario) {
            usuario = prompt("Digite um numero")  
        }
    */
 
//Atividade 02
    /*  
    function acerteONumero() {
        let sorteado = Math.floor(Math.random() * 10)
        let tentativas = 0

        while(true) {
            tentativas++

            if(tentativas >= 5) {
                alert("Número de tentativas atingido")
                break
            } else {
                let usuario = Number(prompt(`Digite um numero. Número de tentativas: ${tentativas}`))

                if(sorteado == usuario) {
                    alert("Você acertou!")
                    break
                } else if(usuario < sorteado) {
                    alert("Tente um numero maior")
                } else {
                    alert("Tente um numero menor")
                }
            }  
        }
    } */
 /* function tabuada() {
            let input = Number(document.getElementById("num").value)
            p.innerHTML = ""

            for(let i = 0; i <= 10; i++) {
                p.innerHTML += `${input} x ${i} = ${i * input} <br>`
            }
        } */

        let frase = ""
        
        while(true) {
            let caractere = prompt("Digite um caractere")

            if(caractere == "") {
                alert(frase)
                break
            }

            frase += caractere
        }

        ..++-
