window.onload=function(){

	var item=getClass('item');
	var son=getClass('son');
	var all=$('.all')[0];

	var yidongf=$('.yidongf');
	var dlt=$('.dlt')[0];
	var dlr=$('.dlr')[0];
	var click=$('.leadspp');
	var block=$('.leadareo');
	var yidong=$('.yidong');
	var zixun1=$('.zixun1')[0];
	var zixun2=$('.zixun2')[0];
	var zixun3=$('.zixun3')[0];
	var bannernextf=$('.bannernextf')[0];
	var bannernext=$('.bannernext');

	var turnl2=$('.turnl')[1];
	var turnr2=$('.turnr')[1];
	var brc=$('.brc')[0];
	var huafei=$('a',brc);
	var brjfxm=$('#brjfxm');
	var brjfxm2=$('#brjfxm2');
	var brjfxm1=$('.brjfxm1')[0];
	var brjfxm2=$('.brjfxm2')[0];
	brjfxm.onclick=function(){

			brjfxm1.style.display='none';
			brjfxm2.style.display='block';


	}
	brjfxm2.onclick=function(){
		brjfxm2.style.display='none';
		brjfxm1.style.display='block';
	}


	optiontchange(huafei,'','#brca')

	// nolineturn(bannernextf,bannernext,turnl2,turnr2,10);


	option(item,son);
	zixun1.onmouseover=function(){
		animate(zixun1,{left: -86},300)
	}
	zixun2.onmouseover=function(){
		animate(zixun2,{left: -86},300)
	}
	zixun3.onmouseover=function(){
		animate(zixun3,{left: -86},300)
	}
	zixun1.onmouseout=function(){
		animate(zixun1,{left: -20},300)
	}
	zixun2.onmouseout=function(){
		animate(zixun2,{left: -20},300)
	}
	zixun3.onmouseout=function(){
		animate(zixun3,{left: -20},300)
	}

	for(var i=0;i<yidongf.length;i++){
		yidongf[i].num=i;
		yidongf[i].onmouseover=function(){
			var num=this.num;


         	animate(yidong[num],{right:20});

		}
		yidongf[i].onmouseout=function(){

		var num=this.num;

		animate(yidong[num],{right:0});
		}
	}
	optionclick(click,block);

	onmousedown=function(){
		block[0].style.display='none';
	}
	dlt.onmouseover=function(){
		    dlt.style.backgroundColor='#25B2FE';
		    dlt.style.color='#fff';
	}
	dlt.onmouseout=function(){
		    dlt.style.backgroundColor='#fff';
		    dlt.style.color='#25B2FE';
	}
	dlr.onmouseover=function(){
		    dlr.style.backgroundColor='#25B2FE';
		    dlr.style.color='#fff';
	}
	dlr.onmouseout=function(){
		    dlr.style.backgroundColor='#fff';
		    dlr.style.color='#25B2FE';
	}



	// turnlislropa(obj,turnp,lis,'lismain',turnl,0.7,turnr,0.7,2);


	var infp =$('.infu');
	var infturnl =$('.infturnl')[0];
	var infturnr =$('.infturnr')[0];
	turnlr(infp,infturnl,infturnr,2000,2);

    // var lunbo_hezi=$()[0];
    // var pic=$();
    // var lis=$();
    // var zuoBtn=$()[0];
    // var youBtn=$()[0];
// 8.左右轮播图的封装函数
// pic:轮播图
// lunbo_hezi:轮播盒子
// lis：轮播点
// zuoBtn：左箭头
// youBtn：右箭头
// second：轮播图的时间间隔时间
// second_inner：轮播图轮播的动画时间，是second的一半

    function lunbo_zuoyou(pic,lunbo_hezi,zuoBtn,youBtn,lis,second,second_inner){
        // 获取轮播图
        // const tu = $('.bmp');
        // 获取轮播盒子
        // const img = $('.banner_box')[0];
        // 获取左按钮
        // const leftBtn = $('.turnl')[0];
        // 获取右按钮
        // const rightBtn = $('.turnr')[0];
        // 获取轮播图的宽
        const imgW = parseInt(window.getComputedStyle(img,null).width);
        // 获取轮播点
        // const li = $('.bannerlis');
        // 初始化
        // 开关开
        var flag = true;
        // 将轮播图都置于右边
        for(let i=0;i<tu.length;i++){
            tu[i].style.left=imgW + "px";
        }
        // 将第一张轮播图置于轮播盒子中，让他显示
        tu[0].style.left=0;
        // 将第一个轮播点变为白色
        // li[0].style.backgroundColor="#fff";
        // 开始轮播
        var t = setInterval(move,second);
        // 当前轮播图的下标
        var now = 0;
        // 下一张图片的下标
        // next也可以为1，但在函数中就是让next++在最后
        var next = 0;
        // 轮播点的变化
        // 循环遍历每一个轮播点给他加事件
        // for(let i=0;i<li.length;i++){
        // 	li[i].onmouseover=function(){
        // 		clearInterval(t);
        // 		if(flag){
        // 			// 让所有的点都变为初始颜色
        // 		for(let j=0;j<li.length;j++){
        // 			li[j].style.backgroundColor="orange";
        // 			tu[j].style.left=imgW+"px";
        // 		}
        // 		// 鼠标移到哪个点身上就让他变颜色
        // 		li[i].style.backgroundColor="#fff";
        // 		tu[i].style.left=0;
        // 		// 让now和next也改变
        // 		now=i;
        // 		next=i;
        // 		}
        // 	}
        // }
        // 采用第二种方法做轮播点
        for(let i=0;i<li.length;i++){
            li[i].onclick=function(){
                clearInterval(t);
                if(flag){
                    // 让所有的点都变为初始颜色
                    for(let j=0;j<li.length;j++){
                        li[j].classList.remove("flooractive");
                        tu[j].style.left=imgW+"px";
                    }
                    // 鼠标移到哪个点身上就让他变颜色
                    li[i].classList.add("flooractive");
                    tu[i].style.left=0;
                    // 让now和next也改变
                    now=i;
                    next=i;
                }
            }
        }
        // 轮播函数
        function move(type="l"){
            flag=false;
            // 开关是判断左箭头还是右箭头
            if(type=="l"){
                next++;
                if(next>tu.length-1){
                    // 最后一张完了就是第一张
                    next=0;
                }
                // 轮播
                // 下一张图做好准备
                tu[next].style.left=imgW+"px";
                // 让第一张图片移到左边
                animate(tu[now],{left:-imgW},second_inner);
            }else if(type=="r"){
                next--;
                if(next<0){
                    next=tu.length-1;
                }
                // 轮播
                tu[next].style.left=-imgW+"px";
                animate(tu[now],{left:imgW},second_inner);
            }
            // 让下一张图移过来
            animate(tu[next],{left:0},second_inner,function(){
                // 轮播结束后需要执行的函数
                flag=true;
                // 轮播结束后轮播点再动
                // li[next].style.backgroundColor="#fff";
                // li[now].style.backgroundColor="orange";
                li[now].classList.remove("flooractive");
                li[next].classList.add("flooractive");
                now=next;

            });
        }
        // 鼠标移入轮播图，让时间间隔函数停止
        img.onmouseover=function(){
            clearInterval(t);
        }
        // 鼠标移出轮播图，让他继续轮播起来
        img.onmouseout=function(){
            // t不用重新定义
            t = setInterval(move,second);
        }
        // 鼠标移到左箭头，清除时间间隔函数
        leftBtn.onmouseover=function(){
            clearInterval(t);
        }
        // 鼠标移到右箭头
        rightBtn.onmouseover=function(){
            clearInterval(t);
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
    }
// 获取轮播图
    // const tu = $('.bmp');
    // 获取轮播盒子
    // const img = $('.banner_box')[0];
    // 获取左按钮
    // const leftBtn = $('.turnl')[0];
    // 获取右按钮
    // const rightBtn = $('.turnr')[0];
    // 获取轮播点
    // const li = $('.bannerlis');
    // lunbo_zuoyou(tu,img,leftBtn,rightBtn,li,3000,1500);


    duotu_lunbo(".bannernext",".zuob",".youb",".bannernextf",4);




    var imgs = document.querySelectorAll(".bm div");
    var btns = document.querySelectorAll(".bannerlis");
    var box = document.querySelector(".banner_box");
    var nowbtn = btns[0];
    var nowimg = imgs[0];
    // 轮播图自动轮播
    var t = setInterval(move, 3000);
    var now = 0;
    var z = 10;
    function move() {
        imgs[now].classList.add("leftOut");
        btns[now].classList.remove("flooractive");
        now++;
        if (now == imgs.length) {
            now = 0;
        }
        btns[now].classList.add("flooractive");
        imgs[now].classList.add("leftIn") ; //
        imgs[now].style.zIndex = z++;
    }
    imgs.forEach(function (img) {
        img.addEventListener("animationend", function () {
            img.className="";
            flag=true;
        })
    })
    //  清除时间间隔函数
    box.onmouseover = function () {
        clearInterval(t)
    }
    box.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    // 遍历轮播点
    btns.forEach(function (btn, index) {
        // 轮播点的变化
        btn.onclick = function () {
            if (index == now) {  //当前张
                return;
            }
            if (index > now) {
                imgs[now].classList.add("leftOut");
                imgs[index].classList.add("leftIn")  //
//               点击的下标
            } else if (index < now) {
                imgs[now].classList.add("rihgtOut");
                imgs[index].classList.add("rihgtIn")  //  移入
            }
            btns[now].classList.remove("flooractive")
            btns[index].classList.add("flooractive")
            imgs[index].style.zIndex = z++;
            now = index;  //当前
//
        }
    })
    var flag = true;
    var prev = document.querySelector(".turnl");
    var next = document.querySelector(".turnr");
   // 点击左右箭头
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
//    左键移出
    prev.onclick = function () {
        if(flag){
            flag = false;    
            imgs[now].classList.add("rihgtOut");
            btns[now].classList.remove("flooractive")
            now--;
              if(now==-1){
                now=imgs.length-1;
            }
            imgs[now].classList.add("rihgtIn");
            imgs[now].style.zIndex=z++;
            btns[now].classList.add("flooractive");
        }
      
    }


}