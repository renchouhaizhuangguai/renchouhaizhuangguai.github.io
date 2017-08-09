// 选项卡 
// btn选项卡按钮 con选项卡内容
	function xvanxiangka(btn1,con1){
		const btn=$(btn1);
		const con=$(con1);
		for(let i=0;i<btn.length;i++){   //for里let不能改成var
			btn[i].onmouseover=function(){
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
		}
	}	
	}


// 遮罩
// btn底下的块，con遮罩的块
	function zhe(btn2,con2){
		const btn=$(btn2);
		const con=$(con2);
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
		con[i].style.display="block";
			}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
			}
		}
	}


// 函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			window.addEventListener("load",select,false);
		}else if(typeof select=="string"){
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
			}
			
		}
	}
	// $(".box")
	// $(function(){})


//0层级轮播和1透明度轮播，不带箭头
	// pic轮播图填 字符串的选择器 
	// bigbannerBox通屏banner盒子 字符串的选择器
	// lunbodian轮播点 字符串选择器
	// colorArr通屏banner颜色 数组 ["red","blue"]
	// tuBigZ高层级
	// liactivebgColor轮播点获得焦点时背景颜色
	// lunboTime时间间隔
	// tuZ普通层级
	// lisColor轮播点普通颜色
	// type 不传值时默认层级轮播 type==1时，透明度轮播
	function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor,tupiangeshu,type=0){
		if(type==0){
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		const color=colorArr;
		tupian[0].style.zIndex=tuBigZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		
			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				clearInterval(t);
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[j].style.zIndex=tuBigZ;
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
			}
		}
		function move(){
			num++;
			if(num>tupiangeshu){
				num=0;
			}
			// console.log(num);
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		}
		


		else{
			// pic轮播图填 字符串的选择器 
		// bigbannerBox通屏banner盒子 字符串的选择器
		// lunbodian轮播点 字符串选择器
		// colorArr通屏banner颜色 数组 ["red","blue"]
		// tuBigZ不透明
		// liactivebgColor轮播点获得焦点时背景颜色
		// lunboTime时间间隔
		// tuZ透明
		// lisColor轮播点普通颜色
		// type 不传值时默认层级轮播 type==1时，透明度轮播
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const color=colorArr;
			tupian[0].style.zIndex=tuBigZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				clearInterval(t);
				li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;

				}
				tupian[j].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
			function move(){
				num++;
				if(num>tupiangeshu){
					num=0;
				}
				// console.log(num);
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];

			}
		}
	}


//层级轮播带箭头
	// pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// zuojian 左箭头
	// youjian 右箭头
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
		function Zjlunbo(pic,bigbannerBox,lis,colorArr,zuojian,youjian,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			const leftBtn=$(zuojian)[0];
			const rightBtn=$(youjian)[0];
			tupian[0].style.zIndex=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			function move(type="r"){
				if(type=="r"){
					num++;
					if(num>bannertushuliang){
						num=0;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}
				if(type=="l"){
					num--;
					if(num<0){
						num=tupian.length-1;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=tuactiveZ;
					li[num].style.background=liactivebgColor;
					banner.style.background=color[num];
					}

			}
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			leftBtn.onclick=function(){
				move("l");
			}
			rightBtn.onclick=function(){
				move("r");
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					clearInterval(t);
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.zIndex=tuactiveZ;
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
		}


// 左右轮播
	// lunbotupian 轮播图
	// lunbodakuai 放轮播块的大盒子
	// lunbokuai 放轮播图的轮播快
	// colorArr 放轮播块的大盒子的背景颜色集合
	// lunbodian 轮播点
	// zuojian 左按钮
	// youjian 右按钮
	// lunboTime 轮播时间
	// activeClass 给第一个轮播点加上的类名，定义轮播点选中的颜色
	function zylunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,activeClass){
		const tu=document.querySelectorAll(lunbotupian);
		const banner=document.querySelector(lunbodakuai);
		const img=document.querySelector(lunbokuai);
		const color=colorArr;
		const lis=document.querySelectorAll(lunbodian);
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const zuobtn=document.querySelector(zuojian);
		const youbtn=document.querySelector(youjian);
		for(i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		var now=0;
		var next=1;
		var t=setInterval(move,lunboTime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},500);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next++;			
					if(next>tu.length-1){
					next=0;
					}
				})
			}else if(type=="l"){
				animate(tu[now],{left:imgw},500);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next--;			
					if(next<0){
					next=tu.length-1;
					}
				})
			}
			
			lis[now].classList.remove(activeClass);
			lis[next].classList.add(activeClass);
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		zuobtn.onclick=function(){
			if(flag){
				move("l");	
			}
		}
		youbtn.onclick=function(){
			if(flag){
				move("r");	
			}
		}
		for(let i=0;i<tu.length;i++){
			lis[i].onmouseover=function(){
				if(flag){
					if(i<now){
						next=i;
						move("l");
					}else if(i>now){
						next=i;
						move("r");
					}
				}
			}
		}
	}


