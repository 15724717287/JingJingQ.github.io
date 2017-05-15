/*
option(item,son)在父元素中中设置son选项卡   （item父对象）（ son选项卡对象）

getClass(className,[range])获取指定calss的对象的集合（类名）（父对象不指定为document）

objcontent(obj,[txt])获取或者是设置对象的文本

getstylevalue(obj,attr)获取指定元素指定的样式（对象）（属性名）

getstyle(obj)获取指定元素所有样式的对象（对象）

$(selecter,range)  .one获取该类名对象    #one获取该ID对象    div获取该标签对象



*/




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
	option(item,son)
	在父元素中中设置son选项卡
*/
function option(item,son){
	//var item=getClass(item);
	//var son=getClass(son);
	for(var i=0;i<item.length;i++){
		item[i].ind=i;
		
		item[i].onmouseover=function(){
			nodis();
			son[this.ind].style.display="block";
		}
		item[i].onmouseout=function(){
			nodis();
		}
	}
	function nodis(){
		for(var j=0;j<son.length;j++){
			
			son[j].style.display="none";
		}
	}
}

//单击显示效果
function optionclick(item,son){
  // var item=getClass(item);
  // var son=getClass(son);
  for(var i=0;i<item.length;i++){
    item[i].ind=i;
    
    item[i].onclick=function(){
      nodis();
      son[this.ind].style.display="block";
    }
    
  }
  function nodis(){
    for(var j=0;j<son.length;j++){
      
      son[j].style.display="none";
    }
  }
}
//鼠标离开无消失效果,
function optiont(item,son){
	// var item=getClass(item);
	// var son=getClass(son);
	for(var i=0;i<item.length;i++){
		item[i].ind=i;
		
		item[i].onmouseover=function(){
			nodis();
			son[this.ind].style.display="block";
		}
		item[i].onmouseout=function(){
			// nodis();
		}
	}
	function nodis(){
		for(var j=0;j<son.length;j++){
			
			son[j].style.display="none";
		}
	}
}


//鼠标离开无消失效果，item跟随变换背景//lismain为有class和id实参+'.'和'#'
function optiontchange(item,son,lismain){
  if(son==''){
    for(var i=0;i<item.length;i++){
    item[i].ind=i;
    
    item[i].onclick=function(){
     
      if(lismain.charAt(0)==='.'){
        var lismainclass=lismain.slice(1);
        nodis1();
        if(!item[this.ind].className.match(lismainclass)){
            item[this.ind].className=(item[this.ind].className+' '+lismainclass);
          }
      }else if(lismain.charAt(0)==='#'){
        var lismainid=lismain.slice(1);
        nodis2();
        if(!item[this.ind].id.match(lismainid)){
            item[this.ind].id=lismainid;
          }
      }
    }
    
  }
  function nodis1(){
    var lismainclass=lismain.slice(1);
    for(var j=0;j<item.length;j++){
      item[j].className=item[j].className.replace(lismainclass,'');
      
      
    }
  } 
  function nodis2(){
    var lismainid=lismain.slice(1);
    for(var j=0;j<item.length;j++){
      item[j].id=item[j].id.replace(lismainid,'');
      
      
    }
  }

  }else{

	for(var i=0;i<item.length;i++){
		item[i].ind=i;
		
		item[i].onmouseover=function(){
			son[this.ind].style.display="block";
			animate(son[this.ind],{opacity:1});
        if(lismain.charAt(0)==='.'){
        var lismainclass=lismain.slice(1);
        nodis11();
        if(!item[this.ind].className.match(lismainclass)){
            item[this.ind].className=(item[this.ind].className+' '+lismainclass);
          }
      }else if(lismain.charAt(0)==='#'){
        var lismainid=lismain.slice(1);
        nodis22();
        if(!item[this.ind].id.match(lismainid)){
            item[this.ind].id=lismainid;
          }
      } 

		}
		item[i].onmouseout=function(){
			      if(lismain.charAt(0)==='.'){
        var lismainclass=lismain.slice(1);
        item[j].className=item[j].className.replace(lismainclass,'');
        
      }else if(lismain.charAt(0)==='#'){
        var lismainid=lismain.slice(1);
        item[j].id=item[j].id.replace(lismainid,'');
      }
		}
	}
	function nodis11(){
    var lismainclass=lismain.slice(1);
		for(var j=0;j<son.length;j++){
			item[j].className=item[j].className.replace(lismainclass,'');
			
			son[j].style.display="none";
		}
	}
    function nodis22(){
       var lismainid=lismain.slice(1);
    for(var j=0;j<item.length;j++){
      item[j].id=item[j].id.replace(lismainid,'');
      son[j].style.display="none";
      
    }
  }
}
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
getClass(className)
获取指定calss的对象的集合
className  指定的类名
range   指定的范围
如果传入范围就是指定的范围，不传就是document
*/

function getClass(className,range){
	//设置获取元素的范围
	var range=range?range:document;
	//var range=range||document;
	//判断浏览器
	if(document.getElementByClassName){
		//w3c
		return range.getElementsByClassName(className);

	}else{
		//IE6~8
		//arr保存指定的className对象
		var arr=[];

		//1.获取页面中所有的元素
		var all=range.getElementsByTagName('*');
		//2.挑选指定元素
		

		for(var i=0;i<all.length;i++){
		//函数：判断当前元素的classname是否包含指定的classname


			if(check(all[i].className,className)){
				arr.push(all[i]);
			}
		}
		//3.挑选完毕 将数组输出
		return arr;
	}
}

function check(obj,className){
	//检查obj中是否包含classname
	var arr=obj.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==className){
			return true;
		}
	}
	return false;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
   objcontent(obj,[txt])
   获取或者是设置对象的文本
   obj 指定的对象
   val 要设置的内容

