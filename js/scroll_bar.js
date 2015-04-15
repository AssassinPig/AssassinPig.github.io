/*
	author: assassinpig 2015/4/15
*/

var scrollbar = function(elem, args) {
	this.config = $.extend({
		"wraper": '.scroll_bar', // 父级容器
        "prev"	: '.scroll_bar_prev',      // 上一个
        "next"	: '.scroll_bar_next',      // 下一个
        "iCenter"	: 3,          // 中间图片的索引
        "interval"	: 1000,      // 自动切换的间隔时间
        "auto"		: true,       // 是否自动切换 默认自动切换
        "options": [
            {"width": 230, "height": 267, "top": 71, "left": 0, "zIndex": 1},
            {"width": 240, "height": 287, "top": 61, "left": 85, "zIndex": 2},
            {"width": 243, "height": 327, "top": 37, "left": 207, "zIndex": 3},
            {"width": 297, "height": 397, "top": 0, "left": 330, "zIndex": 4},
            {"width": 243, "height": 327, "top": 37, "left": 508, "zIndex": 3},
            {"width": 240, "height": 287, "top": 61, "left": 631, "zIndex": 2},
            {"width": 230, "height": 267, "top": 71, "left": 730, "zIndex": 1}
        ],  // 显示的内容定位配置
        "callback": null   // 回调方法
	}, args || {});

	this.elem = elem;
	this.init();
}

scrollbar.prototype.init = function() {
	this.wraper = $(this.config.wraper);// 父级对象
    this.oUl = this.wraper.find('ul');  // 切换内容容器对象
    this.aLi = this.oUl.find('li');  	// 切换的内容对象
    this.prev = $(this.config.prev); 	// 上一个
    this.next = $(this.config.next); 	// 下一个
    this.timer = null;  			// 定时器
    this.aSort = [];				// 数组容器
    this.iCenter = this.config.iCenter;   // 显示中间一个
    this.options = this.config.options;   // 获取定位层配置
    for (var i = 0; i < this.aLi.length; i++) {
        this.aSort[i] = this.aLi[i];      // 存储数组
    }
    //this.aSort.unshift(this.aSort.pop());  // 记录点
    this.run();  						     // 运行第一次
    var self = this;
    this.prev.on('click', $.proxy(self.doPrev, this)); // 绑定事件
    this.next.on('click', $.proxy(self.doNext, this));  // 绑定事件
    this.doImgClick();  // 绑定图片事件
    
    if (this.config.auto) {  // 是否自动运行
        this.timer = setInterval($.proxy(function () {
            self.doNext();
        }, this), this.config.interval); // 第一次自动运行
    }
    
}

scrollbar.prototype.doPrev = function () {
    this.aSort.unshift(this.aSort.pop()); 	// 记录
    this.run();
}

scrollbar.prototype.doNext = function () {
    this.aSort.push(this.aSort.shift()); 	// 记录
    this.run();
}

scrollbar.prototype.doImgClick = function () {
    var _this = this;
    $.each(this.aSort, function () {
        var $this = $(this);
        $this.on('click', function () {
            if ($(this).data('index') > _this.iCenter) {
                for (var i = 0; i < $(this).data('index') - _this.iCenter; i ++) {
                    _this.aSort.push(_this.aSort.shift());
                }
                _this.run();
            } else if ($(this).data('index') < _this.iCenter) {
                for (var i = 0; i < _this.iCenter - $(this).data('index'); i ++) {
                    _this.aSort.unshift(_this.aSort.pop());
                }
                _this.run();
            }
        });
    });
}

scrollbar.prototype.run = function() {
	    var _this = this;
        $.each(this.aSort, function (i) {
            var $this = $(this);
            $this.data('index', i); // 给每一个li一个标识
            if (i < 7) {  // 前7个添加预置的样式
                $this.show().addClass('sel').stop().animate(_this.options[i], {
                    "duration": 300,
                    "queue": false,
                    "complete": function () {
                        $(_this.aSort[_this.iCenter]).find('img').css({'opacity': 1}); // 图片高亮
                        // 是否有回调函数
                        if (typeof _this.config.callback === 'function') {
                            _this.config.callback.call(this);
                        }
                    }
                });
            } else {
                $this.css({
                    "display": 'none',
                    "width": 0,
                    "height": 0,
                    "top": 37,
                    "left": _this.oUl.offsetWidth / 2
                }); // 超过7个后面的都隐藏
            }
            if (i < _this.iCenter || i > _this.iCenter) {
                // 判断非中间的li 就执行下面的操作
                $this.removeClass('sel').find('img').css({'opacity': 0.3}); // 图片渐变0.3
                $this.on({
                    "mouseenter": function () {
                        $(this).find('img').stop().animate({'opacity': 1}, 300); // 悬停在图片上的时候 高亮
                    },
                    "mouseleave": function () {
                        $(this).find('img').stop().animate({'opacity': 0.35}, 300); // 离开后变暗
                    }
                });
            } else {
                $this.off('mouseenter').off('mouseleave'); // 中间的去掉绑定的事件
            }
        });
}


$.fn.scrollbar = function(args) {
	return this.each(function () {
        var $el = $(this),
        plugins = new scrollbar($el, args);
        $el.data('scrollbar', plugins);
    });
}

!function($){
	$(document).ready(function(){
		$('.scroll_bar').scrollbar({
			"options": [
                   {"width": 230, "height": 267, "top": 71, "left": 0, "zIndex": 1},
                   {"width": 240, "height": 287, "top": 61, "left": 85, "zIndex": 2},
                   {"width": 243, "height": 327, "top": 37, "left": 207, "zIndex": 3},
                   {"width": 297, "height": 397, "top": 0, "left": 330, "zIndex": 4},
                   {"width": 243, "height": 327, "top": 37, "left": 508, "zIndex": 3},
                   {"width": 240, "height": 287, "top": 61, "left": 631, "zIndex": 2},
                   {"width": 230, "height": 267, "top": 71, "left": 730, "zIndex": 1}
               ],
               "callback": function () {
                   //$('#J-textMod li').eq($('#J-scrollBar .sel').index()).show().siblings().hide();
                   //console.log('callback');
               }
		});
	});
}(jQuery);