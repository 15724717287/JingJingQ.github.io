$(function(){
	const textarea = $(".lybBox textarea")[0];
	const btn = $(".lybBox input[type=button]")[0];
	const con = $(".con ul")[0];
	const ys = $(".tishi span")[0];//已输
	const ks = $(".tishi b")[0];//可输
	let sum = 40;
	textarea.onkeydown = btn.onclick = function(e){
		if(e.type == "click"||(e.keyCode==13&&e.ctrlKey)){
				//获取文本内容
			let text = textarea.value;
			//判断是否为空字符(回车或空格)
			if(text.trim()==""){
				textarea.value = "";
				ys.innerHTML = 0;
				ks.innerHTML = sum;
				return;
			}
			//提交后清空
			textarea.value = "";
			//添加li
			let li = $("<li>");
			//在li中添加内容
			li.innerHTML = text;
			con.appendChild(li);
			ys.innerHTML = 0;
			ks.innerHTML = sum;
		}
		
	}
	// textarea.onkeypress=textarea.onkeyup = function(){
	textarea.oninput = function(){
		let text = textarea.value;
		let len = text.length;
		if(len>sum){
			text = text.substr(0,sum);
			textarea.value = text;
			len = 40;
		}
		ys.innerHTML = len;
		ks.innerHTML = sum - len;
		

	}
})