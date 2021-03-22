function nextClick() {
    var activeImg = $('.jq-active');
    var nextImg = activeImg.next('img');
    activeImg.removeClass('jq-active');
    nextImg.addClass('jq-active');
}

function previousClick() {
    var activeImg = $('.jq-active');
    var prevImg = activeImg.prev('img');
    activeImg.removeClass('jq-active');
    prevImg.addClass('jq-active');
}

function init() {
    $('.back').click(previousClick);
    $('.forward').click(nextClick);
}

$(document).ready(init);
