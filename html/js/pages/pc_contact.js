$(function() {
	var numOnlyCheck = /^\d+$/;
	var emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var whitespace = / /g;
	var specialChar = /[^0-9a-zA-Z]/;
	var phoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	var zipCode = /^\d{5}$|^\d{5}-\d{4}$/;
	var type = "";

	$("#submit-sell").click(function() {
		$("span.help-inline").remove();

		if ($("#name").val() == "Name") {
			$("#name").focus();
			$("#name").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#email").val() == "Email") {
			$("#email").focus();
			$("#email").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#phone").val() == "Phone Number") {
			$("#phone").focus();
			$("#phone").parent().append('<span class="help-inline">This field is required!</span>');

		} else if ($("#year").val() == "Year") {
			$("#year").focus();
			$("#year").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#make").val() == "Make") {
			$("#make").focus();
			$("#make").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#model").val() == "Model") {
			$("#model").focus();
			$("#model").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#mileage").val() == "Mileage") {
			$("#mileage").focus();
			$("#mileage").parent().append('<span class="help-inline">This field is required!</span>');
		} else {
			$("span.help-inline").remove();
			if (validate($("#email").val(), emailCheck)) {
				$("#email").parent().append('<span class="help-inline">Invalid email format!</span>');
				return false;
			}

			if (validate($("#phone").val(), phoneNumber)) {
				$("#phone").parent().append('<span class="help-inline">Invalid phone format!</span>');
				return false;
			}

			if (validate($("#year").val(), numOnlyCheck) || $("#year").val() < '1990') {
				$("#year").parent().append('<span class="help-inline">Year number must be over 1990!</span>');
				return false;
			}

			if (validate($("#mileage").val(), numOnlyCheck)) {
				$("#mileage").parent().append('<span class="help-inline">Enter the number!</span>');
				return false;
			}

			insert_customer_action($("#name").val(), $("#email").val(), $("#phone").val(), $("#city").val(), $("#state").val(), $("#year").val(), $("#make").val(), $("#model").val(), $("#mileage").val(), $("#color").val(), $("#comments").val(), $("#finder-options").val(), type = 1);
		}
	});

	$("#submit-locator").click(function() {
		$("span.help-inline").remove();

		if ($("#name").val() == "Name") {
			$("#name").focus();
			$("#name").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#email").val() == "Email") {
			$("#email").focus();
			$("#email").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#phone").val() == "Phone Number") {
			$("#phone").focus();
			$("#phone").parent().append('<span class="help-inline">This field is required!</span>');

		} else if ($("#year").val() == "Year") {
			$("#year").focus();
			$("#year").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#make").val() == "Make") {
			$("#make").focus();
			$("#make").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#model").val() == "Model") {
			$("#model").focus();
			$("#model").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#mileage").val() == "Mileage") {
			$("#mileage").focus();
			$("#mileage").parent().append('<span class="help-inline">This field is required!</span>');
		} else {
			$("span.help-inline").remove();
			if (validate($("#email").val(), emailCheck)) {
				$("#email").parent().append('<span class="help-inline">Invalid email format!</span>');
				return false;
			}

			if (validate($("#phone").val(), phoneNumber)) {
				$("#phone").parent().append('<span class="help-inline">Invalid phone format!</span>');
				return false;
			}

			if (validate($("#year").val(), numOnlyCheck) || $("#year").val() < '1990') {
				$("#year").parent().append('<span class="help-inline">Year number must be over 1990!</span>');
				return false;
			}

			if (validate($("#mileage").val(), numOnlyCheck)) {
				$("#mileage").parent().append('<span class="help-inline">Enter the number!</span>');
				return false;
			}
			insert_customer_action($("#name").val(), $("#email").val(), $("#phone").val(), $("#city").val(), $("#state").val(), $("#year").val(), $("#make").val(), $("#model").val(), $("#mileage").val(), $("#color").val(), $("#comments").val(), $("#finder-options").val(), type = 2);
		}
	});

	$("#submit-contact").click(function() {
		if ($("#name").val() == "Name") {
			$("#name").focus();
			$("#name").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#email").val() == "Email") {
			$("#email").focus();
			$("#email").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#phone").val() == "Phone Number") {
			$("#phone").focus();
			$("#phone").parent().append('<span class="help-inline">This field is required!</span>');

		} else {
			$("span.help-inline").remove();
			if (validate($("#email").val(), emailCheck)) {
				$("#email").parent().append('<span class="help-inline">Invalid email format!</span>');
				return false;
			}

			if (validate($("#phone").val(), phoneNumber)) {
				$("#phone").parent().append('<span class="help-inline">Invalid phone format!</span>');
				return false;
			}

			var wk_data = {
				"name" : $("#name").val(),
				"email" : $("#email").val(),
				"phone" : $("#phone").val(),
				"comment" : $("#comments").val()
			};

			$.ajax({
				type : "POST",
				url : "/ajax/insert_contact_us.php",
				data : wk_data,
				dataType : "json",
				cache : false,
				success : function(data) {
					if (data.status == 1) {
						url = "contact";
						setTimeout("redirect_home(\'" + url + "\')", 1000);
					}
				},
				error : function(request, status, thrown) {
					//showDialog("Error !","#FF0033","Please Try again!");
				}
			});
		}
	});
});

$(document).ready(function() {	

});
