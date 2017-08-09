$(function(){
	const sence=$(".sence")[0];
	const zhe=$(".zhe")[0];
	const aniu=$(".aniu")[0];
	const zi=$("p")[0];
	const fenshu=$(".fenshu span")[0];
	const fenshuB=$(".fenshu")[0];
	const zanting=$(".zanting")[0];
	const jixv=$(".jixv")[0];
	const zuigaofen=$(".zuigao")[0];
	const zuigao=$(".zuigao span")[0];
	const cx=$(".cx")[0];
	let tcs1=new tcs(sence,aniu,fenshu,fenshuB,zanting,jixv,zhe,zuigaofen,zuigao,cx);
})



class tcs{
	constructor(sence,aniu,fenshu,fenshuB,zanting,jixv,zhe,zuigaofen,zuigao,cx){
		this.sence=sence;
		this.zhe=zhe;
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		this.shefx="right";
		this.shekeyflag=true;
		this.aniu=aniu;
		this.jixv=jixv;
		this.fenshu=fenshu;
		this.zanting=zanting;
		this.fenshuB=fenshuB;
		this.zuigaofen=zuigaofen;
		this.zuigao=zuigao;
		this.cx=cx;
		this.kaishi();
	}
	kaishi(){
		let that=this;
		this.aniu.onclick=function(){
			that.zhe.style.display="none";
			that.fenshuB.style.display="block";
			that.zanting.style.display="block";
			that.jixv.style.display="block";
			that.cx.style.display="block";
			that.zuigaofen.style.display="block";
			that.play();
		}

	}
	play(){
		if(Number(localStorage.zuigao)){
			this.zuigao.innerHTML=localStorage.zuigao;
			this.maxfen=this.zuigao.innerHTML;
		}else{
			this.maxfen=0;
			this.zuigao.innerHTML=this.maxfen;
		}
		// 建场景
		this.creatSence();
		// 创建蛇
		this.creatShe();
		// 蛇跑
		this.shepao();
		// she方向
		this.control();
		// 食物
		this.food();
	}
	// 创建场景
	creatSence(){
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
	// 创建蛇
	creatShe(){
		for(let i=0;i<this.she.length;i++){
			this.element(this.she[i]).classList.add("she");
		}
	}
	// 随机产生食物的位置创造食物
	food(){
		this.foodwz={};
		this.foodwz.x=Math.floor(Math.random()*20);
		this.foodwz.y=Math.floor(Math.random()*20);
		this.element(this.foodwz).classList.add("food");
	}
	// 重新开始
	cxks(){
		let that=this;
		this.cx.onclick=function(){
			clearInterval(that.t);
			for(let i=0;i<that.she.length;i++){
				that.element(that.she[i]).classList.remove("she");
			}
			that.element(that.foodwz).classList.remove("food");
			that.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
			that.fenshu.innerHTML=0;
			that.sence.innerHTML="";
			localStorage.zuigao=that.maxfen;
			that.shefx="right";
			that.play();
		}
	}
	// 蛇移动
	shepao(){
		let that=this;
		this.t=setInterval(move,300);
		function move(){
			let newtou;
			// 方向不同，新蛇头不同
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
			// 出了边界，游戏结束
			if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19){
				// alert("GAME OVER");
				that.gameover();
				return;
			}
			// 碰到自己，游戏结束
			for(let i=0;i<that.she.length;i++){
				if(newtou.x==that.she[i].x&&newtou.y==that.she[i].y){
					// alert("GAME OVER");
					that.gameover();
					return;
				}
			}
			that.she.push(newtou);
			let oldwei;
			// 吃食物
			if(newtou.x==that.foodwz.x&&newtou.y==that.foodwz.y){
				that.element(that.foodwz).classList.remove("food");
				that.creatShe();
				that.food();
				that.fenshu.innerHTML=that.she.length-3;

				// if(that.maxfen){
					if(that.maxfen<that.fenshu.innerHTML){
						
						that.maxfen=that.fenshu.innerHTML;
						localStorage.zuigao=that.maxfen;
					}
				// }
				// localStorage.zuigao=this.maxfen;
			}else{
				oldwei=that.she.shift(that.she[0]);
				that.removewei(oldwei);
				that.creatShe();
			}
			that.zan();
			that.cxks();
			that.shekeyflag=true;
		}
		
	}
	// 暂停
	zan(){
		let that=this;
		this.zanting.onclick=function(){
			clearInterval(that.t);
		}
		this.ji();
	}
	// 继续
	ji(){
		let that=this;
		this.jixv.onclick=function(){
			that.shepao();
		}
	}
	// 除掉尾巴
	removewei(oldwei){
		this.element(oldwei).classList.remove("she");
	}
	// 键盘事件控制蛇移动方向
	control(){
		let that=this;
		window.onkeydown=function(e){
			if(that.shekeyflag){
				that.shekeyflag=false;
				if(e.keyCode==37){
				if(that.shefx!="right"){
					that.shefx="left";
					}
				}
				if(e.keyCode==38){
					if(that.shefx!="bottom"){
						that.shefx="top";
					}
				}
				if(e.keyCode==39){
					if(that.shefx!="left"){
						that.shefx="right";
					}
				}
				if(e.keyCode==40){
					if(that.shefx!="top"){
						that.shefx="bottom";
					}
				}
			}
			
		}
	}
	// 游戏结束
	gameover(){
		for(let i=0;i<this.she.length;i++){
			this.element(this.she[i]).classList.remove("she");
		}
		this.element(this.foodwz).classList.remove("food");
		this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
		this.fenshu.innerHTML=0;
		clearInterval(this.t);
		this.sence.innerHTML="";
		this.zhe.style.display="block";
		localStorage.zuigao=this.maxfen;
		this.shefx="right";
		alert("游戏结束");
	}
	delet(){
		// 建场景
		this.creatSence=null;
		// 创建蛇
		this.creatShe=null;
		// 蛇跑
		this.shepao=null;
		// she方向
		this.control=null;
		// 食物
		this.food=null;
	}

	// 获取id
	element(weizhi){
		let id=weizhi.x+"-"+weizhi.y;
		return document.getElementById(id);
	}
}