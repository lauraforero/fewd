$(document).ready(function(){

  $('#hamburgermenu').click(function(){
       $('#nav').toggle('slow');
  });

  $(window).resize(function(){
    if($(window).width() > 768) {
      $('#nav').show();
    } else {
      $('#nav').hide();
    }
  });

});
