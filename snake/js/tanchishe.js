$(function(){
	const sence = $(".sence")[0];
	const zuigaofen=$(".zuigaofen span")[0];
	const defen=$(".defen span")[0];
	const start1=$(".start1")[0];
	let Snake1 = new Snake(sence,zuigaofen,defen,start1);
})


// 贪吃蛇游戏过程:
	// 1.定义初始蛇信息
	// 2.根据蛇的信息创建蛇
	// 3.让蛇移动，用时间间隔函数
	// 4.定义新蛇头的位置
	// 5.改变初始蛇的信息（添加蛇头信息）
	// 6.去除旧蛇尾信息
	// 7.去除旧蛇头she类名
	// 8.重新创建一条蛇
	// 9.定义蛇的方向
	// 10.用键盘事件控制蛇
	// 11.定义食物，随机出现食物
	// 12.通过食物位置信息获取元素添加food类名
	// 13.判断蛇头是否碰到食物，碰到后去掉食物
	// 14.生成新的食物，不需要删蛇尾
	// 15.判断蛇头是否出界、碰到自己，是的话游戏结束
	// 16.优化  蛇可以反向 连续按键盘



class Snake{

	constructor(sence,zuigaofen,defen,start1){
		this.sence=sence;
		this.zuigaofen=zuigaofen;
		this.defen=defen;
		this.start1=start1;
		// 1.定义初始蛇信息
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		// 定义蛇的方向,方向不同，蛇头位置就不一样
		this.shefx="right";
		this.shekeyflag=true;
		// this.zhuangtai=true;
		this.fenshu=0;
		this.play();
	}

	play(){
		if(Number(localStorage.zuigaofen)){
			this.zuigaofen.innerHTML=localStorage.zuigaofen;
			this.maxfen=localStorage.zuigaofen;
		}else{
			this.maxfen=0;
			this.zuigaofen.innerHTML=this.maxfen;
		}
		// 建场景
		this.createSence();
		// 2.根据蛇的信息创建蛇
		this.createShe();
		// 蛇跑
		this.shemove();
		// 控制蛇
		this.controlshe();
		// 创建食物
		this.createfood();
		this.pause();
	}
	pause(){
		let zhuangtai=true;
		let that=this;
		this.start1.onclick=function(){
			if(zhuangtai){
				zhuangtai=false;
				clearInterval(that.t);
				that.start1.innerHTML="开始";
			}else{
				zhuangtai=true;
				that.start1.innerHTML="暂停";
				that.shemove();
			}
			
		}
	}
	createSence(){
		// 行
		for(let i=0;i<20;i++){
			// 列
			for(let j=0;j<20;j++){
				let gezi=$("<div>");
				gezi.id=`${i}-${j}`;
				gezi.classList.add("gezi");
				this.sence.appendChild(gezi);
			}
		}
	}

	// 创建一条蛇
	createShe(){
		for(let i=0;i<this.she.length;i++){
			this.getElement(this.she[i]).classList.add("she");
		}
		
	}

	// 定义获取元素的函数
	getElement(weizhi){
		let id=weizhi.x+"-"+weizhi.y;
		return document.getElementById(id);
	}

	// 蛇移动
	shemove(){
		let that = this;
		// 3.让蛇移动，用时间间隔函数
		this.t = setInterval(function(){
			// 4.定义新蛇头的位置
			let newtou;
			if(that.shefx=="right"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}
			if(that.shefx=="left"){
				newtou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}
			if(that.shefx=="top"){
				newtou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=="bottom"){
				newtou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}

			// 碰到边界，游戏结束
			if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19){
				// alert("游戏结束");
				that.gameover();
				return;
			}

			// 碰到自己，游戏结束
			for(let i=0;i<that.she.length;i++){
				if(newtou.x==that.she[i].x&&newtou.y==that.she[i].y){
					// alert("游戏结束");
					that.gameover();
					return;
				}
			}

			// 5.改变初始蛇的信息（添加蛇头信息,把他添加到最后）
			that.she.push(newtou);
			// 如果蛇碰见食物，则移除食物的类名，重新创建食物
			if(newtou.x==that.foodw.x&&newtou.y==that.foodw.y){
				that.getElement(that.foodw).classList.remove("food");
				that.createfood();
				that.fenshu++;
				that.changefenshu();
			}else{
				// 6.去除旧蛇尾信息(去掉旧的第一个)
				let oldwei = that.she.shift();
				that.removewei(oldwei);
			}
			// 8.重新创建一条蛇
			that.createShe();
			// 打开开关
			that.shekeyflag=true;
		},300);
	}

	// 7.去除旧蛇头she类名
	removewei(oldwei){
		this.getElement(oldwei).classList.remove("she");
	}

	// 8.键盘事件控制蛇的方向
	controlshe(){
		let that = this;
		// e是事件对象
		window.onkeydown=function(e){
			// 开关
		if(that.shekeyflag){
			// 按左的时候关闭开关，移动完之后把开关打开
			that.shekeyflag=false;
			if(e.keyCode=="37"){
			if(that.shefx!="right"){
				that.shefx="left";
			}
			}
			if(e.keyCode=="38"){
				if(that.shefx!="bottom"){
					that.shefx="top";
				}
			}
			if(e.keyCode=="39"){
				if(that.shefx!="left"){
					that.shefx="right";
				}
			}
			if(e.keyCode=="40"){
				if(that.shefx!="top"){
					that.shefx="bottom";
				}
			}
		}
			
		}

	}

	// 9.创建食物
	createfood(){
		this.foodw={};
		this.foodw.x=Math.floor(Math.random()*20);
		this.foodw.y=Math.floor(Math.random()*20);
		this.getElement(this.foodw).classList.add("food");
	}

	changefenshu(){
		this.defen.innerHTML=this.fenshu;
		if(this.maxfen<this.fenshu){
			this.maxfen=this.fenshu;
			this.zuigaofen.innerHTML=this.fenshu;
			localStorage.zuigaofen=this.maxfen;
		}
	}
	// 游戏结束
	gameover(){
		this.changefenshu();
		// localStorage.zuigaofen=this.maxfen;
		clearInterval(this.t);
	}

}