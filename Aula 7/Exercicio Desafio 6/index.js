const nome = prompt("Qual seu nome?") 
const nasceu = prompt ("Qual ano você nasceu?")
const anoAtual = prompt ("Qual ano a gente está?")

console.log("Nome:", nome)
console.log("Idade", anoAtual - nasceu)
console.log("Maior de idade ?", anoAtual - nasceu >= 18)
console.log("Idade em 2050", 2050 - nasceu)

//Correção Professor


let promptNome = prompt("Qual o seu nome?")
let promptNasc = prompt("Que ano você nasceu?")
let promptAno = prompt("Em qual ano estamos?")

promptNasc = Number(promptNasc)
promptAno = Number(promptAno)
let idade = promptAno - promptNasc
let idade2050 = 2050 - promptNasc

console.log("Nome:", promptNome)
console.log("Idade:", idade)
console.log("É maior de idade?", idade >= 18)
console.log("Idade em 2050:", idade2050)