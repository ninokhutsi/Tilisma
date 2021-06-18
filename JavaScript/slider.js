$(document).ready(function(){
  $('.arrowNext').on('click', function(){
    let currentSlide = $('.active');
    let nextSlide = currentSlide.next();

    if(nextSlide.length){
      currentSlide.removeClass('active').css('z-index', -10);
      nextSlide.addClass('active').css('z-index', 10)
    }
  })

  $('.arrowPrev').on('click', function(){
    let currentSlide = $('.active');
    let prevSlide = currentSlide.prev();

    if(prevSlide.length){
      currentSlide.removeClass('active').css('z-index',-10);
      prevSlide.addClass('active').css('z-index',10);
    }
  })
})

