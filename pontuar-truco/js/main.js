window.onload = () => {
  "use strict";
  if("serviceWorker" in navigator){
      navigator.serviceWorker.register("./sw.js");
  }
};

let modelo = {
  titulo: "",
  pontos: 0,
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

//novoJogo = () => {
  //const tituloTime1 = document.getElementById('tituloTime1');
  //const tituloTime2 = document.getElementById('tituloTime2');
  //const pontoT1 = document.getElementById('pontoT1');
  //const pontoT2 = document.getElementById('pontoT2');
  //const resultado = document.getElementById('resultado');
  //tituloTime1.value = "Time 01";
  //tituloTime2.value = "Time 02";
  //pontoT1.value = "0";
  //pontoT2.value = "0";
  //resultado.value = "0";
//}