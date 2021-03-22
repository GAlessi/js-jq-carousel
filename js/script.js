
// creazione automatica dei pallini in base al numero di Immagini
function pallini() {
    var arrImg = $('.images img');
    console.log(arrImg, arrImg.length);
    var dotContainer = document.getElementById('circles');
    for (var i = 0; i < arrImg.length; i++) {
        if (i == 0) {
            dotContainer.innerHTML += ( '<i class=" firstDot far fa-circle" data-ind="' + i + '"></i>')
        }else if (i == (arrImg.length - 1) ) {
            dotContainer.innerHTML += ( '<i class=" lastDot far fa-circle" data-ind="' + i + '"></i>')
        }else {
            dotContainer.innerHTML += ( '<i class=" far fa-circle" data-ind="' + i + '"></i>')
        }
    }
}


// Tentativo di associazione di ogni dot a immagine corrispondente
function changeImg() {
    var activeI = $('.jq-full');
    activeI.removeClass('jq-full');
    var clickedDot = $(this);
    clickedDot.addClass('jq-full');
    var dotNumb = clickedDot.data('ind');
    var activeImg = $('.jq-active');
    activeImg.removeClass('jq-active');
    $('[data-num="' + dotNumb + '"]').addClass('jq-active');

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
    pallini();
    $('.back').click(previousClick);
    $('.forward').click(nextClick);
    $('.fa-circle').click(changeImg);
}

//inizializzo la funzione dopo che js ha letto il file document
$(document).ready(init);
