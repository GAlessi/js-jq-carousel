
// Tentativo di associazione di ogni dot a immagine corrispondente

function changeImg() {
    var activeI = $('.jq-full');
    activeI.removeClass('jq-full');
    var clickedDot = $(this);
    clickedDot.addClass('jq-full');
    var arrImg = $('.images img');
    var imgNumb = clickedDot.data('ind');
    console.log(imgNumb);

}


//funzione in caso di click "avanti"
function nextClick() {
    var activeImg = $('.jq-active');
    var activeDot = $('.jq-full');
    //verifico se sono arrivato all'ultima immagine
    if (activeImg.hasClass('lastImg')) {

        //inizializzo una variabile che identifichi come immagine successiva la prima della serie
        var nextImg = $('img.firstImg');
        activeImg.removeClass('jq-active');
        nextImg.addClass('jq-active');

        var nextDot = $('i.firstDot');
        activeDot.removeClass('jq-full');
        nextDot.addClass('jq-full');
    }else {
        var nextImg = activeImg.next('img');
        activeImg.removeClass('jq-active');
        nextImg.addClass('jq-active');

        var nextDot = activeDot.next('i');
        activeDot.removeClass('jq-full');
        nextDot.addClass('jq-full');
    }
}

//funzione in caso di click "indietro"
function previousClick() {
    var activeImg = $('.jq-active');
    var activeDot = $('.jq-full');

    //verifico se sono tornato alla prima immagine
    if (activeImg.hasClass('firstImg')) {

        //inizializzo una variabile che identifichi come immagine successiva l'ultima della serie
        var prevImg = $('img.lastImg');
        activeImg.removeClass('jq-active');
        prevImg.addClass('jq-active');

        var prevDot = $('i.lastDot');
        activeDot.removeClass('jq-full');
        prevDot.addClass('jq-full');
    }else {
        var prevImg = activeImg.prev('img');
        activeImg.removeClass('jq-active');
        prevImg.addClass('jq-active');

        var prevDot = activeDot.prev('i');
        activeDot.removeClass('jq-full');
        prevDot.addClass('jq-full');
    }
}

//attivo l'ascolto di "click" sui div contenenti le frecce
function init() {
    $('.back').click(previousClick);
    $('.forward').click(nextClick);
    $('.fa-circle').click(changeImg);
}

//inizializzo la funzione dopo che js ha letto il file document
$(document).ready(init);
