alert("OLÁ  GALERA, TUDO BEM?");
function tocaSom(idELementoAudio){
    document.querySelector(idElementoAudio).play();
}
cost listaDeTeclas=document.querySelectorALL(“.tecla”);

for(*let contador=0; contador< listaDeTeclas.length; contador++){
    cost tecla = listaDeTeclas[contador];
    cost efeito= tecla.classList[1];
    cost iAudio= `#som_${efeito`};
    tecla.onclik=funtion(){
        tocaSom(iAudio);
    }
}