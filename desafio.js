// desafio do herói 
// Professor Felipão da DIO

let heroi = "Gabriel"
let xpDoheroi = 1000;
let nivelDoHeroi = ""

if (xpDoheroi <= 1000){
    nivelDoHeroi = "Ferro"
}else if (xpDoheroi >= 1001 && xpDoheroi <= 2000){
    nivelDoHeroi = "Bronze"
}else if (xpDoheroi >= 2001 && xpDoheroi <= 5000){
    nivelDoHeroi = "Prata"
}else if (xpDoheroi >= 5001 && xpDoheroi <= 7000){
    nivelDoHeroi = "Ouro"
}else if (xpDoheroi >= 7001 && xpDoheroi <= 8000){
    nivelDoHeroi ="Platina"
}else if (xpDoheroi >= 8001 && xpDoheroi <= 9000){
    nivelDoHeroi ="Ascendente"
}else if (xpDoheroi >= 9001 && xpDoheroi <= 10000){
    nivelDoHeroi ="Imortal"
}else {
    console.log ("Para XP maior ou igual a 10.001")
    nivelDoHeroi = "Radiante"
}
console.log ("o heroi do nome " + heroi + " está no nivel " + nivelDoHeroi )
