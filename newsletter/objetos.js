let usuarios = [] //banco de dados
let ul = document.getElementById("usuarios_salvos")

function cadastro() {
    let input = document.getElementById("email").value

    if(input == "") {
        alert("Preencha o campo de email")
        return
    }

    for(let usuario of usuarios) {
        if(input == usuario) {
            alert("Usuario já cadastrado")
            return
        }
    }

    usuarios.push(input)

    alert("Usuário cadastrado com sucesso!")
}

const usuariosSalvos = function () {  //função anônima
    ul.innerHTML = ""

    for(let usuario of usuarios) {
        ul.innerHTML = `<li>${usuario}</li>`
    }
}

const descadastro = () => {
    //arrow function, função anônima com sintaxe diferente

    let emailDescadastro = prompt("Digite o email para descadastrar")

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i] === emailDescadastro) {
            usuarios.splice(i, 1)
            alert("Email descadastrado com sucesso!")
            usuariosSalvos()

            return;
        }
    }
    alert("Usuário não encontrado")
}