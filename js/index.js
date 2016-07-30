$(function(){

	$('.header .hezi .nav .sousuo.xiao').on('click',function(){
		$('.header .hezi .kuang').animate({
			opacity:1,
			zIndex:20,
		});
		$('.close').toggleClass('show');
		$('.zhezhao').toggleClass('sousuo');
		$('.header .hezi .nav').toggleClass('searching');
		$('.header .hezi .kuang .kuang-zhong .kuang-shang').toggleClass('searching');
		$('.header .hezi .kuang .kuang-zhong .kuang-xia').toggleClass('show');
		
	});

	$('.close').on('click',function(){
		$('.header .hezi .kuang').animate({
			opacity:0,
			zIndex:0,
		});
		$('.close').removeClass('show');
		$('.zhezhao').removeClass('sousuo');
		$('.header .hezi .nav').removeClass('searching');
		$('.header .hezi .kuang .kuang-zhong .kuang-shang').removeClass('searching');
		$('.header .hezi .kuang .kuang-zhong .kuang-xia').removeClass('show');
		
	});

	$('.header .hezi .nav-ons .mac').on('click',function(){
		$(this).toggleClass('active');
		$('.header .hezi .nav').toggleClass('xiala');
		$('.header .hezi .nav-ons .bag').toggleClass('zou');
		$('.header .hezi .nav li').toggleClass('chulai');
		$('.banner').toggleClass('yincang');
		$('.tu4').toggleClass('yincang');
		$('.footer').toggleClass('yincang');

	});


	var h3 =  $('.footer .box ul li dl dt h3');
	var after =  $('::after');
	console.log(after)
	console.log(h3)
	// console.log(dt);
	h3.on('click',function(){
		$()
		// console.log(1);
		// $(this).parent().find('dd').toggleClass('show');
		$(this).parent().nextAll().toggleClass('show');
									// ;
		after.css(
			"transform","rotateZ(45+deg)"
		)
/*		.animate({
			transform:rotateZ(45+'deg')
		});
*/	});


})

/*$(function(){
	var flag=false;
	var items=$('.banner .lunbo li');
	var yuan=$('.banner .ul2 li');
	var zuo=$(".banner .an-left");
	var you=$(".banner .an-right");
	lunbo=function(next,fangxiang){
		flag=true;
		var active=$(".banner.lunbo .active");
		fangxiang=fangxiang?fangxiang:'left';

		active
		.addClass(fangxiang)
		.delay(600)
		.queue(function(){
			flag=false;
			$(this)
			.removeClass('active')
			.removeClass(fangxiang)
			.dequeue();
		});

		yuan.removeClass('active');
		var  fanxiang= (fangxiang === 'left')?'right':'left';
		$(next)
		.addClass(fanxiang);
		$(next).get(0).offsetWidth;
		$(next)
		.removeClass(fanxiang);
		$(next)
		.addClass('active');

		yuan.eq(items.index($(next))).addClass('active');

	}

	yuan.on('click',function(){
		if($(this).index() > items.index($('.banner .lunbo .active'))){
			var fangxiang = 'left';
		}else{
			var fangxiang = 'right';
		}
		yuan.removeClass('active');
		yuan.eq($(this).index()).addClass('active');
		var next = items.eq($(this).index());
		lunbo(next,fangxiang);
	});

	you.on('click',function(){
		if(flag){
			return;
		}
		if($('.banner .lunbo .active').next().length == 0){
			var next = items.eq(0);
		}else{
			var next = $('.banner.lunbo .active').next();
		}
		lunbo(next,'left');
	});
	zuo.on('click',function(){
		if(flag){
			return;
		}
		if($('.banner .lunbo .active').prev().length == 0){
			var next = items.eq(-1);
		}else{
			var next = $('.banner .lunbo .active').prev();
		}
		lunbo(next,'right');
	});

	var t = setInterval(function(){
		you.trigger('click');
	},2000);
})*/

$(function(){
	var flag=false;
	var items=$('.banner .box li');
	var yuan=$('.banner .box2 li');
	var zuo=$(".banner .zuo");
	var you=$(".banner .you");
	lunbo=function(next,fangxiang){
		flag=true;
		var active=$(".box .active");
		fangxiang=fangxiang?fangxiang:'left';

		active
		.addClass(fangxiang)
		.delay(600)
		.queue(function(){
			flag=false;
			$(this)
			.removeClass('active')
			.removeClass(fangxiang)
			.dequeue();
		});

		yuan.removeClass('active');
		var  fanxiang= (fangxiang === 'left')?'right':'left';
		$(next)
		.addClass(fanxiang);
		$(next).get(0).offsetWidth;
		$(next)
		.removeClass(fanxiang);
		$(next)
		.addClass('active');

		yuan.eq(items.index($(next))).addClass('active');

	}

	yuan.on('click',function(){
		if($(this).index() > items.index($('.banner .box .active'))){
			var fangxiang = 'left';
		}else{
			var fangxiang = 'right';
		}
		yuan.removeClass('active');
		yuan.eq($(this).index()).addClass('active');
		var next = items.eq($(this).index());
		lunbo(next,fangxiang);
	});

	you.on('click',function(){
		if(flag){
			return;
		}
		if($('.box .active').next().length == 0){
			var next = items.eq(0);
		}else{
			var next = $('.box .active').next();
		}
		lunbo(next,'left');
	});
	zuo.on('click',function(){
		if(flag){
			return;
		}
		if($('.box .active').prev().length == 0){
			var next = items.eq(-1);
		}else{
			var next = $('.box .active').prev();
		}
		lunbo(next,'right');
	});
	var t = setInterval(function(){
		you.trigger('click');
	},2000);

	$('.banner').on('mouseover',function(){
		zuo.addClass('yiru');
		you.addClass('yiru');
		clearInterval(t);
	})
	$('.banner').on('mouseout',function(){
		zuo.removeClass('yiru');
		you.removeClass('yiru');
		t = setInterval(function(){
			you.trigger('click');
		},2000);
	})
})
