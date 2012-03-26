$(document).ready(function(){
	$('.js-toggle-next').click(function(){
		$(this).next().toggle();
	}) ;
	$('.js-toggle-next').filter('.dropdown').append($('<b class="caret"></b>'));
	$('.js-toggle-next').next().hide();
	$('#article_indent a').each(function(){
		var href = $(this).attr('href');
		if (href) {
		if(href.indexOf('#') == 0 || href.indexOf('/') == 0){
		}else{
			$(this).attr('target','_blank');
			$(this).addClass('external');
		}
		}
	});
});
