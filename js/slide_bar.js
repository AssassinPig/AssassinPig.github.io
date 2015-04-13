/**
 * Created by Administrator on 2015/4/1.
 */
!function($) {
    $(document).ready(function(){

        $('.prev').click(function(){
            $('#photo_ul').animate( {
                    left: '-=640px'
                },
                500,
                function() {
                    console.log('complete');
                }
            );
            console.log('prev');
        });

        $('.next').click(function(){
            $('#photo_ul').animate( {
                    left: '+=640px'
                },
                500,
                function() {
                    console.log('complete');
                }
            );
            console.log('next');
        });

        var now_pic = 0;

        $("#number_ul li").click(function(){
            var to = $(this).html();

            var delta = (to-1) - now_pic;
            var left_operation = '';

            console.log(to-1);
            console.log(delta);
            console.log(now_pic);

            if( delta < 0) {
                left_operation = '+='+ ( -delta * 640) + 'px';
            }
            if (delta > 0) {
                left_operation = '-='+ ( delta * 640) + 'px';
            }

            console.log(left_operation);
            if (left_operation == '')
                return;

            now_pic = to-1;
            $('#photo_ul').animate( {
                    left: left_operation
                },
                500,
                function() {

                }
            );

        });

    });
}(jQuery);
