// Operador E (AND) Simbulo:&&
//Retorna true APENAS SE TODOS OS ENVOLVIDOS forem true
//Apenas um único false já é suficiente para  retornar false
console.log(true && true) 

let idade = 18
let maiorIdade = idade >= 18// boolean
let temCarteira  = true
let temCarro= true

console.log(maiorIdade && temCarteira && temCarro)

//Operador OU (OR) - Simbulo:||
console.log(true || true) //true
console.log(true || false) //true
console.log(false ||true) //true
console.log(false && false) //false

let temTrabalho = true
let economizar = true
let investe = true
let herdeiro = true

console.log((temTrabalho && ecomoniza && investe) || herdeiro)



//Só é false se tiver todos os false si tiver um true vai dar true


//Operador NÃO/Negação(Not) - Simbulo:!
//Iverte o resultado transforma false em true e true em false
