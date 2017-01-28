
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
		anchors:['main', 'teach', 'about', 'reviews', 'contacts'],
		menu: '#navigation'
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

//MODAL BEGIN
	$('.modalFormButton').click(function(){
		$('.modalWindowWrapper').fadeIn('fast');
		$('.modalWindow').fadeIn('fast');
	});

	$('.modalWindowClose').click(function(){
		$('.modalWindowWrapper').fadeOut('fast');
		$('.modalWindow').fadeOut('fast');
	})
//MODAL END

	

	$('.secondTabs').each(function(){
			$(this).addClass('displayTabsNone');
			$(this).removeClass('tabs_active');
		});
	
	$('.teachContent').each(function(){
			$(this).addClass('displayTabsNone');
			$(this).removeClass('tabs_active');
		});	
	
	$('#parikmaherskoe').addClass('displayTabs');
	$('#ParikPerv').removeClass('displayTabsNone');
	$('#parikmaherskoe').removeClass('displayTabsNone');

	$('.teachContentZaglushka').css('display', 'none');

	$('.firstTabs_tab').click(function(){
		$('.firstTabs_tab').removeClass('tabs_active');
		$(this).addClass('tabs_active');

		$('.teachContentZaglushka').css('display', 'block');

		console.log($(this).attr('idOpen'));
		var attrOpenLink = $(this).attr('idOpen');

		$('.secondTabs').each(function(){
			$(this).addClass('displayTabsNone');
		});

		$('.teachContent').each(function(){
			$(this).addClass('displayTabsNone');
		});
		
		$('.secondTabs').each(function(){
			console.log($(this).attr('id'));
			if($(this).attr('id') == attrOpenLink) {
				$(this).removeClass('displayTabsNone');
				$(this).addClass('displayTabs');
			}
		});
	});

	$('.secondTabs_tab').click(function(){
		$('.secondTabs_tab').removeClass('tabs_active');
		$(this).addClass('tabs_active');

		var attrOpenLink = $(this).attr('idOpen');

		$('.teachContentZaglushka').css('display', 'none');

		$('.teachContent').each(function(){
			$(this).addClass('displayTabsNone');
		});

		$('.teachContent').each(function(){
			if($(this).attr('id') == attrOpenLink) {
				$(this).removeClass('displayTabsNone');
			}
		});

	});


});
