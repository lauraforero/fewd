

$("button").on("click", function(){
  
  var city = $("input").val();
  console.log(city);

  

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=london,uk&units=imperial&appid=2ace662e181792f06072837e47646755",function(data){
    console.log(data);
  });
  // $("span.temperature").text(main["temp"]);

});


