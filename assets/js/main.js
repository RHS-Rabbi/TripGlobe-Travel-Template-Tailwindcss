$(document).ready(function () {

    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle(300);
    });
    $(window).on('resize', function () {
        if ($(window).width() >= 1024) { 
            $('.mobile-menu').hide();
            $('.menu-toggle').removeClass('active');
        }
    });

});

const text = document.querySelector('.hero-icon .hero-content-icon');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style= "transform:rotate(${i * 17}deg)">${char}</span>`
).join("")