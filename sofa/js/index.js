$(function(){
	const btn1 = $(".nav_have");
	const con1 = $(".dropdown-menu");
	xuanxiangka(btn1,con1);

	lunbo_touming(".banner_righttu a img",".banner_right","[]",2000,1,0);



	const selectDshz=$(".select_dshz")[0];
	const dropdownMenus=$(".dropdown-menus")[0];
	const button1=$(".close")[0];
	selectDshz.onclick=function(){
		dropdownMenus.style.display="block";
		selectDshz.placeholder="";
		modelsMenu.style.display="none";
		selectXh.placeholder="输入型号";
	}
	// selectDshz.onblur=function(){
	// 	dropdownMenus.style.display="none";
	// 	selectDshz.placeholder="选择智能电视/电视盒子品牌";
	// }
	button1.onclick=function(){
		dropdownMenus.style.display="none";
	}

	const selectXh=$(".selectXh")[0];
	const modelsMenu=$(".models_menu")[0];
	const button2=$(".closes")[0];
	selectXh.onclick=function(){
		modelsMenu.style.display="block";
		selectXh.placeholder="";
		dropdownMenus.style.display="none";
		selectDshz.placeholder="选择智能电视/电视盒子品牌";
	}
	// selectXh.onblur=function(){
	// 	modelsMenu.style.display="none";
	// 	selectXh.placeholder="输入型号";
	// }
	button2.onclick=function(){
		modelsMenu.style.display="none";
	}



	const lis=$(".presentation a");
	const divs=$(".tab-content .tab-pane");

	for(let i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onclick=function(){
			for(let j=0;j<lis.length;j++){
				lis[j].className="";
				divs[j].style.display="none";
			}
			lis[i].className="active_chuxian";
			divs[this.id].style.display="block";
			selectDshz.placeholder="选择智能电视/电视盒子品牌";
		}

	}




	const lis1=$(".biaoti_youa");
	const divs1=$(".tab_pane");
	const xuanzhong=$(".xuanzhong");

	lis1[0].style.color="#00a8f6";
	xuanzhong[0].style.display="block";
	divs1[0].style.display="block";
	
	for(let i=0;i<lis1.length;i++){
		lis1[i].id=i;
		lis1[i].onclick=function(){
			for(let j=0;j<lis1.length;j++){
				divs1[j].style.display="none";
				xuanzhong[j].style.display="none";
				lis1[j].style.color="#000";
			}
			xuanzhong[i].style.display="block";
			divs1[this.id].style.display="block";
			lis1[i].style.color="#00a8f6";
		}
		lis1[i].onmouseover=function(){
			lis1[i].style.color="#00a8f6";
		}
		// lis1[i].onmouseout=function(){
		// 	lis1[i].style.color="#000";
		// }
	}


	const biaoti=$(".pane_list");
	const liebiao=$(".rank-item-content");
	liebiao[0].style.display="block";
	for(let i=0;i<biaoti.length;i++){
		biaoti[i].onmouseover=function(){
			for(let j=0;j<biaoti.length;j++){
				liebiao[j].style.display="none";
			}
			liebiao[i].style.display="block";
		}
	}

})