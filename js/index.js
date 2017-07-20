$(function() {
	var Swiper1 = new Swiper(".swiper-container", {
		effect: 'fade',
		loop: "true",
		pagination: ".swiper-pagination", //分页
		paginationClickable: true, //分页可点
		prevButton: ".swiper-button-prev", //左
		nextButton: ".swiper-button-next", //右
		autoplay: 2500, //自动轮播
		autoplayDisableOnInteraction: false, //拖动之后继续轮播
		scrollbarSnapOnRelease: true, //如果设置为true，释放滚动条时slide自动贴合
		fade: {
			crossFade: true,
		}
	});

	$(".disi").mousemove(function() {
		$(".gouwudongxi").stop().slideDown();
	})
	$(".gouwudongxi").mousemove(function() {
		$(this).stop().slideDown();
	})
	$(".disi").mouseout(function() {
		$(".gouwudongxi").stop().slideUp();
	})
	$(".gouwudongxi").mouseout(function() {
		$(this).stop().slideUp();
	})

	$(".foot_center>ul>li").mousemove(function() {
		$(".shouji").eq($(this).index()).stop().slideDown();
	})
	$(".shouji").mousemove(function() {
		$(this).stop().slideDown();
	})
	$(".foot_center>ul>li").mouseout(function() {
		$(".shouji").eq($(this).index()).stop().slideUp();
	})
	$(".shouji").mouseout(function() {
		$(this).stop().slideUp();
	})
	
	$('#oUl li').mouseover(function(){
			$('#ol11 li').stop().animate({opacity:0,zIndex:0});
			$('#ol11 li').eq($(this).index()).stop().animate({opacity:1,zIndex:1});
		})
	$('.banner_left').mouseleave(function(){
			$('#ol11 li').stop().animate({opacity:0,zIndex:0});
		})
	
	
	
	var index = -5;
	$("#oUl_left").click(function(){
		index--;
		if(index==-10){
			index=-5;
			$(".xiaomidanpin_bottom ul").css("left","-642px")
		}
		$(".xiaomidanpin_bottom ul").stop().animate({"left":index*242+"px"},1000)
	})
	$("#oUl_right").click(function(){
		index++;
		if(index==1){
			index=-5;
			$(".xiaomidanpin_bottom ul").css("left","-856px")
		}
		$(".xiaomidanpin_bottom ul").stop().animate({"left":index*242+"px"},1000)
	})

})