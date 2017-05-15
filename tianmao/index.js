$(function(){
	const outer= $(".hezi");
	const inner= $(".icon_cover");
	zhezhao_hanshu(outer,inner);

	const outer1= $(".beauty_left a");
	const inner1= $(".img_cover");
	zhezhao_hanshu(outer1,inner1);

	const btn = $(".banner_nav li");
	const con = $(".xiala");
	xuanxiangka(btn,con);

	const btn1 = $(".hahaha");
	const con1 = $(".hover_pic");
	xuanxiangka1(btn1,con1);

	const btn3 = $(".xuanze");
	const con2 = $(".list_xiala");
	xuanxiangka(btn3,con2);

	lunbo(".bannertu",".banner_box",".lunbodian li",["#e8e8e8","#e8e8e8","#910fff","#f6eafe","#e8e8e8"],2000,2,"#fff",1,"gray");

	const btnBox1 = $(".left_fixed")[0];
	const btn2 = $(".fixed_list .fixed_nav");
	const floor1 = $(".beauty");
	const nav1 = $(".nav_fix")[0];
	const footer1 = $("footer")[0];
	tiaozhuan(btnBox1,btn2,floor1,nav1,footer1);



	const btn4=$(".active1");
	const con4=$(".right_bufen");
	const fixed=$(".right_fixed")[0];
	const fixedfoot=$(".top10")[0];
	xuanxiangka2(btn4,con4,fixed);
	let sobj = scrollobj();
	fixedfoot.onclick=function(){
		animate(sobj,{scrollTop:0},500);
		// fixedfoot.style.display="none";
	}


	const box=$(".huodong_title");
	for(let i=0;i<box.length;i++){
	const childlen=box[i].children.length;

	var t = setInterval(move,3000);
	// 从下往上2
		function move(){
			let first = box[i].firstElementChild;
			animate(first,{height:0},500,function(){
				// box.insertBefore(first,box.lastChild);
				box[i].appendChild(first);
				first.style.height=30+"px";
			});
		}
	}
})