// se a peça possuir um peso superior a 100 gramas, pode cadastrar. OK
 
// Dada a capacidade de cada caixa, caso a lista de peçcas seja superior a 10, imprima uma mensagem
// infomando nao ter capacidade suficiente.

// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

// posiçoes =            0           1               2               3            4
var listaDePecas = ["amortecedor","motor" , "correia dentada","filtro de ar","pneu 14"]; // array

if(listaDePecas.length > 10){
    console.log("Nao é possivel cadastrar por execesso de peças");
}else{
    console.log("limite ok");
}

let peso = 99;

if(peso >= 100){
    console.log("peso permitido")
}else{
    console.log("O peso esta fora do normal")
}

let peca = "farol";
if(peca.length < 3){
    console.log("o nome da peca é muito pequeno")
}else{
    console.log("o nome da peça é valido");
}

