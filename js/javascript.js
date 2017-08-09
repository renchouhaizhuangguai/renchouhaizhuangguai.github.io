function $(selector,ranger=document){

	  if(typeof selector == 'string'){
	  	//获取
	  	let select=selector.trim();
	  	let first=select.charAt(0);
		 if(first=='.'){
			  return ranger.getElementsByClassName(select.substring(1));
		 }else if(first=='#'){
			  return document.getElementById(select.substring(1));
		 }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
		 	  return ranger.getElementsByTagName(select);
		 }else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(select)){
		 	  return ranger.createComment(select.slice(1,-1));
		 }

		 }

		 if(typeof selector=='function'){
		 addEvent(window,'load',selector);
		}
	}


        //使用addEvent直接可以添加事件，第一个参数是操作的元素
        //第二个是事件类型，第三个是所发生的事件
		 function addEvent(obj,type,fn){
		 	obj.addEventListener(type,fn,false);
		 }



        //滚轮事件
		function mousewheel(obj,upfn,downfn){
			obj.addEventListener("mousewheel",fnn,false);
			function fnn(e){
				e.preventDefault();
				if(e.wheelDelta==120||e.wheelDelta==160||e.wheelDelta==180){
					upfn();
				}else if(e.wheelDelta==-120||e.wheelDelta==-160||e.wheelDelta==-180){
					downfn();
				}
			}
		}

Node.prototype.insertAfter=function(ele){
	let next=this.nextElementSibling
	//获取父节点里面元素的下一个元素节点
	let parent=this.parentNode;
	//获取ele的父亲节点
	parent.insertBefore(ele,next);
	//使ele元素节点插入到父节点的第一个元素的后面
}
Node.prototype.pretend=function(ele){
	let first=this.firstElementChild第一个;
	//获取获取父节点里面元素的下一个元素节点
	this.insertBefore(ele,first);
	//使ele插入到第一个节点的前面
}
Node.prototype.appendTo=function(ele){
	ele.appendChild(this);
	//使一个元素放到一个父元素里面
}

	