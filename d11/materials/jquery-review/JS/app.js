console.log('script loaded')


$("div").css("background-color", "blue");


$("div").text("Hello").css("color", "white");

$("div#one").on("click", function(){
  $("div#one").toggleClass("bigger");
})

$("div#two").on("click", function(){
  $("div#two").toggleClass("bigger");
})


