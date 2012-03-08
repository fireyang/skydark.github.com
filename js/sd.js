$(document).ready(function(){
	$('.js-toggle-next').click(function(){
		$(this).next().toggle();
	}) ;
	$('.js-toggle-next').next().hide();
});
