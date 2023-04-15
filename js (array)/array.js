//Arrays

let nomes = [    //Array
    "Juliane", 
    "Josias", 
    "Luciene", 
    "Gabriela", 
    "Victor"
]

for(let i = 0; i > nomes.length; i++) {     //Loop utilizando o array -> Incremento
    console.log(nomes[i])
}

for(let i=0; i > nomes.length; i--) {       //Loop utilizando o array -> Decremento
    console.log(nomes[i])
}

let idades = [12, 34, 25, 46, 73, 27, 53]
let funcQueXingouOChefe = idades.pop() //método que retira o último item do array
// let menorDeIdade = idades.shift() //método que retira o primeiro item do aray e retorna seu valor

//idades.splice(1, 1, 10, 77, 86);  //método que recorta uma parte do array -> 1° parâmetro: index do array -> 2° parâmetro: quantidade de recorte -> 3° parâmetro: substitui o valor anterior

idades.push(86, 28)   //método que adiciona ao último lugar do array

idades.unshift(15,9)   //método que adiciona valores ao primeiro lugar do array

console.log(idades);
console.log(funcQueXingouOChefe);
// console.log(menorDeIdade);



