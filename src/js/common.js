$(function(){
	setInterval(function(){
		// var date = new Date(2017,03,1,00,00,00),
		// 		today = new Date(),
		var	left = new Date(2017,03,28,23,59,59) - new Date();
		var month = new Date().getMonth();

		function daysInMonth (month) {
			switch(month){
				case 1:
				if (new Date().getYear()%4 == 0) {return 29;}
				else {return 28;}
				break;

				case 0:
				case 2:
				case 3:
				case 4:
				case 6:
				case 7:
				case 9:
				case 11:
				return 31;
				break;

				case 5:
				case 8:
				case 10:
				return 30;
				break;
			}
		}
		var s = parseInt(left/1000)%60,
		m = parseInt(left/(1000*60))%60,
		h = parseInt(left/(1000*60*60))%24; 
		d = parseInt(left/(1000*60*60*24))%daysInMonth(month);
		
		// if (d < 10){ d += 10;}

		// 	switch(d){
		// 		case 1:
		// 		case 2:
		// 		case 3:
		// 		case 4: d = d - 10 + " дня";
		// 			break;
		// 		case 0: d = d - 10 + " дней";
		// 		case 5:
		// 		case 6:
		// 		case 7:
		// 		case 8:
		// 		case 9:
		// 		case 10:
		// 			break;
		// 		default: d -= 10;
		// 			break;
		// 	}
		
		
		$('#days').text( d + 'д ');
		$('#hours').text( (h < 10 ? '0' + h : h) + " :" );
		$('#minutes').text( (m < 10 ? '0' + m : m) + " :" );
		$('#seconds').text( s < 10 ? '0' + s : s );

	}, 1000);

	if ($(window).width() < 769) {
		$('.toggle-menu').on('click', function(){
			$(this).toggleClass('is-active');
			$('#toggle-menu').toggleClass('open');
		});
	}
	$('#get-header-popup').on('click', function(){
		var popup = $('#get-header-popup+div.contacts__call-me__popup');
		if (popup.hasClass('open')){
			popup.removeClass('open');
		}
		else
			popup.addClass('open');
	});
	$('#get-footer-popup').on('click', function(){
		var popup = $('#get-footer-popup+div.contacts__call-me__popup');
		if (popup.hasClass('open')){
			popup.removeClass('open');
		}
		else
			popup.addClass('open');
	});

	var overlay = $('.overlay');
	var modal = $('.l--first-screen__modal-form');
	$('.l--price button.cta').on('click', function(){
		overlay.fadeIn();
		modal.fadeIn(300);
	});
	
	overlay.on('click', function(){
		if (event.target == event.currentTarget) {
			modal.fadeOut();
			overlay.fadeOut(300);
		}
	});

	// var mailPopup = $('.mail-popup');
	// mailPopup.find('header > i').on('click', function(){
	// 	mailPopup.fadeOut(300);
	// 	overlay.fadeOut(300);
	// });

	// function sendMail(data){
	// 	var form_data = data;
	// 	$.ajax({
	// 		type: "POST",
	// 		url: '../mailer.php',
	// 		data: form_data
	// 		// success: function(data){
	// 		// 	console.log('AJAX success: .... ')
	// 		// 	overlay.fadeIn();
	// 		// 	mailPopup.fadeIn(300);
	// 		// 	mailPopup.find('.success').fadeIn(300);
	// 		// },
	// 		// error: function(){
	// 		// 	console.log('AJAX error: .... ')
	// 		// 	overlay.fadeIn();
	// 		// 	mailPopup.fadeIn(300);
	// 		// 	mailPopup.find('.error').fadeIn(300);
	// 		// }
	// 	});
	// }
	// $('form input [name="name"]').on('input', validate( $(this) ));
	// $('form input [name="email"]').on('input', validate( $(this) ));
	// $('form input [name="quantity"]').on('input', validate( $(this) ));

	// $('#modal-form').submit(function( event ){
	// 	if ($("#input-name").val() !='' && $("#input-email").val() !='' && $("#input-quantity").val() !='' ){
	// 		sendMail(data);
	// 		event.preventDefault();
	// 		overlay.fadeIn();
	// 		mailPopup.fadeIn();
	// 		mailPopup.find('.success').fadeIn();
	// 		alert("Спасибо за заказ!");
	// 	}
	// 	else{
	// 		overlay.fadeIn();
	// 		mailPopup.fadeIn();
	// 		mailPopup.find('.error').fadeIn();
	// 		event.preventDefault();
	// 	}
	// });

});

// function validate(elem){
// 	var inpName = elem.val();
// 	var inpEmail = elem.val();
// 	var inpQuant = elem.val();

// 	console.log(inpName + "\n" + inpEmail + "\n" + inpQuant);
// }