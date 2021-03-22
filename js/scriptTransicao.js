//Animação do scroll
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 300));
}


// Scroll suave para link interno
$('nav a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    menuHeight = $('nav').innerHeight(),
    targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);
});

$("a[href^=#]").on("click", function (e) {
   e.preventDefault(); 
  history.pushState({}, "",
   this.href); });