# About This
##This project was made using JavaScript and Jquery, the goal was to use and understand the basic concepts. A button was created that when in focus state changes its position randomly. All notes from this class are also included in this document.

<img src="https://github.com/heltonbc/Aula10_Javascript_e_jQuery/blob/main/src/Untitled.png"/>


# Anotações da Aula
Aula 10 – Javascript e jQuery
npm init
parametrizar o npm e suas dependências podendo instalar alguns pacotes
touch .gitignore
Criado para ignorar arquivos no upload para o github. Por exemplo no projeto atual trabalharemos com o node, então foi colocado na lista o “node_modules/”
npm install -D live-server
ativa o live-server que possibilita o preview da tela de desenvolvimento no navegador. 
importar arquivo css
<link rel="stylesheet" href="style.css">
importar arquivo js
<script src="./script.js"></script>
package.json
criando o arquivo package.json 
rodar o comando no terminar 
npm init
abaixo está um exemplos de configuração, alterações podem ser feitas posteriormente direto no arquivo. 
O comando 
   "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx live-server src/"
Foi usado para ativar o live-server.


{
  "name": "javascript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx live-server src/"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "live-server": "^1.2.1"
  }
}

para executar “npm run start” ou “npm start”
querySelector
serve para pegar um item apenas (tag, class, id)
getElementsByTagName
Esse comando seleciona vários objetos, tendo que especificar qual a posição quer buscar, ele funciona como um array. 
body.style.
modificando propriedades de .CSS dentro do script.js


const body = document.querySelector('body');
body.innerHTML = `
## Hello Javascript!
`;

body.style.backgroundColor = '#000';
body.style.color = '#fff';


document.getElementById
Serve para buscar o elemento que possui um ID definido
Function in btn
Para adicionar uma função em um botão existe duas formas, com e sem uma função de acordo com o código abaixo:

//document.getElementById("btn-start").addEventListener("click", handleClick); “Apenas click”

document.getElementById("btn-start").addEventListener("click", () => handleClick()); “Com o elemento arrow function é possível definir um evento para o botão”

document.getElementById("btn-start").addEventListener("mouseover", () => handleClick()); “Este é apenas passando o mouse em cima executa a ação”






Botão Random
Random Button, botão randômico, ao passar com a seta do mouse por cima é alterada a posição do botão de forma randômica.

const el = document.getElementById("btn-start");
el.addEventListener("mouseover", () => {
el.style.position = "absolute";
el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`;
el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`;
});

el.addEventListener("click", () => handleClick());

obs.: sem o Math.floor tbm funcionou. 


4. Videoaula - JS - Trabalhando com jQuery
Document ready javascript


document.addEventListener('DOMContentLoaded', () => {})

Função utilizada para executar o código JS apenas após a renderização total do HTML
jQuery
jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente. Usada por cerca de 74.4% dos 10 mil sites mais visitados do mundo, jQuery é a mais popular das bibliotecas JavaScript.
possibilita a junção de codigos para paginas do netscape e explorer da microsoft, onde um é desenvolvido em Jscript e outro javascript. Foi popular até 2015 onde o angular começou ganhar notoriedade, react tbm foi lançado e acabaram tomando boa parte da fatia que usava jQuery, mas ainda sim é muito utilizado. 
Por exemplo o jQuery é necessário para trabalhar com algumas aplicações backend que usam o “cheerio js” https://cheerio.js.org/index.html
Jquery Instalação
Tem como ser feita por download e instalação mas na aula faremos via cndjs. cdnjs.com

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
ou
https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
A vantagem do cdn é a rede global.	
jQuery
Pode ser utilizado “$()” em vez de jQuery()
Neste exemplo foi feito desta forma:
const body = document.querySelector('body');
const body = $('body');

