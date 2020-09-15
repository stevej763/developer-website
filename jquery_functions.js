
//smooth scroll to href
$(document).on('click', 'a[href^="#"]', function(event) {
    //smooth slide to target unless it is the carousel slider buttons, then ignore
    if (event.target.getAttribute('id') != 'c-slider') {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    };



});
