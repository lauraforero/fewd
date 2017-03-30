console.log('loaded')

$('#thefile').focus(function(){
  $('#mydropdown').show();
});

$('.Dropdown').focusout(function(){
  $('.dropdown-content').css('display', 'none')
});


$('#edit').focus(function(){
  $('#otherDropdown').show();

});

$('#edit').focusout(function(){
  $('#otherDropdown').css('display', 'none');

});
