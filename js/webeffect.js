/**
 * Created by Administrator on 2015/4/13.
 */
!function($) {
    $(document).ready(function(){
        var color_array = [
            '#0057e7',
            '#d62d20',
            '#ffa700',
            '#008744'
        ];

        $('.elem_progress').each(function(index){
            //var status = 0;//0 -no 1-in 2-out
            $(this).attr('status', 0);
            $(this).css('background-color', color_array[index%4]);
        });

        var click_one;

        var _orgAjax = $.ajaxSettings.xhr;
        $.ajaxSettings.xhr = function () {
            var xhr = _orgAjax();
            xhr.onreadystatechange = function() {

                var readyState = xhr.readyState;
                //console.log(xhr.readyState);
                if (readyState == 1) {
                    var elem_progress = click_one.children('.elem_progress');
                    var width = 100;
                    elem_progress.animate(
                        { 'width': '+='+width+'px' },
                         400,
                         function(){}
                    );
                } else if (readyState == 2) {
                    var elem_progress = click_one.children('.elem_progress');
                    var width = 200;
                    elem_progress.animate(
                        { 'width': '+='+width+'px' },
                        200,
                        function(){}
                    );
                } else if (readyState == 3) {
                    var elem_progress = click_one.children('.elem_progress');
                    var width = 200;
                    elem_progress.animate(
                        { 'width': '+='+width+'px' },
                        200,
                        function(){}
                    );
                } else if (readyState == 4) {
                    var elem_progress = click_one.children('.elem_progress');
                    var width = 100;
                    elem_progress.animate(
                        { 'width': '+='+width+'px' },
                        100,
                        function(){
                            var url = click_one.children('.effect_elem').attr('href');
                            location.href = url;
                        }
                    );
                }
            }
            return xhr;
        };

        $("#effect_elem_list li").click(function() {
            click_one = $(this);
            var url = click_one.attr('href');
            $.ajax({
                url: url,
                error: function() {
                    console.log("error");
                }
            });
        });

        $("#effect_elem_list li").mouseenter( function() {
            var width = 196;

            $('.elem_progress').attr('status', 0);

            var elem_progress = $(this).children('.elem_progress');
            var status = elem_progress.attr('status');
            if(status == 1) {
                return;
            }

            elem_progress.attr('status', 1);
            elem_progress.show();
            elem_progress.animate(
                { 'width': '+='+width+'px' },
                680,
                function(){
                    //console.log('in');
                    if (elem_progress.attr('status') == 1) {
                        $(this).clearQueue();
                        $(this).stop();
                    }
                });
        });

        $('#effect_elem_list li').mouseleave(function(){
            var width = 196;
            var elem_progress = $(this).children('.elem_progress');
            var status = elem_progress.attr('status');

            if(status == 2) {
                return;
            }

            elem_progress.attr('status', 2);
            elem_progress.animate(
                { 'width': '-='+width+'px' },
                680,
                function(){
                    if (elem_progress.attr('status') == 0) {
                        $(this).clearQueue();
                        $(this).stop();
                    }
                });
        });
    });
}(jQuery);