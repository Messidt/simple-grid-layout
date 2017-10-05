$(function() {
    $("body").fadeIn(500);
    
    $(".rslides").responsiveSlides();
    
    $('a#column-view').on('click', function(e){
        e.preventDefault();
        $('article ul').addClass('grid');
    })
    $('a#list-view').on('click', function(e){
        e.preventDefault();
        $('article ul').removeClass('grid');
    });
    
    $('#burger-nav i').on('click', function(){
       $('nav ul').toggleClass('open'); 
    });
    
  });