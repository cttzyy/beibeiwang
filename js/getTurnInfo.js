function jsonInfo(str){
	    console.log(11);
		$.ajax({
		type:"get",
		url:"http://127.0.0.1/beibeiwang/json/index2.json",
		async:true,
		success:function(json){
			var html="";
			for(var attr in json){
				if(attr==str){
					for(var i=0; i<json[attr].length;i++){
						console.log(2);
						html+=` <a href="#">
							<img src="img/${json[attr][i].src}" />
							<div class="info-mit">
								<p>${json[attr][i].info}</p>					
									<span>￥${json[attr][i].price}</span>
									<span>￥${json[attr][i].priceold}</span>
							</div>
						</a>
							
	    					`
						$(".con1").html(html);
					}
						
				} 
				
			}
					
		 }
      })
	}