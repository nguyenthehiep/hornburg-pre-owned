$(document).ready(function(){
	
		var list = $("#navbar li");
		$.each(list,function(index,item){
			item = $(item);
			item.removeClass("active");
		});
		
		$(".locator-vin").addClass("active");
	
});
 