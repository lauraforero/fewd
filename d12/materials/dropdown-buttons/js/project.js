console.log('loaded')

$('#thefile').focus(function(){
  console.log('hey')
  $('.dropdown-content').show();
});
  // console.log('focus handler ran')
  // $('.dropdown-content').show();
$('.Dropdown').focusout(function(){
  $('.dropdown-content').css('display', 'none')
})