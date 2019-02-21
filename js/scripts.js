var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
$(document).ready(function() {
  //display form//
  $("p#addstart").click(function(){
    $("form#add").slideToggle();
  });
  $("p#subtractstart").click(function(){
    $("form#subtract").slideToggle();
  });
  $("p#multiplystart").click(function(){
    $("form#multiplication").slideToggle();
  });
  $("p#dividestart").click(function(){
    $("form#division").slideToggle();
  });
  //addition//
$("form#add").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
var answ1=number1 + number2;
$("#answer1").text(answ1);
});
//subtract//
$("form#subtract").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#subtract1").val());
var number2 = parseInt($("#subtract2").val());
var answ2=number1 - number2;
$("#answer2").text(answ2);
});
//division//
$("form#division").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#divide1").val());
var number2 = parseInt($("#divide2").val());
var answ3=number1 / number2;
$("#answer3").text(answ3);
});
//multiply//
$("form#multiplication").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#multiply1").val());
var number2 = parseInt($("#multiply2").val());
var answ4=number1 * number2;
$("#answer4").text(answ4);
});
});
