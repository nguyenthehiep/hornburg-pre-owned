function callKeyDownEvent() {
	$("input.est-form-input").keydown(function(event) {
		// Allow: backspace, delete, tab, escape, and enter
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
		// Allow: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Allow: home, end, left, right
		(event.keyCode >= 35 && event.keyCode <= 39)) {
			// let it happen, don't do anything
			return;
		} else {
			// Ensure that it is a number and stop the keypress
			if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault();
			}
		}
	});
}


$(document).ready(function() {
	$("#features-print").click(function() {
		window.print();
	});
	var price = 0;
	var monthly = 0;
	var downPayMent= 0;
	var arp = "";
	var period = "";
	var result = "";
	$("input.est-form-input").keyup(function(event) {
		price = parseFloat($("#est-price").val());		
		arp = parseFloat($("#est-apr").val());
		period = parseInt($("#select-mons").val());
		downPayMent = parseFloat($("#est-downpayment").val());
		
		if (!downPayMent) {downPayMent = 0;}			
		if (!price) {price = 0;}		
				
		if (arp != "") {	
			result = calEstimate(price, downPayMent, arp, period);
			$("#est-result").val("$ " + result.toFixed(2));	
		}
	});
	
	$("#select-mons").change(function() {
		price = parseFloat($("#est-price").val());
		downPayMent = parseFloat($("#est-downpayment").val());
		arp = parseFloat($("#est-apr").val());
		period = parseInt($("#select-mons").val());
		
		if (!downPayMent) {downPayMent = 0;}			
		if (!price) {price = 0;}
		
		result = calEstimate(price, downPayMent, arp, period);
		$("#est-result").val("$ " + result.toFixed(2));		
	});

	$("input.est-form-input").keydown(function(event) {
		// Allow: backspace, delete, tab, escape, and enter
		if (event.keyCode == 190 || event.keyCode == 110) {
			return;
		} else {
			if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
			// Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) ||
			// Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)) {
				// let it happen, don't do anything
				return;
			} else {
				// Ensure that it is a number and stop the keypress
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault();
				}
			}
		}

	});
	////////////////
	$("input.est-monthly-form-input").keyup(function(event) {
		monthly = parseFloat($("#est-monthly-price").val());		
		arp = parseFloat($("#est-monthly-apr").val());
		period = parseInt($("#select-monthly-mons").val());
		downPayMent = parseFloat($("#est-monthly-downpayment").val());
		
		if (!downPayMent) {downPayMent = 0;}			
		if (!price) {price = 0;}		
				
		if (arp != "") {	
			result = calEstimateReverse(monthly, downPayMent, arp, period);
			$("#est-monthly-result").val("$ " + result.toFixed(2));	
		}
	});
	
	$("#select-monthly-mons").change(function() {
		monthly = parseFloat($("#est-monthly-price").val());		
		arp = parseFloat($("#est-monthly-apr").val());
		period = parseInt($("#select-monthly-mons").val());
		downPayMent = parseFloat($("#est-monthly-downpayment").val());
		
		if (!downPayMent) {downPayMent = 0;}			
		if (!price) {price = 0;}
		if (arp != "") {	
			result = calEstimateReverse(monthly, downPayMent, arp, period);
			$("#est-monthly-result").val("$ " + result.toFixed(2));	
		}	
	});

	//////////////
	$("input.est-monthly-form-input").keydown(function(event) {
		// Allow: backspace, delete, tab, escape, and enter
		if (event.keyCode == 190 || event.keyCode == 110) {
			return;
		} else {
			if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
			// Allow: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) ||
			// Allow: home, end, left, right
			(event.keyCode >= 35 && event.keyCode <= 39)) {
				// let it happen, don't do anything
				return;
			} else {
				// Ensure that it is a number and stop the keypress
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault();
				}
			}
		}

	});
});
