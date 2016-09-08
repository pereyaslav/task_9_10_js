$(document).ready(function () {
	$(".openout").hover(function () {
		$(this).children(".sub-menu").slideDown(400);
		$(this).children(".sub-menu").animate({
			backgroundColor: '#704ca2'
		}, 400);
	}, function () {
		$(this).children(".sub-menu").slideUp(400);
		$(this).children(".sub-menu").animate({
			backgroundColor: '#3a2854'
		}, 400);
	});
});