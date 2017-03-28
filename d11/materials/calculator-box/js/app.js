// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()
var value = 0;
var outText = $('#out').text();
// click events

$('.col-1-3').click(function(event){

  var elementClickedId = event.target.id;
  
  if(elementClickedId ==  'n10') {
   value-= 10;
  } else if(elementClickedId ==  'n20') {
    value-= 20;

  } else if(elementClickedId ==  'n30') {
    value-= 30;

  } else if(elementClickedId ==  'a10') {
    value+= 10;

  } else if(elementClickedId ==  'a20') {
    value+= 20;

  } else if(elementClickedId ==  'a30') {
    value+= 30;

  } else if(elementClickedId == 'blue') {
    $('#out').css('background-color', 'blue');

  } else if(elementClickedId == 'red') {
    $('#out').css('background-color', 'red');
   
  } else {
    $('#out').css('background-color' , 'white');
    value = 0;
  }
  
  $('#out').text(parseInt(outText)+value);

});

