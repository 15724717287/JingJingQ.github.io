$(function(){
	// banner选项卡
	const btn=$(".fenlei_list dl");
	const btn1=$(".fenlei_list dt");
	const con=$(".list_con");
	xuanxiangka(btn,con,btn1);
	// 购物车
	const btn2=$(".top_cart");
	const con1=$(".J-ShopCart");
	xuanxiangka1(btn2,con1);

	// 搜索框
	const box=$(".searchBox input")[0];
	box.onclick=function(){
		box.value="";
	}
	box.onblur=function(){
		box.value="大家正在搜：夏日防晒";
	}

	// banner图
	lunbo(".tab_pannels",".pannels",".lunbodian ul li",[],2000,1,"#e5004f",0,"#211616",".rightBtn",".leftBtn")

	// 超值特卖选项卡
	const lis1=$(".brand_list");
	const divs1=$(".con_list");

	divs1[0].style.display="block";
	lis1[0].children[0].style.fontWeight="bold";
	lis1[0].children[0].style.color="#000";
	lis1[0].style.borderBottomColor="#e5004f";
	lis1[0].children[1].style.display="block";
	
	for(let i=0;i<lis1.length;i++){
		lis1[i].id=i;
		lis1[i].onmouseover=function(){
			for(let j=0;j<lis1.length;j++){
				divs1[j].style.display="none";
				lis1[j].children[0].style.fontWeight="normal";
				lis1[j].children[0].style.color="#000";
				lis1[j].style.borderBottomColor="#333";
				lis1[j].children[1].style.display="none";
			}
			divs1[this.id].style.display="block";
			lis1[i].children[0].style.fontWeight="bold";
			lis1[i].children[0].style.color="#000";
			lis1[i].style.borderBottomColor="#e5004f";
			lis1[i].children[1].style.display="block";

		}

	}

	// 热门品牌选项卡
	const lis2=$(".con_title ul li");
	const divs2=$(".con_contentlist");

	divs2[0].style.display="block";
	lis2[0].children[0].style.fontWeight="bold";
	lis2[0].children[0].style.color="#000";
	lis2[0].style.borderBottomColor="#e5004f";
	lis2[0].children[1].style.display="block";
	
	for(let i=0;i<lis2.length;i++){
		lis2[i].id=i;
		lis2[i].onmouseover=function(){
			for(let j=0;j<lis2.length;j++){
				divs2[j].style.display="none";
				lis2[j].children[0].style.fontWeight="normal";
				lis2[j].children[0].style.color="#000";
				lis2[j].style.borderBottomColor="#333";
				lis2[j].children[1].style.display="none";
			}
			divs2[this.id].style.display="block";
			lis2[i].children[0].style.fontWeight="bold";
			lis2[i].children[0].style.color="#000";
			lis2[i].style.borderBottomColor="#e5004f";
			lis2[i].children[1].style.display="block";

		}

	}

	// 时尚名品多图轮播
	duotu_lunbo(".scroller_con1",".rightBtn11",".leftBtn11",".scroller_tu1",6);
	duotu_lunbo(".scroller_con2",".rightBtn12",".leftBtn12",".scroller_tu2",6);
	duotu_lunbo(".scroller_con3",".rightBtn13",".leftBtn13",".scroller_tu3",6);
	duotu_lunbo(".scroller_con4",".rightBtn14",".leftBtn14",".scroller_tu4",6);
	duotu_lunbo(".scroller_con5",".rightBtn15",".leftBtn15",".scroller_tu5",6);
	duotu_lunbo(".scroller_con6",".rightBtn16",".leftBtn16",".scroller_tu6",6);
	duotu_lunbo(".scroller_con7",".rightBtn17",".leftBtn17",".scroller_tu7",6);
	duotu_lunbo(".scroller_con8",".rightBtn18",".leftBtn18",".scroller_tu8",6);
	duotu_lunbo(".scroller_con9",".rightBtn19",".leftBtn19",".scroller_tu9",6);


	// 时尚名品左右轮播
	lrCarousel1(".floor_bannerimg1 a",".floor_bannertu1",".rightBtn21",".leftBtn21",".floor_bannertu1 ul li");
	// lrCarousel1(".floor_bannerimg2 a",".floor_bannertu2",".rightBtn22",".leftBtn22",".floor_bannertu2 ul li");
	// lrCarousel1(".floor_bannerimg3 a",".floor_bannertu3",".rightBtn23",".leftBtn23",".floor_bannertu3 ul li");
	// lrCarousel1(".floor_bannerimg4 a",".floor_bannertu4",".rightBtn24",".leftBtn24",".floor_bannertu4 ul li");
	// lrCarousel1(".floor_bannerimg5 a",".floor_bannertu5",".rightBtn25",".leftBtn25",".floor_bannertu5 ul li");
	// lrCarousel1(".floor_bannerimg6 a",".floor_bannertu6",".rightBtn26",".leftBtn26",".floor_bannertu6 ul li");
	lrCarousel1(".floor_bannerimg7 a",".floor_bannertu7",".rightBtn27",".leftBtn27",".floor_bannertu7 ul li");
	// lrCarousel1(".floor_bannerimg8 a",".floor_bannertu8",".rightBtn28",".leftBtn28",".floor_bannertu8 ul li");
	// lrCarousel1(".floor_bannerimg9 a",".floor_bannertu9",".rightBtn29",".leftBtn29",".floor_bannertu9 ul li");

	// 右部固定
	const btnBox = $(".fixed_right")[0];
	const btn5 = $(".fix_list");
	const floor = $(".yt_floor_item");
	const footer = $(".footers")[0];
	tiaozhuan(btnBox,btn5,floor,footer);
	let sobj = scrollobj();
	footer.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}
})