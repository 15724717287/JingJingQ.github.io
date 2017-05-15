
//获取
var video=document.querySelector("video");
var startbtn=document.querySelector(".start");
var reload=document.querySelector(".reload");
var progress=document.querySelector(".progress");
var inner=document.querySelector(".inner");
var now=document.querySelector("#now");
var all=document.querySelector("#all");
var l=progress.offsetWidth;
var volume=document.querySelector(".volume");
var bg=document.querySelector(".bg");
var vol=document.querySelector(".vol");
var volinner=document.querySelector(".vol_inner");
var mask=document.querySelector(".mask");
var volicon=document.querySelector(".volume .icon");
var fullscreen=document.querySelector(".fullscreen");
var container=document.querySelector(".container");
//开始播放
var startflag=true;
startbtn.onclick=function () {
    if(startflag){
        video.play();
        startbtn.innerHTML="&#xe6d2;";
    }else{
        video.pause();
        startbtn.innerHTML="&#xe6e3;";
    }
    //开关取反
    startflag=!startflag;
}

//控制播放进度
var duration=0;
var nowtime=0;

video.oncanplay=function () {
    //获取播放的总时长
    duration=video.duration;
    all.innerHTML=time(duration);
}
video.ontimeupdate=function () {
    //获取当前播放的时间
    nowtime=video.currentTime;
    now.innerHTML=time(nowtime);
    //改变进度条的宽度
    var width=nowtime/duration;
    inner.style.width=width*100+"%";
}

//时间格式00:00
function time(t){
    var mins=Math.floor(t/60);
    var secs=Math.floor(t%60);
    return mins+":"+(secs<10?"0"+secs:secs);
}

//重新播放
reload.onclick=function () {
    //调用重新播放函数
    video.load();
    //改变播放按钮及播放开关
    startbtn.innerHTML="&#xe6e3;";
    startflag=true;
    //改变时间及进度条
    inner.style.width=0;
    nowtime=0;
    now.innerHTML=time(nowtime);
    duration=video.duration;
}

//点击进度条改变播放位置及时间
progress.onmousedown=function (e) {
    var ox=e.clientX-progress.offsetLeft;
    // var ox =e.offsetX;
    var bili=ox/l;
    var pos=duration*bili;
    video.currentTime=pos;
    // alert(video.currentTime)
    document.onmousemove=function (e) {
        var ox=e.offsetX;
        var bili=ox/l;
        var pos=duration*bili;
        video.currentTime=pos;
    }
    document.onmouseup=function () {
        document.onmousemove=null;
        document.onmouseup=null;
    }
}

//控制声音
hover(volume,function () {
    //鼠标移入让他显示
    bg.style.display="block";
},function () {
    //鼠标移走让他隐藏
    bg.style.display="none";
    //当鼠标离开遮罩的时候清除onmousemove，onmouseup
    mask.onmousemove=null;
    mask.onmouseup=null;
});

//控制音量的函数
function fnvol(e) {
    //获取鼠标点击的位置
    var oy=e.offsetY;
    //当鼠标点击到最下面的时候，让他到margin-top为100的位置
    oy=oy>100?100:oy;
    //控制音量的大小0-1
    var v=1-oy/100;
    //调整声音大小
    video.volume=v;
    //静音状态变图标
    if(v==0){
        volicon.innerHTML="&#xe64d;";
    }else{
        volicon.innerHTML="&#xe757;";
    }
    volinner.style.marginTop=oy+"px";
}

//给他上面的遮罩加事件
mask.onmousedown=function (e) {
    fnvol(e);
    mask.onmousemove=function (e) {
        fnvol(e);
    }
    mask.onmouseup=function (e) {
        mask.onmousemove=null;
        mask.onmouseup=null;
    }
}

// 点击变静音
var volflag=true;
volicon.onclick=function () {
    if(volflag){
        volicon.innerHTML="&#xe64d;";
        //直接设置静音
        video.muted=true;
    }else{
        volicon.innerHTML="&#xe757;";
        //直接设置为原来的声音
        video.muted=false;
    }
    volflag=!volflag;
}


//全屏效果
var fullflag=true;
fullscreen.onclick=full;
video.ondblclick=full;
document.onkeydown=function (e) {
    if(e.keyCode==27){
        fullflag=false;
        full();
    }
}

    function full() {
    if(fullflag){
        fullscreen.innerHTML="&#xe674;";
        container.style.width="100%";
        container.style.height="100%";
    }else{
        fullscreen.innerHTML="&#xe600;";
        container.style.height=400+"px";
        container.style.width=600+"px";
    }
    fullflag=!fullflag;
    l=progress.offsetWidth;
}


