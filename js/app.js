$(document).ready(function() {
	$('#main_slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000
	});

	$('#openPanel').click(function(event) {
		$(this).toggleClass('show');
		$('.panel_content').toggleClass('active');
	});

	$('#modal_triger').click(function(event) {
		$('#modal').addClass('active');
	});

	$('.modal__close, .modal__background').click(function(event) {
		$('#modal').removeClass('active');
	});

	$('#mobmenu_toggle').click(function(event) {
		$(this).toggleClass('open');
		$('.mobmenu__content').toggleClass('show');
	});

	if ($(window).width() < 741) {
		$('.footer--right').append( $('.footer--left--bottom .footer__contacts') );
	}

	$('.has_submenu').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('opened');
		$(this).find('.submenu').toggleClass('active');
	});
});