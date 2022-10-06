function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)


    if (elemento != null && elemento.localName === 'audio') {

        elemento.play()
    }else{
        console.log('Elemento/seletor nao encontrado')
    }


}
   


// selecionar todos os elementos com a class .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

// referencia variavel
// recebe contador


// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];



    const idAudio = `#som_${instrumento}`;// template string





    tecla.onclick = function () {
        tocaSom(idAudio);

        tecla.onkeydowm = function (evento) {
            if (evento.code == "space" || "enter") {
                tecla.classList.add('ativa')
            }


        }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa')
        }
    };

}




