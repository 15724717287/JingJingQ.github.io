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



// 获得obj元素的style（width、height）样式值
//  attr(obj,style)
// obj：类型：dom元素
// style：类型：string
function attr(obj,style){
	return window.getComputedStyle(obj,null)[style];
}

// 选项卡函数,btn：选项卡按钮。con是选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){
				con[j].style.display="none";
			}
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
				con[i].style.display="none";
		}
		}
	}


// 下拉导航
// xaila_Nav(item,ul,num)
// item:上面的选项
// ul：下面的列表
// num：ul是item的第几个孩子
function xaila_Nav(item,ul,num){
	for(let i=0;i<ul.length;i++){
	let h=parseInt(attr(ul[i],"height"));
	ul[i].setAttribute("h",h);
	ul[i].style.height=0;
	}
	for(let i=0;i<item.length;i++){
		let ul=item[i].children[num];
		if(item[i].children[num]){
			// hover函数  hover (obj,overfun,outfun)；
			hover(item[i],function(){
				animate(ul,{height:ul.getAttribute("h")},300);
			},function(){
				animate(ul,{height:0},300);
			})
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
		li[j].onmouseover=function(){
			// 回到默认样式
			for(let i=0;i<tu.length;i++){
				// tu[i].style.zIndex=tuZ;
				tu[i].style.opacity=0;
				li[i].style.backgroundColor=liscolor
			}
			// 提高层级，轮播点变颜色，banner背景也跟着变颜色
			// tu[j].style.zIndex=tuactiveZ;
			animate(tu[j],{opacity:1},1000);
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
	
	// 点击左箭头
	leftBtn.onclick=function(){
		if(flag){
			move("l");
		}
	}
	console.log(leftBtn)	
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
			}
		// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		li[num].style.backgroundColor=liactivebgcolor;
		banner.style.backgroundColor=color[num];
	}
}




// // 7.只执行一次事件
// // obj：对象
// // type:要执行的事件
// // fn：执行的事件函数
// 	function one(obj,type,fn){
// 		// 添加第一个type类型事件，执行fn
// 		obj.addEventListener(type,fn,false);
// 		// 添加第一个type类型事件，执行clear
// 		obj.addEventListener(type,clear,false);
// 		function clear(){
// 		alert(7);
// 			// 清除fn
// 			obj.removeEventListener(type,fn,false);
// 			// 清除clear
// 			obj.removeEventListener(type,clear,false);
// 		}
// 	}
	
// // 5.左右轮播图的封装函数
// 	// pic:轮播图
// 	// lunbo_hezi:轮播盒子
// 	// lis：轮播点
// 	// zuoBtn：左箭头
// 	// youBtn：右箭头
// 	// second：轮播图的时间间隔时间
// 	// second_inner：轮播图轮播的动画时间，是second的一半

// 		function lunbo_zuoyou(pic,lunbo_hezi,zuoBtn,youBtn,lis,second,second_inner){
// 		// 获取轮播图
// 		const tu = $(pic);
// 		// 获取轮播盒子
// 		const img = $(lunbo_hezi)[0];
// 		// 获取左按钮
// 		const leftBtn = $(zuoBtn)[0];
// 		// 获取右按钮
// 		const rightBtn = $(youBtn)[0];
// 		// 获取轮播图的宽
// 		const imgW = parseInt(window.getComputedStyle(img,null).width);
// 		// 获取轮播点
// 		const li = $(lis);
// 		// 初始化
// 		// 开关开
// 		var flag = true;
// 		// 将轮播图都置于右边
// 		for(let i=0;i<tu.length;i++){
// 			tu[i].style.left=imgW + "px";
// 		}	
// 		// 将第一张轮播图置于轮播盒子中，让他显示
// 		tu[0].style.left=0;
// 		// 将第一个轮播点变为白色 
// 		// li[0].style.backgroundColor="#fff";
// 		// 开始轮播
// 		var t = setInterval(move,second);
// 		// 当前轮播图的下标
// 		var now = 0;
// 		// 下一张图片的下标
// 		// next也可以为1，但在函数中就是让next++在最后
// 		var next = 0;
// 		// 轮播点的变化
// 		// 循环遍历每一个轮播点给他加事件
// 		// for(let i=0;i<li.length;i++){
// 		// 	li[i].onmouseover=function(){
// 		// 		clearInterval(t);
// 		// 		if(flag){
// 		// 			// 让所有的点都变为初始颜色
// 		// 		for(let j=0;j<li.length;j++){
// 		// 			li[j].style.backgroundColor="orange";
// 		// 			tu[j].style.left=imgW+"px";
// 		// 		}
// 		// 		// 鼠标移到哪个点身上就让他变颜色
// 		// 		li[i].style.backgroundColor="#fff";
// 		// 		tu[i].style.left=0;
// 		// 		// 让now和next也改变
// 		// 		now=i;
// 		// 		next=i;
// 		// 		}
// 		// 	}
// 		// }
// 		// 采用第二种方法做轮播点
// 		for(let i=0;i<li.length;i++){
// 			li[i].onmouseover=function(){
// 				clearInterval(t);
// 				if(flag){
// 					// 让所有的点都变为初始颜色
// 				for(let j=0;j<li.length;j++){
// 					li[j].classList.remove("active");
// 					tu[j].style.left=imgW+"px";
// 				}
// 				// 鼠标移到哪个点身上就让他变颜色
// 				li[i].classList.add("active");
// 				tu[i].style.left=0;
// 				// 让now和next也改变
// 				now=i;
// 				next=i;
// 				}
// 			}
// 		}
// 		// 轮播函数
// 		function move(type="l"){
// 			flag=false;
// 			// 开关是判断左箭头还是右箭头
// 			if(type=="l"){
// 				next++;
// 				if(next>tu.length-1){
// 					// 最后一张完了就是第一张
// 				next=0;
// 				}
// 				// 轮播
// 				// 下一张图做好准备
// 				tu[next].style.left=imgW+"px";
// 				// 让第一张图片移到左边
// 				animate(tu[now],{left:-imgW},second_inner);
// 			}else if(type=="r"){
// 				next--;
// 				if(next<0){
// 					next=tu.length-1;
// 				}
// 				// 轮播
// 					tu[next].style.left=-imgW+"px";
// 					animate(tu[now],{left:imgW},second_inner);
// 			}
// 			// 让下一张图移过来
// 			animate(tu[next],{left:0},second_inner,function(){
// 				// 轮播结束后需要执行的函数
// 				flag=true;
// 				// 轮播结束后轮播点再动
// 				// li[next].style.backgroundColor="#fff";
// 				// li[now].style.backgroundColor="orange";
// 				li[now].classList.remove("active");
// 				li[next].classList.add("active");
// 				now=next;
				
// 			});
// 		}
// 		// 鼠标移入轮播图，让时间间隔函数停止
// 		img.onmouseover=function(){
// 			clearInterval(t);
// 		}
// 		// 鼠标移出轮播图，让他继续轮播起来
// 		img.onmouseout=function(){
// 			// t不用重新定义
// 			t = setInterval(move,second);
// 		}
// 		// 鼠标移到左箭头，清除时间间隔函数
// 		leftBtn.onmouseover=function(){
// 			clearInterval(t);
// 		}
// 		// 鼠标移到右箭头
// 		rightBtn.onmouseover=function(){
// 			clearInterval(t);
// 		}
// 		// 点击左箭头
// 		leftBtn.onclick=function(){
// 			if(flag){
// 				move("l");
// 			}
// 		}	
// 		// 点击右箭头
// 		rightBtn.onclick=function(){
// 			if(flag){
// 				move("r");
// 			}
// 		}	
		
// 		