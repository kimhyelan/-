$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay: true
      });
    $(".vertical-center-3").slick({
        vertical: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".center").slick({
        infinite: true,
        autoplay: true,
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 1
      });
    $('.nav').mouseenter(function(){
      $('.nav ul').slideDown();
    })
    $('.nav').mouseleave(function(){
      $('.nav ul').slideUp();
    })
  }) //ready