Outros exemplos:
document.addEventListener('DOMContentLoaded'
$(document).ready(() => {

const el = document.getElementById("btn-start");
const el = $("#btn-start");

No lugar do “addEventListener” caso não funcione pode ser utilizado no jQuery apenas “on”


Help jQuery
https://api.jquery.com/
Existe um conteúdo extenso para auxiliar desenvolvedores.
Por exemplo, como usar o Style.css pelo jQuery.
é trocado o el.style por el.css

body.style.backgroundColor = '#000';
body.style.color = '#fff';

body.css("backgroundr-color", "#000");
body.css.("color", "#fff");

    el.style.position = "absolute";
    el.style.top = `${(Math.random() * (window.innerHeight - 18))}px`;
    el.style.left = `${(Math.random() * (window.innerWidth - 36))}px`;

    el.css("position", "absolute");
    el.css("top", `${(Math.random() * (window.innerHeight - 18))}px`);
    el.css("left", `${(Math.random() * (window.innerWidth - 36))}px`);


const handleClick = () => {
    const body = $('body');
    body.innerHTML = `
    <h1>Hello Javascript!</h1>
    <h2> and Hello World!</h2>
    `;        
    body.css("backgroundr-color", "#000");
    body.css.("color", "#fff");    
};


$(document).ready(() => {
    const el = $("#btn-start");
    el.on("mouseover", () => {
        el.css("position", "absolute");
        el.css("top", `${(Math.random() * (window.innerHeight - 18))}px`);
        el.css("left", `${(Math.random() * (window.innerWidth - 36))}px`);
    });
jQuery UI
https://jqueryui.com/ 
Componentes prontos, porém ao importar a biblioteca o projeto fica um pouco mais pesado. Mas muito utilizado.

Tanto jQuery como Ajax são frameworks que estão saindo de mercado, o que indica que novos projetos não são desenvolvidos nessas ferramentas, mas pode existir demanda para sistemas já desenvolvidos para manter o sistema legado. 
Tipos de Variáveis
string (texto) = “”, ‘’, ``;
number (numero) = 1, -1, 1.0 (decimal e inteiro)
boolean (true or false) = true, false;
soma (+) = 10 + 10 = 20
resto (%)
Igual/igualdade absoluta (=, ==, ===)
diferente = !==
maior/menor/maior-igual/menor-igual= (>, <, >=, <=)

concatenação 
let soma = ‘Meu nome eh “ + “Edson”;

Exemplo para operador lógico, true and false
let valor1 = 10;
let valor2 = 10;

let resultado = valor1 == valor2;
console.log(resultado); 
true


let valor1 = 10;
let valor2 = 11;

let resultado = valor1 >= valor2;

console.log(resultado); 
false

let valor1 = 10;
let valor2 = 11;

let resultado = valor1 != valor2;

console.log(resultado); True (é diferente)


let nome1 = “Helton”
let idade1 = 29

let nome2 = “Edson”
let idade2 = 30

let compararIdade = idade1 <= idade2;

if(comparaIdade) {
console.log(“Idade1 eh maior que idade2”);
} else {
console.log(“idade2 eh menor que idade1”);
}
Funções
const calcular = (valor1, valor2) => { 
if (valor1 > valor2) {
 console.log("valor1 eh maior que valor 2")
 } 
if (valor2 > valor1) {
 console.log("valor2 eh maior que valor 1 ")
 }
 if (valor1 === valor2) { 
console.log("os valores sao iguais") } } 

calcular(1, 2); 
calcular(39, 47); 
calcular(1000, 1); 
calcular(20, 20);
Loop
Loop for
i++=adiciona 1
i = i +2 (1,3,5…)
i=0
i=1 (são as posições de start)
const calcular = (valor, valor2) => {
    console.log(valor1 + valor2);
}

for(let i = 1; i <= 10; i++ {
console.log(i);
}





const calcular = (valor, valor2) => {
    console.log(valor1 + valor2);
}

for(let i = 1; i <= 10; i = i+3) {
console.log(i);
}


Tabuada:
const calcular = (valor, valor2) => {
    console.log(valor1 + valor2);
}

for(let i = 1; i <= 10; i++) {
console.log(`2 * ${i} = ${i * 2}`);
//console.log(“2 * “ + i + “ = “ + i * 2);
}


outros exemplos de Loops (Do_While)

const calcular = (valor, valor2) => {
    console.log(valor1 + valor2);
}


let i = 0;
do {
console.log("DO I", i);
i++
} while (i < 10) {
    console.log("while I", i)    
    i++
}


ordem correta:
while (i < 10) {
    console.log("while I", i)    
    i++
}

do {
console.log("DO I", i);
i++
} 




Objetos JS, Criar, renomear,exibir.
const exemple = {
nome: “Helton”,
Idade: 29,
}
console.log(exemple);

Renomear um objeto em JS, novo valor

exemple.nome = “novo nome”;

Para retornar os dados do cadastro utilizando função exemplo (imprimir, exibir…)


const teste = () => {
    let nome = "Helton";
    let idade = 25;


const pessoa = {
    nome: "Helton",
    idade: 29,
}

pessoa.nome = "Helton Cunha";

console.log(pessoa);
}

teste();

Exibir dados com Array:

let conjuntos = [1, "2", "meu nome"];

conjuntos[1] = "elefante";

console.log(conjuntos);

A contagem do array começa a partir de 0, no exemplo para renomear o item um “elefante” foi necessário indicar [1].

É possível colocar N coisas em um array por exemplo até mais 1 objeto, exemplo:

let conjuntos = [1, "2", "meu nome", true, {nome: "Helton", idade: 29}];

conjuntos[1] = "elefante";

console.log(conjuntos);

–

let conjuntos = [
    {nome: "Helton", idade: 29},
    {nome: "Joao", idade: 39},
    {nome: "Maria", idade: 49},
    {nome: "Jose", idade: 59},
    {nome: "Joana", idade: 19},
];

conjuntos.push({nome: "Juca", idade: 46})

console.log(conjuntos);

–
conjuntos.pop(); 
Retira o último objeto upado no array. 

Para realizar filtros de busca:

let conjuntos = [
    {nome: "Helton", idade: 29},
    {nome: "Joao", idade: 39},
    {nome: "Maria", idade: 49},
    {nome: "Jose", idade: 59},
    {nome: "Joana", idade: 19},
];

conjuntos = conjuntos.filter(conjunto => {
    if(conjunto.idade == 29) return conjunto;
})

console.log(conjuntos);




Encapsulamento JS
(closures) 
Encapsulamento é um dos fundamentos da programação orientada a objetos tradicionais. Considerando que não temos classes no JavaScript e se entendermos o encapsulamento como uma forma de restringir acesso à informação, concluímos que a definição de escopo é o caminho para alcançá-lo.

Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada.

let conjuntos = [
    {nome: "Helton", idade: 29},
    {nome: "Joao", idade: 39},
    {nome: "Maria", idade: 49},
    {nome: "Jose", idade: 59},
    {nome: "Joana", idade: 19},
];

const funcao = () => {
    console.log("funcao normal")
}

const pessoa = {
    nome: "Helton",
    nomePessoa: () => {
        console.log("Helton")
    }
}
funcao();
pessoa.nomePessoa();



Node install
e Deno install
No windows a instalção do Deno se dá através do chocolatey + git bash.
Pra rodar o Node com typescript é necessário instalar o pacote global do Node pelo terminal com o comando “npm i -g typescript”

Porém para rodar precisa passar o comando no terminal “tsc app.ts”
desta forma ele cria uma cópia do arquivo ts para js convertendo o código para poder compilar. 

“start”: “tsc app.ts && node app.js”
Javascript web
Frameworks mais usados atualmente são react e next. 


addEventListener + botão + função
No index.html existem alguns elementos nos quais podemos buscar ele através do script.js. 
No exemplo criamos um titulo h1 no arquivo html e no arquivo JS criamos um botão com o evento de escutar o click e mudar o texto indicando que o botão foi clicado. Exemplo do código abaixo:

JS
const titulo = document.querySelector("h1");
console.log(titulo)

const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    //console.log("Botao clicou")
    titulo.innerHTML = "<b style='color: red'>Clicou</b>"
// ou pode ser usado tbm o innerHtml = “Clicou”
})


HTML
<body>
    <h1>Titulo da Pagina</h1>
    <button id="btn">Mudar titulo</button>
    <script src="./script.js"></script>
</body>
O mesmo exemplo anterior usando jQuery
Para utilzar o jQuery é necessário setar a propriedade abaixo no código HTML do projeto.
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

Após isto o novo código fica desta forma:

const titulo = $("h1");
console.log(titulo)

const btn = $("#btn");

btn.on('click', () => {
    //console.log("Botao clicou")
    titulo.html("Clicado")
//para adicionar css basta:
titulo.css("color", "red");
titulo.fadeToggle()
})


Animações de transição do botão poderão ser encontradas no site do jQuery por exemplo titulo.fadeToggle()

