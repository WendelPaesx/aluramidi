function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play()

}


const listaDeTeclas = document.querySelectorAll('.tecla');

// referencia variavel
// recebe contador


// para
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla =listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
    // console.log(instrumento)

    
    const idAudio = `#som_${instrumento}`;// template string

    // console.log(idAudio)

    // '#som_{instrumento}'

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

}




