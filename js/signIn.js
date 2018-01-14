//滑块向右一定 滑动的距离就是隐藏的div的长度
//当滑块没有到到最右边，则
//1.滑块按下 滑块移动 移动的距离 
function Drag(){
this.pullgroup=document.getElementsByClassName("pull-group")[0];	
this.pullBox=document.getElementsByClassName("pull-box")[0];
this.rightbox=document.getElementsByClassName("right-box")[0];
this.leftbox=document.getElementsByClassName("left-box")[0];
this.main=document.getElementById("sign-main-content");
	this.pullBox.onmousedown = function(evt){
		this.fnDown(evt);
	}.bind(this);
}
Drag.prototype.fnDown = function(evt){
	let e = evt || window.event;
	this.disX = e.offsetX;
	let target = e.target || e.srcElement;
		document.onmousemove = function(evt){
			this.fnMove(evt);
		}.bind(this);
		document.onmouseup =  function(evt){
			this.fnUp(evt);
		}.bind(this);
		document.ondragstart = function(){
			return false;
		}
	
}

Drag.prototype.fnMove = function(evt){
	let e = evt || window.event;
	let left =  e.pageX-this.disX-this.pullgroup.offsetLeft-this.main.offsetLeft;
	
	//设置边界
	if(left <0){
		left = 0;
	}else if(left >= this.pullgroup.offsetWidth - this.pullBox.offsetWidth){
		left = this.pullgroup.offsetWidth - this.pullBox.offsetWidth;
	}
	this.pullBox.style.left = left + "px";
	this.pullBox.style.top = 0 + "px";
	
	this.width=this.pullBox.offsetLeft;
	this.leftbox.style.width=this.width+"px";

	
	if(left == this.pullgroup.offsetWidth - this.pullBox.offsetWidth){
		
		$(this.pullgroup).css("background","#7AC23C");
		$(".comfirm").css("display","inline");
		$(".drags").css({"display":"none"});
	}
	
}
Drag.prototype.fnUp = function(evt){
	document.onmousemove = null;
	if(parseInt(this.pullBox.style.left)==this.pullgroup.offsetWidth - this.pullBox.offsetWidth){
		this.pullBox.style.left ==this.pullgroup.offsetWidth - this.pullBox.offsetWidth+"px"
	}else{
		this.pullBox.style.left = 0 ;
	this.leftbox.style.width=0+"px";
	}
	
	
}
