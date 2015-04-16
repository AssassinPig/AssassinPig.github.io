$(document).ready(function(){

	$('.main_pic').mouseenter(function(){
		$('.zoom_pic').css('display', 'block');
		$('.scale_frame').css('display', 'block');
	});

	$('.main_pic').mouseleave(function(){
		$('.zoom_pic').css('display', 'none');
		$('.scale_frame').css('display', 'none');
	});

	$('.main_pic').mousemove(function(event) {
		if ( $('.zoom_pic').css('display') != 'block' ) {
			return;
		}
		
		var top = event.pageY - $(this).offset().top;
		var left = event.pageX - $(this).offset().left;

		var scale_frame = $('.scale_frame');

		scale_frame.css('top', top-$(this).width()-scale_frame.width()/2+'px');
		scale_frame.css('left', left-scale_frame.width()/2+'px');

		var zoom_pic_img = $('.zoom_pic img');
		var zoom_rate_y = 350/800;
		var zoom_rate_x = 350/800;

		var zoom_pic_top = parseInt(top*(1+zoom_rate_y));
		var zoom_pic_left = parseInt(left*(1+zoom_rate_x));

		zoom_pic_img.css('top', '-'+zoom_pic_top+'px');
		zoom_pic_img.css('left', '-'+zoom_pic_left+'px');
	});

	$('.pic_list li').mouseover(function(){
		$(this).siblings().removeClass('pic_list_hover');
		$(this).addClass('pic_list_hover');

        $('.main_pic img').attr('src', ('image/pic'+($(this).index()+1)+'.jpg'));
		$('.zoom_pic img').attr('src', 'image/zoom_pic'+($(this).index()+1)+'.jpg');
	});
});
