!function($){
	$(document).ready(function(){

		$('#tab_pages_short ul li').mouseover(function(){
			var headers = $('#tab_pages_short ul li');
			var index = headers.index($(this));

			$(this).siblings().removeClass('tab_pages_col_li_hover')
			$(this).addClass('tab_pages_col_li_hover');

			$(this).siblings().css('background-color', '#f7f7f7')
			$(this).css('background-color', 'white');

			var panels = $('.tab_pages_panel');
			panels.css('display', 'none');
			panels.eq(index).css('display', 'block');

		});

		
		$('#tab_pages_long ul li').mouseover(function(){
			var headers = $('#tab_pages_long ul li');
			var index = headers.index($(this));

			$(this).siblings().removeClass('tab_pages_col_li_hover')
			$(this).addClass('tab_pages_col_li_hover');

			$(this).siblings().css('background-color', '#f7f7f7')
			$(this).css('background-color', 'white');

			var long_panels = $('.tab_pages_panel_long');
			long_panels.css('display', 'none');
			long_panels.eq(index).css('display', 'block');
		});

		$('.tab_pages_col_horizontal ul li').mouseover(function(){
			var headers = $('.tab_pages_col_horizontal ul li');
			var index = headers.index($(this));

			$(this).siblings().css('border-top', 'solid 2px #e9e9e9')
			$(this).css('border-top', 'solid 3px #c00');

			$(this).siblings().css('background-color', '#f7f7f7')
			$(this).css('background-color', 'white');

			var long_panels = $('.tab_pages_horizontal_panel');
			long_panels.css('display', 'none');
			long_panels.eq(index).css('display', 'block');
		});

		

	});
}(jQuery);