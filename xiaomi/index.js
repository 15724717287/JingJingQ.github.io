$(function(){
	// lunbo(".bannertu img",".bannerBox",".dot",[],2000,2,"rgba(255,255,255,0.3)",1,"rgba(0,0,0,0.4)",".zuojiant",".youjiant");
	lunbo(".bannertu img",".bannerBox",".dot",[],2000,2,"rgba(255,255,255,0.3)",1,"rgba(0,0,0,0.4)",".youjiant",".zuojiant");
	const lis = document.querySelectorAll(".nav_item");
	const div = document.querySelectorAll(".item_child");
	xuanxiangka(lis,div);

	const lis1 = document.querySelectorAll(".bannerNav_li");
	const div1 = document.querySelectorAll(".bannerNavLis");
	xuanxiangka(lis1,div1);

	const lis2 = document.querySelectorAll(".cart");
	const div2 = document.querySelectorAll(".gw_active");
	xuanxiangka(lis2,div2);



	const searchBox = document.querySelectorAll(".sousuoBox")[0];
	const xiala = document.querySelectorAll(".J_keywordList")[0];
	const hot_xinxi = document.querySelectorAll(".search-hot-words")[0];
	const inputs = document.querySelectorAll("input[type=text]")[0];
	const btn = document.querySelectorAll(".sousuoBtn")[0];

	inputs.onclick=function(){
		xiala.style.display="block";
		hot_xinxi.style.display="none";
		btn.style.borderColor="#ff6700";
	}
	inputs.onblur=function(){
		xiala.style.display="none";
		hot_xinxi.style.display="block";
		btn.style.borderColor="#e0e0e0";
	}

	duotu_lunbo(".box",".fanye",".fanye1",".neikuan",5);

	lrCarousel1(".win1 .xm-carousel-wrapper .item-lists .item-list1",".win1 .xm-carousel-wrapper",".win1 .zuobian",".win1 .youbian",".win1 .xm-pagers .pager","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");
	lrCarousel1(".win2 .xm-carousel-wrapper .item-lists .item-list1",".win2 .xm-carousel-wrapper",".win2 .zuobian",".win2 .youbian",".win2 .xm-pagers .pager","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");
	lrCarousel1(".win3 .xm-carousel-wrapper .item-lists .item-list1",".win3 .xm-carousel-wrapper",".win3 .zuobian",".win3 .youbian",".win3 .xm-pagers .pager","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");
	lrCarousel1(".win4 .xm-carousel-wrapper .item-lists .item-list1",".win4 .xm-carousel-wrapper",".win4 .zuobian",".win4 .youbian",".win4 .xm-pagers .pager","rgba(0,0,0,0.2)","rgba(66,66,66,0.2)");

})