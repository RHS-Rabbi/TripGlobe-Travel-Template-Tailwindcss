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
// Header Scroll
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 50) {
    $('header').addClass('scroll-header');
  } else {
    $('header').removeClass('scroll-header');
  }
});

// For Hero Section Rotating Text
const text = document.querySelector('.hero-icon .hero-content-icon');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style= "transform:rotate(${i * 17}deg)">${char}</span>`
).join("")



// Hero Section Video Popup
$(document).ready(function() {
	$('.hero-play-icon').magnificPopup({
    type: 'iframe'
  });
});



document.querySelectorAll('.rotate-text').forEach(text => {
  if (text.dataset.rotated) return;

  const angle = parseFloat(text.dataset.angle) || 17;
  const originalText = text.textContent.trim();

  text.innerHTML = originalText.split("").map(
    (char, i) =>
      `<span style="transform:rotate(${i * angle}deg)">${char}</span>`
  ).join("");

  text.dataset.rotated = "true";
});


