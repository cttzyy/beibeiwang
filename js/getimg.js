function jsonright(str){
	    
		$.ajax({
		type:"get",
		url:"http://127.0.0.1/beibeiwang/json/index1.json",
		async:true,
		success:function(json){
			var html="";
			for(var attr in json){
				if(attr==str){
					for(var i=0; i<json[attr].length;i++){
						html+=` <li><a href="${json[attr][i].href}"> <img src="img/${json[attr][i].src}"/><div class="bg-opc"></div></a>
							</li>
							
	    					`
						$(".todayfun").html(html);
					}
						
				} 
				
			}
					
		 }
      })
	}