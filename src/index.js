// // O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
//const idade = 25;
//const idade = 30;
//console.log(idade); 

// // //o erro apresentado no console: const idade = 30;
// //       ^

// //       SyntaxError: Identifier 'idade' has already been declared, pq uma variável const não pode ser declarada duas vezes





////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 
if(true) {
    let x = 30;
    console.log(x)  //isso funciona, pois x está dentro do escopo do bloco if
}

console.log(x); // isso resultará em um erro, pois x está fora do escopo do bloco if e não funcionará

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

// {
//     let x = 10;
//    // console.log(x); 
// }
// // console.log(x);



///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log


{
    let x = 10;
    var y = 20;
}

// console.log(x); "let x" tem escopo de bloco (ou seja, está acessível apenas dentro do bloco em que foi declarada)
// console.log(y); "var y" tem escopo de função ou global (ou seja, está acessível em toda a função ou no escopo global).

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
var a = 5;
//console.log(b);
//let b = 10;

// var a = "a" é declarado usando a palavra-chave var, ele passa por hoisting (elevação), o que significa que a declaração da variável é "elevada" para o topo do escopo, mas não a inicialização. Portanto, a é inicializado com undefined, mas ainda não possui um valor atribuído.
// let b = 10; b foi declarado usando let, e as variáveis declaradas com let ou const não são hoisted (elevadas) para o topo do escopo. Portanto, neste ponto, b ainda não foi inicializado e não está definido.



/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?


// console.log(x); 

// let y = 15;
// let y = 20; 
// console.log(y); 

// "SyntaxError: Identifier 'y' has already been declared" ocorre porque a variável y está sendo declarada mais de uma vez no mesmo escopo. gerando um erro de sintaxe


//// Escreva um programa que print a primeira letra dessa variavel 
//let nomeCompleto = 'eduardo';
//let primeiraLetra = nomeCompleto[2]
//
//console.log(primeiraLetra)



//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)








