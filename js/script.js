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

	$('.menuLink').click(function(){
		var link = $(this).attr('href');
		$('ul a').each(function(){
			$(this).removeClass('activeLink');
			if($(this).attr('href') == link){
				$(this).addClass('activeLink');
			}
		});

	});

});