*/
// function objcontent(obj,txt){
// 	
			//此函数当原内容为空时不可以用
// 				if(obj.innerText){
// 					if(txt==undefined){
// 						return obj.innerText;
					
// 					}else{
// 						obj.innerText=txt;
// 					}
// 				}else{
// 					 if(txt==undefined){
// 						return obj.textContent;
					
// 					}else{
// 						obj.textContent=txt;
// 					}
// 				}
// 				// obj.innerHTML=txt;
			
// 		}

		function objcontent(obj,txt){
		
			if(txt){
					 obj.innerText=txt;
					 obj.textContent=txt;
				// obj.innerHTML=txt;
			}else{
				if(obj.innerText){
					return obj.innerText;
				}else{
					return obj.textContent;
				}
			}
		}


		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		/*
		   getstylevalue(obj,attr)
		   获取指定元素指定的样式
		   obj 指定的元素
		   attr 样式名
		*/
		function getstylevalue(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{

				return getComputedStyle(obj,null)[attr];
			}
		}

		function getstyle(obj){
			if(obj.currentStyle){
				return obj.currentStyle;
			}else{
				return getComputedStyle(obj,null);
			}
		}



		/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		$('')
		.one获取类名
		#one获取ID
		div获取标签
		*/
		// function $(selecter){
		// 	if(selecter.charAt(0)==='.'){
		// 		return getClass(selecter.slice(1));
		// 	}else if(selecter.charAt(0)==='#'){
		// 		return document.getElementById(selecter.slice(1));

		// 	}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		// 		return document.getElementsByTagName(selecter);

		// 	}
		// 	///^[a-z][a-z1-6]{0,10}$/.test(selecter)
		// }


		function $(selecter,range){
			var range=range?range:document;

			if(selecter.charAt(0)==='.'){
				return getClass(selecter.slice(1),range);
			}else if(selecter.charAt(0)==='#'){
				return document.getElementById(selecter.slice(1));

			}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
				return range.getElementsByTagName(selecter);

			}
			///^[a-z][a-z1-6]{0,10}$/.test(selecter)
		}


      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      /*
    	turn(obj,turnp,time)
    	obj 为父元素
    	turnp为轮播图元素
    	time为时间，不填默认为1s

      */
      function turn(obj,turnp,time){
       var time=time?(parseInt(time)*1000):1000;
       var num=0;
       var t;
       var len=turnp.length
       for(var i=0;i<len;i++){
       	if(i===num){
       		continue;
       	}
       	turnp[i].style.display='none';
       }

       t=setInterval(move,time);
       function move(){
       	num++;
       	if(num===len){
       		num=0;
       	}
       	for(var i=0;i<len;i++){
       		turnp[i].style.display='none';
       	}
       	turnp[num].style.display='block';
       }
       obj.onmouseover=function(){
       	clearInterval(t);
       }
       obj.onmouseout=function(){
       	t=setInterval(move,time);
       }

      }

     //lis中可以颜色变化，可以背景图片变化
       function turnlis(obj,turnp,lis,lismainclass,time){
       var time=time?(parseInt(time)*1000):1000;
       var num=0;
       var t;
       var len=turnp.length

       for(var i=0;i<len;i++){
       	if(i===num){
       		
       		if(!lis[i].className.match(lismainclass)){
       			lis[i].className=(lis[i].className+' '+lismainclass);
       		}
       		continue;
       	}
       	//
      
       	lis[i].className=lis[i].className.replace(lismainclass,' ');
       	turnp[i].style.display='none';

       }

       t=setInterval(move,time);
       function move(){
       	num++;
       	if(num===len){
       		num=0;
       	}
       	for(var i=0;i<len;i++){
       		//
       		
       		lis[i].className=lis[i].className.replace(lismainclass,' ');
       		turnp[i].style.display='none';
       	}
       	//
       	if(!lis[num].className.match(lismainclass)){
       			lis[num].className=(lis[num].className+' '+lismainclass);
       		}
       	turnp[num].style.display='block';
       }
       obj.onmouseover=function(){
       	clearInterval(t);
       }
       obj.onmouseout=function(){
       	t=setInterval(move,time);
       }

      }



       //lis中可以颜色变化，可以背景图片变化，turnl、turnr左右转对象
       function turnlislr(obj,turnp,lis,lismainclass,turnl,turnr,time){
       var time=time?(parseInt(time)*1000):1000;
       var num=0;
       var t;
       var len=turnp.length;

        turnl.style.display='none';
       	turnr.style.display='none';

       for(var i=0;i<len;i++){
       	if(i===num){
       		
       		if(!lis[i].className.match(lismainclass)){
       			lis[i].className=(lis[i].className+' '+lismainclass);
       		}
       		continue;
       	}
       	//
      
       	lis[i].className=lis[i].className.replace(lismainclass,' ');
       	turnp[i].style.display='none';
       }

       t=setInterval(move,time);
       function move(){
       	num++;
       	if(num===len){
       		num=0;
       	}
       	for(var i=0;i<len;i++){
       		//
       		
       		lis[i].className=lis[i].className.replace(lismainclass,' ');
       		turnp[i].style.display='none';
       	}
       	//
       	if(!lis[num].className.match(lismainclass)){
       			lis[num].className=(lis[num].className+' '+lismainclass);
       		}
       	turnp[num].style.display='block';
       }
       obj.onmouseover=function(){
       	turnl.style.display='block';
       	turnr.style.display='block';
       	clearInterval(t);
       }
       obj.onmouseout=function(){
       	turnl.style.display='none';
       	turnr.style.display='none';
       	t=setInterval(move,time);
       }

       turnl.onclick=function(){
       	turnlfun();
       }
        turnr.onclick=function(){
       	move();
       }
       function turnlfun(){
       	num--;
       	if(num<0){
       		num=len-1;
       	}
       	for(var i=0;i<len;i++){
       		//
       		
       		lis[i].className=lis[i].className.replace(lismainclass,' ');
       		turnp[i].style.display='none';
       	}
       	//
       	if(!lis[num].className.match(lismainclass)){
       			lis[num].className=(lis[num].className+' '+lismainclass);
       		}
       	turnp[num].style.display='block';

       }
      }



       //turnl、turnr左右转对象
       function turnlr(turnp,turnl,turnr,time,n){
       var time=time?(parseInt(time)):1000;
       var num=0;
       var t;
       var len=turnp.length;

       t=setInterval(move,time);
       function move(){
        num+=n;
        if(num>=len){
          num=0;
        }
        for(var i=0;i<len;i++){
          
          turnp[i].style.display='none';
          
        }
        //
       for (var i = 0; i < n; i++) {
          turnp[num+i].style.display='block';
        };
       }
       for (var i = 0; i < turnp.length; i++) {
         turnp[i].onmouseover=function(){
          clearInterval(t);
         }
       };
       for (var i = 0; i < turnp.length; i++) {
         turnp[i].onmouseout=function(){
          t=setInterval(move,time);
         }
       };

       turnl.onclick=function(){
        turnlfun();
       }
        turnr.onclick=function(){
        move();
       }
        turnl.onmouseover=function(){
            clearInterval(t);
       }
        turnr.onmouseover=function(){
            clearInterval(t);
       }
       turnl.onmouseout=function(){
            t=setInterval(move,time);
       }
        turnr.onmouseout=function(){
            t=setInterval(move,time);
       }
       function turnlfun(){
        num-=n;
        if(num<0){
          num=len-1;
        }
        for(var i=0;i<len;i++){
          //
                    
          turnp[i].style.display='none';
        }
        //
         for (var i = 0; i < n; i++) {
          turnp[num-i].style.display='block';
        };

       }
      }





       //lis中可以颜色变化，可以背景图片变化，turnl、turnr左右转对象 添加透明度动画和选项卡
       function turnlislropa(obj,turnp,lis,lismainclass,turnl,lopc,turnr,ropc,time){
        //time定义，默认1秒
       var time=time?(parseInt(time)*1000):1000;
       //轮播下标
       var num=0;
       //时间间隔函数名
       var t;
       //获取数量
       var len=turnp.length;
       //开关
       var flag=true;
       //左右触角初始化
       turnl.style.opacity=0;
       turnr.style.opacity=0;
       //图片初始化
       for(var i=0;i<len;i++){
       	if(i===num){
       		//显示
       		if(!lis[i].className.match(lismainclass)){
       			lis[i].className=(lis[i].className+' '+lismainclass);
       		}
          turnp[i].style.opacity=1;
       		continue;
       	}
       	//隐藏     
       	lis[i].className=lis[i].className.replace(lismainclass,' ');
       	turnp[i].style.opacity=0;
       }
//轮播间隔函数
       t=setInterval(move,time);

       //鼠标悬停暂停轮播
      
       obj.onmouseover=function(){
       	clearInterval(t);
        animate(turnl,{opacity:lopc},50);
        animate(turnr,{opacity:ropc},50);
       }
       //鼠标离开开始轮播
       obj.onmouseout=function(){
       	t=setInterval(move,time);
        animate(turnl,{opacity:0},50);
        animate(turnr,{opacity:0},50);       
       }

//lis选项卡控制图 
       for(var i=0;i<len;i++){
        //获得自身角标属性
        lis[i].ind=i;
        //点击控件触发事件
        lis[i].onmouseover=function(){
          if(flag){
            flag=false;

            num=this.ind;   
            nodis();
            animate(turnp[this.ind],{opacity:1},function(){flag=true}); 
           if(!lis[this.ind].className.match(lismainclass)){
            lis[this.ind].className=(lis[this.ind].className+' '+lismainclass);
            }
          }
        }
      }

      //轮播
       function move(){
        num++;
        if(num===len){
          num=0;
        }
        for(var i=0;i<len;i++){
          //        
          lis[i].className=lis[i].className.replace(lismainclass,' ');
          animate(turnp[i],{opacity:0});
                   // alert(getstylevalue(turnp[2],'opacity'))
        }
        //
        if(!lis[num].className.match(lismainclass)){
            lis[num].className=(lis[num].className+' '+lismainclass);
          }
        animate(turnp[num],{opacity:1},function(){flag=true;});
       }
//点击控件触发事件初始化函数
     function nodis(){
        for(var j=0;j<len;j++){
          lis[j].className=lis[j].className.replace(lismainclass,' ');
          // turnp[j].style.opacity=0;
          animate(turnp[j],{opacity:0});
      
          
        }
      }
//点击左触角事件
       turnl.onclick=function(){
       	if(flag){
       		flag=false;
       		turnlfun();
       	}
       }
       //点击右触角事件
        turnr.onclick=function(){
        	if(flag){
       			flag=false;
       			move();
       		}
       
       }
       //点击左触角事件函数
       function turnlfun(){
       	num--;
       	if(num<0){
       		num=len-1;
       	}
       	for(var i=0;i<len;i++){
       		//
       		
       		lis[i].className=lis[i].className.replace(lismainclass,' ');
       		animate(turnp[i],{opacity:0}); 
       	}
       	//
       	if(!lis[num].className.match(lismainclass)){
       			lis[num].className=(lis[num].className+' '+lismainclass);
       		}
       	animate(turnp[num],{opacity:1},function(){flag=true;}); 

       }



      }







