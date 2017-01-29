
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
		menu: '#navigation',
		onLeave: function(){
			var link = $(this).attr('href');
			$('ul a').each(function(){
				$(this).removeClass('activeLink');
				if($(this).attr('href') == link){
					$(this).addClass('activeLink');
				}
			});
        }
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

		$('.modalWindowTogglerButton').each(function(){
			$(this).removeClass('modalWindowTogglerButtonActive');
		})

		var attr =  $(this).attr('idModal');
		if(attr == 'courses') {
			$('.modalWindowTogglerCourses').addClass('modalWindowTogglerButtonActive');
		} else if(attr == 'model') {
			$('.modalWindowTogglerModel').addClass('modalWindowTogglerButtonActive');
		}

	});

	$('.modalWindowTogglerButton').click(function(){
		$('.modalWindowTogglerButton').each(function(){
			$(this).removeClass('modalWindowTogglerButtonActive');
		})
		$(this).addClass('modalWindowTogglerButtonActive');
	});

	$('.modalWindowClose').click(function(){
		$('.modalWindowWrapper').fadeOut('fast');
		$('.modalWindow').fadeOut('fast');
	})

	$('.buttonContactModal').click(function(){

		var name = $('.mailName').val();
		var surname = $('.mailSurname').val();
		var phone = $('.mailPhone').val();
		var post = $('.mailPost').val();
		var status = $('.modalWindowTogglerButtonActive').attr('mailText');

		errors = [];

		if(!name) errors.push('Не указано имя !');
		if(!surname) errors.push('Не указана фамилия !');
		if(!phone) errors.push('Не указан телефон !');
		if(!post) errors.push('Не указана электронная почта !');
		if(!status) errors.push('Не указана желаемая роль (модель, обучение) !');

		if(errors.length > 0) {
			errors.forEach(function(item, i, arr) {
			  alert( item );
			});
			return;
		}

		$.post("mail.php", { 
			name: name, 
			surname: surname,
			phone: phone,
			post: post,
			status: status
		})
		.done(function(data) {
		  alert(data);
		});

		$('input').val('');
		return;

	});
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

	if($(window).width() <= 980) {
		$('.section').addClass('fp-auto-height-responsive');
	}


});
