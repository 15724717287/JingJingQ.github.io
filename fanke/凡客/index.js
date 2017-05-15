// 
$(function(){
	lunbo(".banner img",".banner",".fanye li",[],2000,2,"#b81c22",1,"#ddd",".zuojiantou",".youjiantou");
	// const lis = document.querySelectorAll(".list_nav");
	// const div = document.querySelectorAll(".list_box");
	// xuanxiangka(lis,div);

	const btn = document.querySelectorAll(".weixin");
	const con = document.querySelectorAll(".erweima");
	xuanxiangka(btn,con);

	const btn1 = document.querySelectorAll(".gouwuche");
	const con1 = document.querySelectorAll(".gw_active");
	xuanxiangka(btn1,con1);

	const btn2 = document.querySelectorAll(".BlackTop")[0];
	let sobj = document.body;
	btn2.onclick=function(){
		animate(sobj,{scrollTop:0},500);
		}

	const item=$(".list_nav");
	const ul=$(".list_box");
	var num=2;
	xaila_Nav(item,ul,num);
})