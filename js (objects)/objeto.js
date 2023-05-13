let atletas = [
    {nome: "Juliane", esporte: "Natação"}
]
let tbody = document.querySelector("tbody")

function cadastro() {
    let nome = document.getElementById("nome").value
    let esporte = document.getElementById("esporte").value

    if(!nome || esporte == "") {
        alert("Preencha todos os campos")
        return;
    }

    const novoAtleta = {
        nome, 
        esporte 
    } 

    atletas.push(novoAtleta)
    alert("Usuario cadastrado com sucesso!")
}

function atletasSalvos() {
    tbody.innerHTML = ""

    for(let atleta of atletas) {
        tbody.innerHTML += `<tr>
        <td>${atleta.nome}</td>
        <td>${atleta.esporte}</td>
        </tr>`
    }
}

