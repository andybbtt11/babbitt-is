$(document).ready(function() {
 
// Clear everything on logo click
$('.logo').click(function(e){
	e.preventDefault();
	$('#hcc div:visible')
		.stop(true,true)
		.fadeOut(450);		

	$('#logo-container a:not(".logo")')
		.stop(true,true)
		.removeClass('bgpos')
		.animate({opacity:.3},100);	

	$('#fader')
		.stop(true,true)
		.fadeOut(450);	

	$('.tothetop a').click();	
});
	
// Icon states
$('#logo-container a:not(".logo")').click(function(e){	
	e.preventDefault();

	$('#logo-container a:not(".logo")')
		.stop(true,true)
		.removeClass('bgpos')
		.animate({opacity:.3},100);	

	$(this).addClass('bgpos')
		.stop(true,true)
		.animate({opacity:1},200);
});

//Tooltip Hovers

$('#logo-container a').hover(function() { 
	$('.tooltip', this)
		.stop(true,true)
		.show()
		.animate({marginTop:36, opacity:1},150);
	},

	function () {
	$('.tooltip', this)
		.stop(true,true)
		.animate({marginTop:24, opacity:0},150)
		.fadeOut(150);
});

 
//Click Function for scollTo

$('.click').click( function(e){
	e.preventDefault();
	var pos = $(this).attr('data').toString();
	var go = '#' + pos;
	console.log(go);
	$(/chrome|safari/i.test(window.navigator.userAgent) ? 'body' : 'html')
		.stop(true,true)
		.animate( { scrollTop: $('#' + pos).offset().top }, 500 );
	//window.location = "#" + pos;	

	//$('.click').removeClass('active');

	//$(this).addClass('active');
});

$(window).scroll(function(){
	$('.tm a').each(function(){
		var position = $(this).data('pos'),
			scroll = $(window).scrollTop(),
			scrollRangeDiff = scroll - 40,
			scrollRangeSum = scroll + 40;	

		if ( position > scrollRangeDiff && position < scrollRangeSum ){
			$('.tm a').removeClass('active');
			$(this).addClass('active');
		}
	});
});

// Lightboxes

$('.icon.resume').on('click', function(){
	$('.lightbox.about-lb').lightbox_me({});
});

$('.icon.social').on('click', function(){
	$('.lightbox.social-lb').lightbox_me({});
});

$('.icon.contact').on('click', function(){
	$('.lightbox.contact-lb').lightbox_me({});
});

});

