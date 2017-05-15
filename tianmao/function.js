// 函数库

function $(select,obj=document){
	if(typeof select == "function"){
		window.onload=function(){
			select();
		}
	}
	else if(typeof select == "string"){
		return obj.querySelectorAll(select);
	}

}
// $(function(){})
// $(".box")

// 选项卡函数,btn：选项卡按钮。con是选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			// for(let j=0;j<con.length;j++){
			// 	con[j].style.display="none";
			// }
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
				con[i].style.display="none";
		}
		}
	}

function xuanxiangka1(btn,con){
		for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			// for(let j=0;j<con.length;j++){
			// 	con[j].style.display="none";
			// }
			// con[i].style.display="block";
			animate(con[i],{top:-14},100);
		}
		btn[i].onmouseout=function(){
			animate(con[i],{top:0},100);
			// con[i].style.display="none";
		}
		}
	}

function xuanxiangka2(btn,con,fixed){
	let SH=document.documentElement.clientHeight;
	window.onresize=function(){
		SH=document.documentElement.clientHeight;
		fixed.style.height=SH+"px";
	}
		fixed.style.height=SH+"px";
		for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			// for(let j=0;j<con.length;j++){
			// 	con[j].style.display="none";
			// }
			animate(con[i],{right:35},100);
			con[i].style.opacity="1";
		}
		btn[i].onmouseout=function(){
			animate(con[i],{right:70},100);
			con[i].style.opacity="0";
		}
		}
	}




// 遮罩函数，outer是外面的盒子，inner是加的遮罩
	function zhezhao_hanshu(outer,inner){
		for(let i=0;i<outer.length;i++){
		outer[i].onmouseover=function(){
			inner[i].style.display="block";
		}
		outer[i].onmouseout=function(){
			inner[i].style.display="none";
		}
		}
	}



// 层级轮播图函数的封装
// pic            轮播图  （字符串的选择器）  
// bigbannerBox   通屏的banner盒子  （字符串的选择器）
// lis            轮播点   （字符串的选择器）
// colorArr       通屏banner盒子的所有颜色   (数组["red","blue"])
// second         轮播图变化的时间 
// tuactiveZ      轮播图获得焦点之后的层级
// liactivebgcolor轮播点获得焦点之后的颜色
// tuZ            轮播图的默认 颜色
// liscolor       轮播点的默认颜色

		function lunbo(pic,bigbannerBox,lis,colorArr,second,tuactiveZ,liactivebgcolor,tuZ,liscolor){
			// 获取变量
			const tu = $(pic);
			const banner = $(bigbannerBox)[0];
			const li = $(lis);
			const color = colorArr;

			// 给出初始值
			tu[0].style.zIndex=tuactiveZ;
			li[0].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.zIndex=tuZ;
						li[i].style.backgroundColor=liscolor;
					}
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					tu[j].style.zIndex=tuactiveZ;
					li[j].style.backgroundColor=liactivebgcolor;
					banner.style.backgroundColor=color[j];
					num=j;
				}
			}
			
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t = setInterval(move,second);
			}

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>tu.length-1){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=tuZ;
					li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				tu[num].style.zIndex=tuactiveZ;
				li[num].style.backgroundColor=liactivebgcolor;
				banner.style.backgroundColor=color[num];
			}
			}



// 透明轮播图的封装函数
	function lunbo_touming(pic,bigbannerBox,lis,colorArr,second,tuactiveO,liactivebgcolor,tuO,liscolor){
			const tu = $(pic);
			const banner = $(bigbannerBox)[0];
			const li = $(lis);
			const color = colorArr;
			var second = 1000;

			// 给出初始值
			tu[0].style.opacity=tuactiveO;
			li[0].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.opacity=tuO;
						li[i].style.backgroundColor=liscolor;

					}
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					tu[j].style.opacity=tuactiveO;
					li[j].style.backgroundColor=liactivebgcolor;
					banner.style.backgroundColor=color[j];
					num=j;
				}
			}
			
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t = setInterval(move,second);
			}

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>2){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuO;
					li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				tu[num].style.opacity=tuactiveO;
				li[num].style.backgroundColor=liactivebgcolor;
				banner.style.backgroundColor=color[num];
				}
			}



			