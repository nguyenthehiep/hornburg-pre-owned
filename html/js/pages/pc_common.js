$(document).ready(function(){
	var list = $("#navbar li");
	$.each(list,function(index,item){
		item = $(item);
		item.removeClass("active");
	});		
		
	switch (flat){
		case "locator":
			$(".locator-vin").addClass("active");
			break;
		case "sell":
			$(".sell-vin").addClass("active");
			break;
		case "direction":
			$(".direction-vin").addClass("active");
			break;
		case "inventory":
			$(".inventory-vin").addClass("active");
			break;
		case "contact":
			$(".contact-vin").addClass("active");
			break;
		case "finance":
		$(".financing-vin").addClass("active");
			break;
		default :
			$(".home-vin").addClass("active");
			break;
	}
	$("#navbar li").live('click',function(){
		var list = $("#navbar li");
		$.each(list,function(index,item){
			item = $(item);
			item.removeClass("active");
		});
		
		$(this).addClass("active");
	});	
	
	$("li.inventory-vin").bind("mouseenter",function(){
		$("#inventory-menus").show();
	}).bind("mouseleave",function(){
		$("#inventory-menus").hide();
	});
	
	$("li.financing-vin").bind("mouseenter",function(){
		$("#financing-menus").show();
	}).bind("mouseleave",function(){
		$("#financing-menus").hide();
	});
	
	
});

function redirect_home(url){
	location.href = "/" + url;
}

function validate(v, pattern) {
	return !pattern.test(v);
}

function insert_customer_action(ctmr_name, ctmr_email, ctmr_phone, ctmr_city, ctmr_state, ctmr_year, ctmr_make, ctmr_model, ctmr_mileage, ctmr_color, ctmr_comments, ctmr_options, ctmr_type , carid){
	var wk_data = {
			"name": ctmr_name,
			"email":ctmr_email,
			"phone":ctmr_phone,
			"city":ctmr_city,
			"state":ctmr_state,
			"year":ctmr_year,
			"make":ctmr_make,
			"model":ctmr_model,
			"mileage":ctmr_mileage,
			"color":ctmr_color,
			"comment":ctmr_comments,
			"options":ctmr_options,
			"type" : ctmr_type
	};	
	
	$.ajax({
		type: "POST",
		url: "/ajax/insert_customer_info.php",
		data:wk_data,
		dataType: "json",
		cache: false,
		success: function(data){
			if(data.status == 1){
				if(ctmr_type == 1){
					url = "sell";
				}else if (ctmr_type == 2){
					url = "locator";
				}else if (ctmr_type == 4 || ctmr_type == 5 || ctmr_type == 6){
					url = "inventory/detail/"+carid;
				}
				
				setTimeout("redirect_home(\'" + url + "\')", 1000);
			}
		},
		error: function(request, status, thrown){
			//showDialog("Error !","#FF0033","Please Try again!");				
		}
	});
}

function CommaFormatted(amount) {
	amount = amount.replace(/^0+/, '');
	amount += '';
	x = amount.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}


function calEstimate(price, downPayment, arp, period) {
	price = price - downPayment;
	
	arp = parseFloat(arp / 1200);
	var temp1 = price * arp * Math.pow(1 + arp, period);

	var temp2 = Math.pow(1 + arp, period) - 1;
	var result = temp1 / temp2;
	return result;
}

function calEstimateReverse(monthly, downPayment, arp, period){
	arp = parseFloat(arp / 1200);
	var temp1 = arp * Math.pow(1 + arp, period);
	var temp2 = Math.pow(1 + arp, period) - 1;
	var temp3 = temp2 * monthly;
	var result = temp3 / temp1;
	result = result + downPayment;
	return result;
	
}