// 同时轮播多张图片的左右轮播
// tuBox放轮播图的盒子
// tu轮播图片
// daBox放轮播块（tuBox）的大盒子
// zuobtn左箭头
// youbtn右箭头
// tongshizhangshu同时轮播的图片数量
// lunboshijian  setInterval中的时间
// donghuashijin  animate中的动画时间
	function tongshi(tuBox,tu,daBox,zuojian,youjian,tongshizhangshu,lunboshijian,donghuashijin){
			const box=$(tuBox)[0];
			const lis=$(tu);
			const win=$(daBox)[0];
			const zuobtn=$(zuojian)[0];
			const youbtn=$(youjian)[0];
			const lisW=parseInt(window.getComputedStyle(lis[0],null).width);
			let n=tongshizhangshu;
			win.style.width=lisW*n+"px";
			var t=setInterval(move,lunboshijian);
			var flag=true;
			function move(type="l"){
				flag=false;
				if(type=="r"){
					animate(box,{marginLeft:-lisW*n},donghuashijin,function(){
						for(let i=0;i<n;i++){
							let first=box.children[0];
							box.appendChild(first);
						}
						box.style.marginLeft=0;
						flag=true;
						});
				}else if(type=="l"){
					for(let i=0;i<n;i++){
						let first=box.children[0];
						let last=box.lastElementChild;
						box.insertBefore(last,first);
					}
					box.style.marginLeft=-lisW*n+"px";
					animate(box,{marginLeft:0},donghuashijin,function(){
					flag=true;
					});

				}
			}
			win.onmouseover=function(){
				clearInterval(t);
			}
			win.onmouseout=function(){
				t=setInterval(move,lunboshijian);
			}
			youbtn.onclick=function(){
				if(flag){
					move("r");
				}
			}
			zuobtn.onclick=function(){
				if(flag){
					move("l");
				}
			}

			window.onblur=function(){
				clearInterval(t);
			}
			window.onfocus=function(){
				t=setInterval(move,lunboshijian);
			}

		}
		

// 获取scrollTop
	function scrollobj(){
		let body=document.body;
		let html=document.documentElement;
		body.scrollTop=100;
		html.scrollTop=100;
		let obj;
		if(body.scrollTop==0){
			obj=html;
		}else{
			obj=body;
		}
		body.scrollTop=0;
		html.scrollTop=0;
		return obj;
	}



// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
function louceng(anniu,Section,anniukuai,daohang,pic,picurl,chushise,activese,donghuaTime,num){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	let scroll= scrollobj();
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	let flagx=true;
	let flags=true;
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=activese;
			}
			if(scroll.scrollTop+CH>=section[i].offsetTop){
				let img=$(pic,section[i]);
				for(let k=0;k<img.length;k++){
					img[k].src=img[k].getAttribute(picurl);
				}
			}
		}
		if(scroll.scrollTop>=num){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},donghuaTime,function(){
					flagx=true;
				})
			}
			btnbox.style.display="block";
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			btnbox.style.display="none";

			}
	}
}



// 事件触发后执行一次
// obj事件源 （对象）
// shijian事件类型（例如"click"）
// fn 事件执行程序

	function one(obj,shijian,fn){
		//添加第一个type事件fn
		obj.addEventListener(shijian,fn,false);
		//添加第er个type清除事件clear，
		obj.addEventListener(shijian,clear,false);
		function clear(){
			alert(2);
			// 清除type事件中的fn
			obj.removeEventListener(shijian,fn,false);
			// 清除type事件中的clear
			obj.removeEventListener(shijian,clear,false);
		}
	}



// 拖拽
	// hezi要拖拽的块
	function tuozhuai(hezi){
			const box=$(hezi);
			let pk=document.documentElement.clientWidth;
			let pg=document.documentElement.clientHeight;
			for(let i=0;i<box.length;i++){
				box[i].style.position="absolute";
				const boxW=box[i].offsetWidth;
				const boxH=box[i].offsetHeight;
				box[i].addEventListener("mousedown",down,false);
				let x;
				let y;
				let boxx;
				let boxy;
				window.onresize=function(){
					pk=document.documentElement.clientWidth;
					pg=document.documentElement.clientHeight;
				}
				function down(e){
					x=e.clientX;
					y=e.clientY;
					boxx=box[i].offsetLeft;
					boxy=box[i].offsetTop;
					window.addEventListener("mousemove",move,false);
					window.addEventListener("mouseup",up,false);
					
				}
				function up(){
					window.removeEventListener("mousemove",move,false);
					window.removeEventListener("mouseup",up,false);
				}
				function move(e){
					let mx=e.clientX;
					let my=e.clientY;
					let chax=mx-x;
					let chay=my-y;
					let lefts=boxx+chax;
					if(lefts<=0){
						lefts=0;
					}else if(lefts>=pk-boxW){
						lefts=pk-boxW;
					}
					let tops=boxy+chay;
					if(tops<=0){
						tops=0;
					}else if(tops>=pg-boxH){
						tops=pg-boxH;
					}
					box[i].style.left=lefts+"px";
					box[i].style.top=tops+"px";
				}
			}
		}

