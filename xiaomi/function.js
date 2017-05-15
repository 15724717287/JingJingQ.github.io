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


// 透明度轮播图函数的封装
// pic            轮播图  （字符串的选择器）  
// bigbannerBox   通屏的banner盒子  （字符串的选择器）
// lis            轮播点   （字符串的选择器）
// colorArr     通屏banner盒子的所有颜色   (数组["red","blue"])
// second         轮播图变化的时间 
// tuactiveZ      轮播图获得焦点之后的层级
// liactivebgcolor轮播点获得焦点之后的颜色
// tuZ            轮播图的默认 颜色
// liscolor       轮播点的默认颜色

function lunbo(pic,bigbannerBox,lis,colorArr,second,tuactiveZ,liactivebgcolor,tuZ,liscolor,zuojiant,youjiant){
	const tu = $(pic);
	const banner = $(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	const leftBtn=$(zuojiant)[0];
	const rightBtn=$(youjiant)[0];
	// 给出初始值
	// tu[0].style.zIndex=tuactiveZ;
	tu[0].style.opacity=1;
	li[0].style.backgroundColor=liactivebgcolor;
	banner.style.backgroundColor=color[0];
	var num = 0;
	flag=true;
	var t = setInterval(move,second);
	// 轮播点的变化
	for(let j=0;j<li.length;j++){
		li[j].onclick=function(){
			// 回到默认样式
			for(let i=0;i<tu.length;i++){
				// tu[i].style.zIndex=tuZ;
				tu[i].style.opacity=0;
				li[i].style.backgroundColor=liscolor;
				li[i].style.borderColor="rgba(255,255,255,0.3)";
			}
			// 提高层级，轮播点变颜色，banner背景也跟着变颜色
			// tu[j].style.zIndex=tuactiveZ;
			animate(tu[j],{opacity:1},1000);
			li[j].style.backgroundColor=liactivebgcolor;
			li[j].style.borderColor="rgba(0,0,0,0.4)";
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
	
	// 点击左箭头
	leftBtn.onclick=function(){
		if(flag){
			move("l");
		}
	}
	// 点击右箭头
	rightBtn.onclick=function(){
		if(flag){
			move("r");
		}
	}
	
	// 轮播图的变化，把他封装到一个函数中
	function move(type="l"){
		flag=false;
		// 开关是判断左箭头还是右箭头
		if(type=="l"){
			num++;
			if(num>tu.length-1){
			num=0;
			}
		}else if(type=="r"){
			num--;
			if(num<0){
			num=tu.length-1;
			}
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=0;
			li[i].style.backgroundColor=liscolor;
			li[i].style.borderColor="rgba(255,255,255,0.3)";
			}
		// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		li[num].style.backgroundColor=liactivebgcolor;
		li[num].style.borderColor="rgba(0,0,0,0.4)";
		banner.style.backgroundColor=color[num];
	}
}















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


// 多张图的轮播
function duotu_lunbo(box1,leftBtn1,rightBtn1,wins1,n1){
	const box = $(box1)[0];
	const leftBtn=$(leftBtn1)[0];
	const rightBtn=$(rightBtn1)[0];
	const wins=$(wins1)[0];
	let n=n1;//传几张图
	const imgW = parseInt(window.getComputedStyle(wins,null).width);
	let flag=true;
	const childlen = box.children.length;

	var t = setInterval(movel,3000);
	function movel(){
		flag=false;
		let first = box.firstElementChild;		
		animate(box,{left:-imgW},1500,function(){
			flag=true;
                  for(let i=0; i<n;i++){
                     box.appendChild(first);
                     first=box.firstElementChild;
                  }
			box.style.left=0;
		});			
	}
	//按钮
          function moveR(){
          	//box.insertBefore(last,firstChild);
          	for(let i=0;i<n;i++){
          		let firstChild=box.firstElementChild;
			let last=box.lastElementChild;	
			box.insertBefore(last,firstChild);
          	}
          	box.style.left=-imgW+"px";
          	animate(box,{left:0},1500);
          }
          
	leftBtn.onclick=function(){
		if(flag){
			moveR();
		}
	}
	rightBtn.onclick=function(){
		if(flag){
			movel();
		}
	}
	leftBtn.onmouseover=function(){
		clearInterval(t);
	}
	rightBtn.onmouseover=function(){
		clearInterval(t);
	}
	// 循环
	}





function lrCarousel1(pic,imgBox,leftBtn,rightBtn,lis,liactivebgColor,lisColor){	
		//获取轮播图
		const tu = $(pic);
		//获取轮播图盒子
		const img = $(imgBox)[0];
		//获取左按钮
		const leftbtn = $(leftBtn)[0];
		//获取右按钮
		const rightbtn = $(rightBtn)[0];
		const li = $(lis);
		// console.log(li)
		//获取轮播图盒子宽度        获取最终样式    window.getComputedStyle(img,null).width
		const imgW = parseInt(window.getComputedStyle(img,null).width);
		//初始化开始----------- 
		//开关
		var  flag = true;
		//将轮播图都置于右边
		for(let i = 0; i < tu.length; i ++){
			tu[i].style.left=imgW + "px";
		}
		//显示第一张图片在中间
		tu[0].style.left=0;
		//显示第一个轮播点激活的颜色
		li[0].children[0].classList.add("active1");
		//开始轮播
		// var t= setInterval(move,1000);
		var now = 0;
		var next = 0;
		//初始化结束---------------

		//轮播函数
		function move(type="l"){
			//轮播
			flag=false;
			if(type=="l"){
				//左移动
				next++;
				if(next>tu.length-1){
					next = 0;	
				}
				tu[next].style.left=imgW + "px";
				// tu[now].style.left=-imgW+"px";
				animate(tu[now],{left:-imgW},500);
			}else if(type=="r"){
				//右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW + "px";
				// tu[now].style.left=imgW+"px";
				animate(tu[now],{left:imgW},500);
			}
			animate(tu[next],{left:0},500,function(){
				//轮播结束
					flag=true
					li[next].children[0].classList.add("active1");
					li[now].children[0].classList.remove("active1");
					// console.log(`${now}+${next}`);
					now = next;
			});				
		}
		// img.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// img.onmouseout=function(){
		// 	t= setInterval(move,1000);
		// }
		// leftbtn.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// rightbtn.onmouseover=function(){
		// 	clearInterval(t);
		// }
		leftbtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightbtn.onclick=function(){
			if(flag){
				move("r");
			}
		}

		// 鼠标移到轮播点上的效果
		for(let i = 0; i < li.length; i ++){
			li[i].onclick=function(){
				if(flag){
					//
					for(let j = 0; j < li.length; j ++){
						li[j].children[0].classList.remove("active1");
						// li[j].style.backgroundColor=liactivebgColor;
						tu[j].style.left=imgW + "px";		
					}
					//鼠标移到的该轮播点所对应的图置于中间
					tu[i].style.left=0;
					//鼠标移到的该轮播点激活的颜色
					li[i].children[0].classList.add("active1");
					// li[i].style.backgroundColor=lisColor;
					now = i;
					next = i;
				}															
			}
		}
	}