$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $('.mobile-menu').slideToggle(300);
        $('.hamburger').toggle();
        $('.close').toggle();
    });
});
