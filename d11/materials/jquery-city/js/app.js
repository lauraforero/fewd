// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$('.thumb').click(function(event){
  
  var imageId = event.target.id;
  
  if (imageId == 'first'){
    $('#target-image').attr('src', 'img/1.jpg');
      
  } else if (imageId== 'second'){
    $('#target-image').attr('src', 'img/2.jpg');

  } else if (imageId == 'third'){
    $('#target-image').attr('src', 'img/3.jpg');

  } else {
    $('#target-image').attr('src', 'img/4.jpg');
  }

});

