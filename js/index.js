
//悬顶
function  HeadSide(){
	var $oheadSide=$("#head-side");
	document.onscroll=function(e){
		var getscrolltop=this.getscroll();
		  if(getscrolltop>=160){
		  	$oheadSide.css("display","block");
		  }else if(getscrolltop<160){
		  		$oheadSide.css("display","none");
		  }
	}.bind(this)
}
HeadSide.prototype.getscroll=function(){
 var scrollTop=0;   
 if(document.documentElement&&document.documentElement.scrollTop){   
        scrollTop=document.documentElement.scrollTop;   
    }else if(document.body){   
        scrollTop=document.body.scrollTop;   
    }   
    return scrollTop;   
}   


//logo
function Heada(){
	var $logoa=$(".logo-a");
	document.onmouseenter=function(){
		$logoa.css("border-bottom-style","none")
	}
}




//商品分类
function salelist(){
	var $saleItem=$(".sale-item");
	var $listItem=$("#list-item");
	$saleItem.click(function(){
		$listItem.css("display","block");
	});
	$listItem.children("ul").children("li").mouseover(function(){
			$(this).children("a").css({"color":"#ff506b"});;
			$(this).css({"background":"#FFF"})
	});
	$listItem.children("ul").children("li").mouseleave(function(){
			$(this).children("a").css({"color":"#000"});;
			$(this).css({"background":"#ccc"});
			
	})
	$listItem.mouseleave(function(){
		$listItem.css("display","none");
	})
}


//今日优选

function todaygood(){
	var $brandTop=$(".brand-top");
	$brandTop.children("li").eq(1).mouseover(function(){
		$brandTop.children("li").children("a").removeClass("linebottom");
		$brandTop.children("li").eq(1).children("a").addClass("linebottom");
		$brandTop.children("li").eq(1).children("a").css({"font-weight":600});
		new jsonright("toadygood");
		
	});

	$brandTop.children("li").eq(1).mouseleave(function(){
		$brandTop.children("li").eq(1).children("a").css({"font-weight":100});
});
	$brandTop.children("li").eq(0).mouseover(function(){
		$brandTop.children("li").children("a").removeClass("linebottom");
		$brandTop.children("li").eq(0).children("a").addClass("linebottom");
		$brandTop.children("li").eq(0).children("a").css({"font-weight":600});
		new jsonright("toadyfun");
		
	});

	$brandTop.children("li").eq(0).mouseleave(function(){
		$brandTop.children("li").eq(0).children("a").css({"font-weight":100});
		
	});

}


//热卖排行榜
function hotSort(){
	var $brandinfo=$(".brand2-box").children("ul");
	console.log($brandinfo);
	$brandinfo.children("li").eq(0).mouseover(function(){
		new jsonInfo("good1");
		
	});
	$brandinfo.children("li").eq(1).mouseover(function(){
		new jsonInfo("good2");
		
	});

	$brandinfo.children("li").eq(2).mouseover(function(){
		new jsonInfo("good3");
		
	});

	$brandinfo.children("li").eq(3).mouseover(function(){
		new jsonInfo("good4");
		
	});
}



//右边栏

function Rightside(){
	
	var $sideRight=$("#side-right");
	var $sideBuyBox=$(".side-buy-box");
	var $sideAppInfo=$(".side-app-info");
	//li a 1 划入的时候
	$sideRight.children("ul").children("li").eq(0).children("a").mouseover(function(){
		$sideBuyBox.css({"display":"block","opacity":"1",});
		$sideRight.children("ul").children("li").eq(0).children("a").css({"background":"#ff647c","opacity":"1","color":"#fff"});
		$sideBuyBox.mouseover(function(){
			$sideBuyBox.css("display","block");
			
		});
		$sideBuyBox.mouseleave(function(){
			$sideBuyBox.css("display","none");
			$sideRight.children("ul").children("li").eq(0).children("a").css({"background":"#fff","opacity":"0.7","color":"#ff647c"});
		});
		
	});
	
	$sideRight.children("ul").children("li").eq(0).children("a").mouseleave(function(){
		$sideBuyBox.css("display","none");
		$sideRight.children("ul").children("li").eq(0).children("a").css({"background":"#fff","opacity":"0.7","color":"#ff647c"});
		
	});
	
$sideRight.children("ul").children("li").eq(1).children("a").mouseover(function(){
		$sideAppInfo.css("display","block");
		$sideRight.children("ul").children("li").eq(1).children("a").css({"background":"#ff647c","opacity":"1","color":"#fff"});
		$sideAppInfo.mouseover(function(){
			$sideAppInfo.css("display","block");	
		
		});
		$sideAppInfo.mouseleave(function(){
			$sideAppInfo.css("display","none");
			$sideRight.children("ul").children("li").eq(1).children("a").css({"background":"#fff","opacity":"0.7","color":"#ff647c"});
		});
});

$sideRight.children("ul").children("li").eq(1).children("a").mouseleave(function(){
		$sideAppInfo.css("display","none");
		$sideRight.children("ul").children("li").eq(1).children("a").css({"background":"#fff","opacity":"0.7","color":"#ff647c"});
		
	});
	
	
	$sideRight.children("ul").children("li").eq(2).children("a").mouseover(function(){
		$sideRight.children("ul").children("li").eq(2).children("a").css({"opacity":"1"});

		
	});
	
	$sideRight.children("ul").children("li").eq(2).children("a").mouseleave(function(){
		$sideRight.children("ul").children("li").eq(2).children("a").css({"opacity":"0.7"});
		
	});
	$sideRight.children("ul").children("li").eq(3).children("a").mouseover(function(){
		$sideRight.children("ul").children("li").eq(3).children("a").css({"opacity":"1"});

		
	});
	
	$sideRight.children("ul").children("li").eq(3).children("a").mouseleave(function(){
		$sideRight.children("ul").children("li").eq(3).children("a").css({"opacity":"0.7"});
		
	});
	
}
