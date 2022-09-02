window.onload = () => {
  "use strict";
  if("serviceWorker" in navigator){
      navigator.serviceWorker.register("./sw.js");
  }
};


//Trocar nome dos times 01 e 02
let modelo = {
  titulo: ""
}

function adicionarT1(){
  let tituloTime1 = document.getElementById("tituloTime1");
  tituloTime1.textContent = modelo.titulo;
}

function adicionarT2(){
  let tituloTime2 = document.getElementById("tituloTime2");
  tituloTime2.textContent = modelo.titulo;
}
    
function nomeTime1() {
    modelo.titulo = prompt("Digite o do primeiro time", "Time 01");
    adicionarT1();
}

function nomeTime2() {
  modelo.titulo = prompt("Digite o do segundo time", "Time 02");
  adicionarT2();
}

//Botões para adicionar a vitória dos times
function adicionaVitoria(){
  let pontos = document.getElementById("pontoT1");
  let somar = parseInt(pontos.textContent) + 1;
  pontos.textContent = somar
}

function adicionaVitoria2(){
  let pontos = document.getElementById("pontoT2");
  let somar = parseInt(pontos.textContent) + 1;
  pontos.textContent = somar
}

//Botões para somar a quantidade de pontos adquirdos por time
function somaPonto(){
  let pontos = document.getElementById("resultado1");
  let somar = parseInt(pontos.textContent) + 1;
  pontos.textContent = somar 
} 

function somaPonto3(){
  let pontos = document.getElementById("resultado1");
  let somar = parseInt(pontos.textContent) + 3;
  pontos.textContent = somar 
}
function somaPonto6(){
  let pontos = document.getElementById("resultado1");
  let somar = parseInt(pontos.textContent) + 6;
  pontos.textContent = somar 
}
function somaPonto12(){
  document.getElementById("resultado1").innerHTML = 12
}

function somaPonto_1(){
  let pontos = document.getElementById("resultado2");
  let somar = parseInt(pontos.textContent) + 1;
  pontos.textContent = somar 
} 

function somaPonto_3(){
  let pontos = document.getElementById("resultado2");
  let somar = parseInt(pontos.textContent) + 3;
  pontos.textContent = somar
}

function somaPonto_6(){
  let pontos = document.getElementById("resultado2");
  let somar = parseInt(pontos.textContent) + 6;
  pontos.textContent = somar
}

function somaPonto_12(){
  document.getElementById("resultado2").innerHTML = 12
}

//Botão para criar/iniciar um  novo jogo
function novoJogo() {
  document.getElementById("resultado1").innerHTML = 0
  document.getElementById("resultado2").innerHTML = 0
  document.getElementById("tituloTime1").innerHTML = ("Time 01")
  document.getElementById("tituloTime2").innerHTML = ("Time 02")
  document.getElementById("pontoT1").innerHTML = 0
  document.getElementById("pontoT2").innerHTML = 0 

}

//Botão para limpar a pontuação dos times
function limparPontuacao() {
  document.getElementById("resultado1").innerHTML = 0
  document.getElementById("resultado2").innerHTML = 0
}