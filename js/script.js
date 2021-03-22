
//funzione in caso di click "avanti"
function nextClick() {
    var activeImg = $('.jq-active');

    //verifico se sono arrivato all'ultima immagine
    if (activeImg.hasClass('lastImg')) {

        //inizializzo una variabile che identifichi come immagine successiva la prima della serie
        var nextImg = $('img.firstImg');
        activeImg.removeClass('jq-active');
        nextImg.addClass('jq-active');
    }else {
        var nextImg = activeImg.next('img');
        activeImg.removeClass('jq-active');
        nextImg.addClass('jq-active');
    }
}

//funzione in caso di click "indietro"
function previousClick() {
    var activeImg = $('.jq-active');

    //verifico se sono tornato alla prima immagine
    if (activeImg.hasClass('firstImg')) {

        //inizializzo una variabile che identifichi come immagine successiva l'ultima della serie
        var prevImg = $('img.lastImg');
        activeImg.removeClass('jq-active');
        prevImg.addClass('jq-active');
    }else {
        var prevImg = activeImg.prev('img');
        activeImg.removeClass('jq-active');
        prevImg.addClass('jq-active');
    }
}

//attivo l'ascolto di "click" sui div contenenti le frecce
function init() {
    $('.back').click(previousClick);
    $('.forward').click(nextClick);
}

//inizializzo la funzione dopo che js ha letto il file document
$(document).ready(init);
