!function($) {
	$(document).ready(function(){
		var now_index = 0;

		$('.gallery_main_pic').append('<img src=\'gallery/item0-medium.jpg\'></img>');

		for(var i=0; i<12; ++i)
			$('.gallery_pic_bar').append('<li> <img src=\'gallery/item'+i+'-small.jpg\'></img> </li>');


		$('.gallery_main_pic').click(function(){
			$('.popup_dlg').css('display', 'block');
			$('.popup_dlg_content').css('display', 'block');

			$('.popup_dlg_content .popup_dlg_content_wraper img').remove();
			$('.popup_dlg_content .popup_dlg_content_wraper').append('<img src=\'gallery/item'+now_index+'-big.jpg\'></img>');
		});

		$('.popup_dlg_content').click(function(){
			$('.popup_dlg_close').click();
		});

		$('.popup_dlg_close').click(function(){
			$('.popup_dlg').css('display', 'none');
			$('.popup_dlg_content').css('display', 'none');
		});

		$('.gallery_pic_bar li').mouseover(function(){
			var siblings = $('.gallery_pic_bar li');
			var index = siblings.index($(this));
			$('.gallery_main_pic img').attr('src', 'gallery/item'+index+'-medium.jpg');
			now_index = index;
		});

		$('.gallery_pic_bar li').click(function(){
			//console.log('click');
			$('.gallery_main_pic').click();
		});

	});
}(jQuery);