function nextClick() {
    var activeImg = $('.jq-active');
    if (activeImg.hasClass('lastImg')) {
        var nextImg = $('img.firstImg');
        activeImg.removeClass('jq-active');
        nextImg.addClass('jq-active');
    }else {
        var nextImg = activeImg.next('img');
        activeImg.removeClass('jq-active');
        nextImg.addClass('jq-active');
    }
}

function previousClick() {
    var activeImg = $('.jq-active');
    if (activeImg.hasClass('firstImg')) {
        var prevImg = $('img.lastImg');
        activeImg.removeClass('jq-active');
        prevImg.addClass('jq-active');
    }else {
        var prevImg = activeImg.prev('img');
        activeImg.removeClass('jq-active');
        prevImg.addClass('jq-active');
    }
}

function init() {
    $('.back').click(previousClick);
    $('.forward').click(nextClick);
}

$(document).ready(init);
