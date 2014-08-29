$(document).ready(function(){
	$('select').selectbox();

	$('.view-grid .goods li .insert').hover(function(){
			$('.view-grid .goods li .insert').removeClass('hovered');
			$(this).addClass('hovered');
	});
	$('.view-grid .goods li .insert').mouseleave(function(){
		$(this).removeClass('hovered');
	});

	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
			});
			$('.plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
		});

	$('.insert').mouseleave(function(){
		$('div.dropdown:visible').hide();
	});

	$('.form-group .date').datepicker({
		language:'ru', autoclose: 'true', format: 'dd/mm/yyyy', orientation: 'left top'
	});
	$('.article-title').textfill({ maxFontPixels: 30 });
	$('.item-title').textfill({ maxFontPixels: 30 });

	$('input[data-input="mobile"]').inputmask("+7(999)999-99-99");

	$('.img-preview a').click(function(e){
		e.preventDefault();
		var activeImage = $(this).attr('href');
		$('.img-place img').attr('src', activeImage);
	});
});