/*简易动画>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
animate(obj,attr,over,speed)
obj 要改变的对象
attr 要变化的样式
over 结束的状态
speed 变化速度


*/
   //    function animate(obj,attr,over,speed){
   //    	var attr0=parseInt(getstylevalue(obj,attr));

   //    	var t=setInterval(function(){
   //    		attr0+=speed;
   //    		if(attr0>=over){
   //    			// attr0=over;
   //    			clearInterval(t);
   //    		}else{
   //    			obj.style[attr]=attr0+'px';
   //    		}
   //    	},50);
   //    }
	  
	  // 




    //无缝轮播效果
function  nolineturn(obj,turnp,turnl,turnr,time){
            var time=time?(parseInt(time)*1000):1000;
            var len=turnp.length;
            var num=0;
            var next=0;
            var flag=true;
            var winw=parseInt(getstylevalue(obj,'width'));
            //初始化
            for(var i=0;i<len;i++){
                  turnp[i].style.left=winw+'px';

            }
            turnp[num].style.left=0;


 t=setInterval(moveL,time);

      
        obj.onmouseover=function(){
        clearInterval(t);
        animate(turnl,{opacity:1},50);
        animate(turnr,{opacity:1},50);
       }
       //鼠标离开开始轮播
       obj.onmouseout=function(){
        t=setInterval(moveL,time);
        animate(turnl,{opacity:0},50);
        animate(turnr,{opacity:0},50);       
       }

            //左触手
            turnl.onclick=function(){
                  if(flag){
                        flag=false;
                        moveR();
                  }

            }
          //右触手
         turnr.onclick=function(){
            if(flag){
                  flag=false;
                  moveL();
         }
            

         }
       

            function moveL(){
                  //获取下一张图的角标
                  next++;
                  if(next==len){
                        next=0;
                  }
                  //初始化下一张位置
                  turnp[next].style.left=winw+'px';

                  //图片轮播
                  animate(turnp[num],{left:-winw});
                  animate(turnp[next],{left:0},function(){flag=true});
                  num=next;


            }
            function moveR(){
                  //获取下一张图的角标
                  next--;
                  if(next<0){
                        next=len-1;
                  }
                  //初始化下一张位置
                  turnp[next].style.left=-winw+'px';

                  //图片轮播
                  animate(turnp[num],{left:winw});
                  animate(turnp[next],{left:0},function(){flag=true});
                  num=next;


            }
       }