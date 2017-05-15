$(function(){
	lunbo(".banner_pict",".mid_shang",".lunbodian i",[],2000,2,"#e01222",1,"#fff",".rightBtn",".leftBtn");

	const anniu=$(".dingwei");
	const liebiao=$(".dropdown");
	xuanxiangka(anniu,liebiao);

	const anniu1=$(".banner_left ul li");
	const liebiao2=$(".xiala_list");
	xuanxiangka(anniu1,liebiao2);



	const btnBox1 = $(".left_fixed")[0];
	const btn2 = $(".left_list");
	const floor1 = $(".lovelife_list1");
	const nav1 = $(".top_fixed")[0];
	const footer1 = $("footer")[0];
	tiaozhuan(btnBox1,btn2,floor1,nav1,footer1);

	const returns = $(".dibu_fixed .huiyuan_icon:nth-child(1)")[0];
	console.log(returns);
	let sobj = scrollobj();
	returns.onclick=function(){
		animate(sobj,{scrollTop:0},500);
		// fixedfoot.style.display="none";
	}

	const inputs=$("input[type=text]")[0];
	inputs.onclick=function(){
		inputs.placeholder="";
	}
	inputs.onblur=function(){
		inputs.placeholder="赠4918净化器";
	}


	lunbo(".enjoy_shipin",".enjoyyou_main",".enjoy_lunbod .enjoy_dot",[],2000,2,"#fd3131",1,"#fff",".enjoy_lunboy",".enjoy_lunboz");

	duotu_lunbo(".shangpin_box",".fanye1",".fanye",".shangpin_list",5);

	const lis1=$(".biaoqian");
	const divs1=$(".zhong_xia .liebiao");
	const active2=$(".activeZ");

	lis1[0].style.color="#e01222";
	divs1[0].style.display="block";
	active2[0].style.display="block";
	for(let i=0;i<lis1.length;i++){
		lis1[i].id=i;
		lis1[i].onclick=function(){
			for(let j=0;j<lis1.length;j++){
				divs1[j].style.display="none";
				active2[j].style.display="none";
				lis1[j].style.color="#000";
			}
			divs1[this.id].style.display="block";
			lis1[i].style.color="#e01222";
			active2[i].style.display="block";
		}
		lis1[i].onmouseover=function(){
			lis1[i].style.color="#e01222";
		}
		// lis1[i].onmouseout=function(){
		// 	lis1[i].style.color="#000";
		// }
	}
	




	const lis2=$(".paihang_lists");
	const divs2=$(".paihang_list");
	const active3=$(".selectC");
	// console.log(lis2);
	// console.log(divs2);
	// console.log(active3);
	lis2[0].style.color="#e01222";
	divs2[0].style.display="block";
	active3[0].style.display="block";
	for(let i=0;i<lis2.length;i++){
		lis2[i].id=i;
		lis2[i].onmouseover=function(){
			for(let j=0;j<lis2.length;j++){
				console.log(divs2[j]);

				divs2[j].style.display="none";
				active3[j].style.display="none";
				lis2[j].style.color="#000";
			}
			divs2[i].style.display="block";
			lis2[i].style.color="#e01222";
			active3[i].style.display="block";
		}
		// lis2[i].onmouseover=function(){
		// 	lis2[i].style.color="#e01222";
		// }
		// lis2[i].onmouseout=function(){
		// 	lis2[i].style.color="#000";
		// }
	}
	

})