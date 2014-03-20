// JavaScript Document

$(document).ready(function() {

$(window).load(function() {
		movementIn();
});

var movementIn = function() {
    $("#box").fadeIn(200, function () {
    movement1();
   });	
}

var movement1 = function() {
    $("#icon").fadeIn(200, function () {
            movement2();
   });  
}

var movement2 = function() {
    $("#icon2").fadeIn(200, function () {
            movement3();
   });  
}

var movement3 = function() {
    $("#icon3").fadeIn(200, function () {
            movement4();
   });  
}

var movement4 = function() {
    $("#icon4").fadeIn(200, function () {
      movement5();
   });  
}

var movement5 = function() {
    $('.page-links').fadeIn(400);  	
}

$(".pwcheck").keyup(function (event) {
  keycode = event.which
	var val = $('.pwcheck').val()
	if (val == 'pwyo' || keycode == 13) {
    $('.thanks').fadeIn(200).delay(1000,function(){
      change();
      });
		}						  
});			   
	   

});

function change(){
 window.location = '/giving-you-access/index.html';
}

