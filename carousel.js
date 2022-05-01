$(document).ready(function() {
    $('.slick').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: document.querySelector(".slick-prev"),
        nextArrow: document.querySelector(".slick-next"),
    });
});