$(document).ready(function(){

	$('.mainSlider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: false,
		arrows: true,
	});

	$('#fullpage').fullpage({
		anchors:['main', 'teach']
	});


});