// 1 - exercicio Fazer um desconto 
/*
function calcularDesconto(preco, desconto){
    let aplicarDesconto =  preco * (desconto /100);
    let vaitudo = preco - aplicarDesconto;
    return vaitudo;
}

precoOriginal = 100;
desconto = 20;
 





// Aqui vou chaamar a função
let valorfinal = calcularDesconto(precoOriginal, desconto);
console.log("O valor final com desconto é: " + valorfinal + "€");


// 2- Mostrar o valor do desconto

function aplicarDesconto(preco, desconto){
    let oDEsconto = preco * (desconto / 100);
    let valoridael = preco- oDEsconto;
   
    return [valoridael, oDEsconto];
}

let [precoFinal, descontoValor] = aplicarDesconto(250, 10);
console.log("O valor final com desconto é: " + precoFinal + "€");
console.log("O seu desconto é : " + descontoValor + "€");


// 3-Desconto dependendo do preço
function calcularDesconto(preco){
     // Va,os calcular o Desonto
     let desconto = 0;
     if(preco < 50){
        desconto = 5
        resultado = preco - (preco * (desconto / 100));
     }else if (preco >= 50 && preco <= 99){
        desconto = 10
        resultado = preco - (preco * (desconto / 100));
     }else{
        desconto = 20
        resultado = preco - (preco * (desconto / 100));
     }

     return [resultado, desconto];
}

let precoOriginal = 120;

let [precoFinal, descontoValor] = calcularDesconto(precoOriginal)
console.log("O preço original é: " + precoOriginal + "€");
console.log("O seu desconto é : " + descontoValor + "%");
console.log("O valor final com desconto é: " + precoFinal + "€");
*/


// 4-Vários produtos 
/*
let produtos = [
    {nome: "Telemovel", preco: 500},
    {nome: "Auriculares", preco: 80},
    {nome:"putador", preco: 1000},
    {nome: "Tablet", preco: 300}
];
///console.log(produtos[0].nome)
//console.log(produtos[0].preco)
function AplicarDesconto(produto, desconto){
    let descontoi = produto.preco * (desconto / 100);
    let descontoo = produto.preco - descontoi;
    return [descontoo, descontoi];
}


/*AplicarDesconto(produtos[1], 10)
AplicarDesconto(produtos[2], 10)
AplicarDesconto(produtos[3], 10)


let desconteii = 10

let [precofinal, descontou] = AplicarDesconto(produtos[0], desconteii);
console.log("Produto:", produtos[0].nome);
console.log("Preço Original:", produtos[0].preco , "€");
console.log("Desconto:", desconteii, "%");
console.log("Preço Final:", precofinal, "€");
*/

// 5- Sistema de descontos 
let produtos = [
    {nome: "Computador", preco: 1000},
    {nome: "Monitor", preco: 300},
    {nome: "Rato", preco: 50},
    {nome: "Teclado", preco: 100}
]

 let descontinho = 15 
aplicarDescontinho(produtos[0], descontinho);

function aplicarDescontinho(produto, desconto){
    let decontoValor = produto.preco * (desconto / 100); 
    let precoIdeal = produto.preco - descontoValor; 
    return [precoIdeal, decontoValor];
}

for(let i = 0; i < produtos.length; i++){
    let [precoFinal, descontoValor] = aplicarDescontinho(produtos[i], descontinho);
    

}