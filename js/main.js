(function($) {
  "use strict"; // Start of use strict

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#show-top").addClass( "show-top" );
    }
    else {
      $("#show-top").removeClass( "show-top" );    
    }
  });

  var current_width = $(window).width();

  
    $(".dropdown-toggle").removeAttr('data-toggle');
  


  // menu sticky
  $(window).on("scroll", function () {
    if(current_width > 992){
      
      $(".navbar-collapse").addClass( "show" );

      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky" );
      }
      else {
        $("header").removeClass( "sticky" );     
      }
    }
    else{
      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky-mobile" );
      }
      else {
        $("header").removeClass( "sticky-mobile" );     
      }
    }
  });


  $( document ).ready(function() {
    if(current_width > 992){
        
      $(".navbar-collapse").addClass( "push-right" );
    }
    else{
      
      $(".navbar-collapse").removeClass( "push-right" );
    }
  });
  

  $(".list-toggle").click(function(event) {
    event.preventDefault();
    $(this).next("ul.inner").slideToggle();
    
  });


    // dropdown responsive
    if(current_width < 1100){
      $(".dropdown .icon").click(function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
  
        $(this).next().toggle();
        
      });
    }

//

    $("#slider").on("input change", (e)=>{
      const sliderPos = e.target.value;
      // Update the width of the foreground image
      $('.foreground-img').css('width', `${sliderPos}%`)
      // Update the position of the slider button
      $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
    });


  $("#home-testimonials").owlCarousel({
    dots: true,
    responsiveClass:true,
    loop: true,
    autoplay: true,
    smartSpeed: 300, 
    // navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });


 


})(jQuery); // End of use strict
