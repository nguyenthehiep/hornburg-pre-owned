$(function() {( function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id))
				return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	var js, fjs = document.getElementById("tweeter-script");
	if (!document.getElementById("twitter-wjs")) {
		js = document.createElement("script");
		js.id = "twitter-wjs";
		js.src = "//platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	}

	var numOnlyCheck = /^\d+$/;
	var emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var whitespace = / /g;
	var specialChar = /[^0-9a-zA-Z]/;
	var phoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	var zipCode = /^\d{5}$|^\d{5}-\d{4}$/;

	//load_carfax_info();

	$("#moreinfo").click(function() {
		$("span.help-inline").remove();
		if ($("#name_more").val() == "" || $("#name_more").val() == "Name") {
			$("#name_more").focus();
			$("#name_more").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#email_more").val() == "" || $("#email_more").val() == "Email") {
			$("#email_more").focus();
			$("#email_more").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#phone_more").val() == "" || $("#phone_more").val() == "Phone Number") {
			$("#phone_more").focus();
			$("#phone_more").parent().append('<span class="help-inline">This field is required!</span>');

		} else {
			$("span.help-inline").remove();
			if (validate($("#email_more").val(), emailCheck)) {
				$("#email_more").parent().append('<span class="help-inline">Invalid email format!</span>');
				return false;
			}

			if (validate($("#phone_more").val(), phoneNumber)) {
				$("#phone_more").parent().append('<span class="help-inline">Invalid phone format!</span>');
				return false;
			}

			if ($("#comments_more").val() == "Additional Comments") {
				$("#comments_more").val() = "";
			}

			insert_customer_action($("#name_more").val(), $("#email_more").val(), $("#phone_more").val(), "", "", $("#hidden_year").val(), $("#hidden_make").val(), $("#hidden_model").val(), "", "", $("#comments_more").val(), "", type = 4, $("#hidden_carid").val());
		}
	});

	$("#shareinfo").click(function() {
		$("span.help-inline").remove();

		if ($("#name_share").val() == "" || $("#name_share").val() == "Name") {
			$("#name_share").focus();
			$("#name_share").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#email_share").val() == "" || $("#email_share").val() == "Email") {
			$("#email_share").focus();
			$("#email_share").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#phone_share").val() == "" || $("#phone_share").val() == "Phone Number") {
			$("#phone_share").focus();
			$("#phone_share").parent().append('<span class="help-inline">This field is required!</span>');

		} else if ($("#fname").val() == "" || $("#fname").val() == "Name of Friends") {
			$("#fname").focus();
			$("#fname").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#femail").val() == "" || $("#femail").val() == "Email of Friends") {
			$("#femail").focus();
			$("#femail").parent().append('<span class="help-inline">This field is required!</span>');

		} else {
			$("span.help-inline").remove();
			if (validate($("#email_share").val(), emailCheck)) {
				$("#email_share").parent().append('<span class="help-inline">Invalid email format!</span>');
				return false;
			}

			if (validate($("#phone_share").val(), phoneNumber)) {
				$("#phone_share").parent().append('<span class="help-inline">Invalid phone format!</span>');
				return false;
			}

			if (validate($("#femail").val(), emailCheck)) {
				$("#femail").parent().append('<span class="help-inline">Invalid email format!</span>');
				return false;
			}

			if ($("#comments_share").val() == "Add Comments") {
				$("#comments_share").val() = "";
			}

			insert_customer_friend($("#fname").val(), $("#femail").val(), $("#name_share").val(), $("#email_share").val(), $("#phone_share").val(), $("#hidden_year").val(), $("#hidden_make").val(), $("#hidden_model").val(), $("#comments_share").val(), $("#hidden_carid").val());

			insert_customer_action($("#name_share").val(), $("#email_share").val(), $("#phone_share").val(), "", "", $("#hidden_year").val(), $("#hidden_make").val(), $("#hidden_model").val(), "", "", $("#comments_share").val(), "", type = 5, $("#hidden_carid").val());

		}
	});

	$("#testdrive").click(function() {
		$("span.help-inline").remove();

		if ($("#name_test").val() == "" || $("#name_test").val() == "Name") {
			$("#name_test").focus();
			$("#name_test").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#email_test").val() == "" || $("#email_test").val() == "Email") {
			$("#email_test").focus();
			$("#email_test").parent().append('<span class="help-inline">This field is required!</span>');
		} else if ($("#phone_test").val() == "") {
			$("#phone_test").focus();
			$("#phone_test").parent().append('<span class="help-inline">This field is required!</span>');

		} else if ($("#input-prepend-date").children('input[name="date"]').val() == "" || $("#input-prepend-date").children('input[name="date"]').val() == "Select a Date!") {
			$("#input-prepend-date").append('<span class="help-inline">This field is required!</span>');
			//$("#input-prepend-date").children('input[name="date"]').append('<span class="help-inline">This field is required!</span>');

		} else {
			$("span.help-inline").remove();
			var date = $("#input-prepend-date").children('input[name="date"]').val();
			parsedate = date.split('/');
			date = [parsedate[2], parsedate[0], parsedate[1]].join('/');

			if (validate($("#email_test").val(), emailCheck)) {
				$("#email_test").parent().append('<span class="help-inline">Invalid email format!</span>');
				return false;
			}

			if (validate($("#phone_test").val(), phoneNumber)) {
				$("#phone_test").parent().append('<span class="help-inline">Invalid phone format!</span>');
				return false;
			}

			if ($("#time").val() == "Enter a Time (ie. 12:00pm)") {
				$("#time").val() = "";
			}

			insert_schedule_info($("#time").val(), date, $("#name_test").val(), $("#email_test").val(), $("#phone_test").val(), $("#hidden_year").val(), $("#hidden_make").val(), $("#hidden_model").val(), $("#comments_test").val());

			insert_customer_action($("#name_test").val(), $("#email_test").val(), $("#phone_test").val(), "", "", $("#hidden_year").val(), $("#hidden_make").val(), $("#hidden_model").val(), "", "", $("#comments_test").val(), "", type = 6, $("#hidden_carid").val());
		}
	});

});

function loadSlideImg(data, page) {
	var html_o = "";
	for (var i = 0; i < data.length; i = i + 4) {
		if (i == page) {
			html_o += '<div class="slide-images slide-images-active">';
		} else {
			html_o += '<div class="slide-images slide-images-inactive">';
		}

		for (var j = i; j < i + 4; j++) {
			if (data[j]) {
				html_o += '<a href="' + data[j] + '" class="fancybox" rel="group1"><div class="detail-slide-image">';
				html_o += '<img src="' + data[j] + '" />';
				html_o += '</div></a>';
			} else {
				html_o += '<a href="#showLargeImg" class=""><div class="detail-slide-image">';
				//html_o += '<img src="http://images.autosweet.com/2299/JM1DE1HZ7B0119890_08_640.jpg">';
				html_o += '</div></a>';
			}
		}
		html_o += '</div>';
	}

	$("#holder-slide-images").html(html_o);
	$('.fancybox').fancybox();
}

function showSlideImg(page) {
	var list = $("div.slide-images");
	for (var i = 0; i < list.length; i++) {
		var item = $(list[i]);
		if (i == page) {
			item.removeClass("slide-images-inactive").addClass("slide-images-active");
		} else {
			item.removeClass("slide-images-active").addClass("slide-images-inactive");
		}
	}
}

function datepicker(){
	 $( ".datepicker" ).datepicker();
}
$(document).ready(function() {
	$("#a-test-drive").click(function(){
		$("#test-date").datepicker({
				minDate : 0
			});
	});
	$('.fancybox').fancybox();
	
	
	
	var arrayUrl = "";
	var wk_data = {
		"dealer_id" : dealer_id
	};
	$.ajax({
		type : "POST",
		url : "/ajax/load_slider_info.php",
		data : wk_data,
		dataType : "json",
		cache : false,
		success : function(data) {

			showPage(data);

			// Datepicker Call
			$("#test-date").datepicker({
				minDate : 0
			});

		}
	});

});

function showPage(data) {
	data.slider_info.logo_url = data.slider_info.CarImageUrl.split(",");

	var img_link = "<a href=\"" + data.slider_info.logo_url[0] + "\" class=\"fancybox\" rel=\"group1\">";
	img_link += "<div id=\"main-image\">";
	img_link += "<img alt=\"\" src=\"" + data.slider_info.logo_url[0] + "\">";
	img_link += "</div></a>";

	$("#detail-left").prepend(img_link);

	data.slider_info.Mileage = CommaFormatted(data.slider_info.Mileage);
	var car_info = "<li>";
	car_info += "<b>Miles:</b>&nbsp;" + data.slider_info.Mileage;
	car_info += "</li>";

	car_info += "<li>";
	car_info += "<b>Stock:</b>&nbsp;" + data.slider_info.StockNumber;
	car_info += "</li>";

	car_info += "<li>";
	car_info += "<b>VIN:</b>&nbsp;" + data.slider_info.VINNumber;
	car_info += "</li>";

	car_info += "<li>";
	if (data.slider_info.ExteriorColor != "") {
		car_info += "<b>ExteriorColor:</b>&nbsp;" + data.slider_info.ExteriorColor;
	} else {
		car_info += "<b>ExteriorColor:</b>&nbsp;Not Specified.";
	}
	car_info += "</li>";

	car_info += "<li>";
	if (data.slider_info.InteriorColor != null) {
		car_info += "<b>InteriorColor:</b>&nbsp;" + data.slider_info.InteriorColor;
	} else {
		car_info += "<b>InteriorColor:</b>&nbsp;Not Specified.";
	}
	car_info += "</li>";

	car_info += "<li>";
	if (data.slider_info.Tranmission != "") {
		car_info += "<b>Transmission:</b>&nbsp;" + data.slider_info.Tranmission;
	} else {
		car_info += "<b>Transmission:</b>&nbsp;Not Specified.";
	}
	car_info += "</li>";

	car_info += "<li>";
	car_info += "<b>Body Style:</b>&nbsp;" + data.slider_info.BodyType;
	car_info += "</li>";

	car_info += "<li>";
	car_info += "<b>Engine:</b>&nbsp;" + data.slider_info.Cylinders + "&nbsp;Cylinder,&nbsp;" + data.slider_info.Liters + "L";
	car_info += "</li>";

	car_info += "<li>";
	car_info += "<b>Location:</b>&nbsp;" + data.slider_info.DealershipName;
	car_info += "</li>";

	var car_relation = "<span>" + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " Whittier, CA | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " Buena Park, CA | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " Bellflower, CA | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " Aliso Viejo, CA | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " Riverside, CA | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " 91125 | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " 92692 | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " 91701 | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " 90632 | " + data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model + " 93539 |</span>";
	var car_title = data.slider_info.ModelYear + "&nbsp;" + data.slider_info.Make + "&nbsp;" + data.slider_info.Model;

	data.slider_info.SalePrice = "$" + CommaFormatted(data.slider_info.SalePrice);

	$('h2').html(data.slider_info.SalePrice);
	$('h1').html(car_title);
	$('h4').html(car_title);
	if (data.slider_info.Descriptions == null) {
		$('.well').html("There is no description yet.");
	} else {
		$('.well').html(data.slider_info.Descriptions);
	}

	$("ul.unstyled").append(car_info);
	$("#c3wrap").html(car_relation);

	$("#hidden_carid").val(dealer_id);
	$("#hidden_make").val(data.slider_info.Make);
	$("#hidden_model").val(data.slider_info.Model);
	$("#hidden_year").val(data.slider_info.ModelYear);

	init_view_detail(data.slider_info, data);
}

function init_view_detail(arrayUrl, afterPrint) {
	var timeSlide;
	var logo_url = [];
	$.each(arrayUrl.logo_url, function(index, item) {
		logo_url.push(item);
	});
	var page = 0;
	loadSlideImg(logo_url, 0);
	var totalPage = Math.floor(logo_url.length / 4);
	timeSlide = setInterval(function() {
		$("#carousel-nav .right").trigger("click");
	}, 8000);

	$("#carousel-nav .left").click(function() {
		$("#carousel-nav .right").show();
		if (page <= 0) {
			clearInterval(timeSlide);
			timeSlide = setInterval(function() {
				$("#carousel-nav .right").trigger("click");
			}, 8000);

			return;
		} else {
			if (page == 1) {
				$("#carousel-nav .left").hide();
			} else {
				$("#carousel-nav .left").show();
			}

			page--;
			//loadSlideImg(logo_url, page);
			showSlideImg(page);
			$('.slide-images-active').hide('slide', {
				direction : 'left'
			}, 'fast');
			$('.slide-images-active').show('slide', {
				direction : 'right'
			}, 'fast');
		}

	});

	$("#carousel-nav .right").click(function() {
		$("#carousel-nav .left").show();
		if (page == totalPage - 1) {
			clearInterval(timeSlide);
			timeSlide = setInterval(function() {
				$("#carousel-nav .left").trigger("click");
			}, 8000);

			return;
		} else {
			if (page == totalPage - 2) {
				$("#carousel-nav .right").hide();
			} else {
				$("#carousel-nav .right").show();
			}

			page++;
			showSlideImg(page);
			$('.slide-images-active').hide('slide', {
				direction : 'right'
			}, 'fast');
			$('.slide-images-active').show('slide', {
				direction : 'left'
			}, 'fast');
		}

	});

	$("#option-info").click(function() {
		$(this).addClass("active");
		$("#description-info").removeClass("active");
		$("#estimator-info").removeClass("active");
		if (arrayUrl.CarsOptions == null) {
			html_o = "There is no options added yet.";
		} else {
			var optionsList = arrayUrl.CarsOptions.split(',');

			var html_o = "";
			html_o += "<em>* Options listed are factory standard. One or more of these options may have been removed, altered or have expired since its first purchase. Please check with a sales rep for more information. *</em>";
			html_o += "<ul>";

			$.each(optionsList, function(index, item) {
				html_o += "<li>" + item + "</li>";
			});

			html_o += "</ul>";
		}

		$("#dt-middle-content").html(html_o);
	});

	$("#estimator-info").click(function() {
		price = arrayUrl.SalePrice.split("$")[1].replace(",", "");
		result = calEstimate(price, '0', '6.9', '60');

		$(this).addClass("active");
		$("#description-info").removeClass("active");
		$("#option-info").removeClass("active");

		var html_o = "";
		html_o += '<div id="est-form">';
		html_o += '<div id="est-form-title"><span>How Much Will I Pay ?</span></div>';
		html_o += '<div class="est-form-label"><span>Enter the price of a vehicle you are looking at :</span><br/><input class="est-form-input" id="est-price" type="text" value="' + price + '"/></div>';
		html_o += '<div class="est-form-label"><span>Down payment / trade-in value :</span><br/><input class="est-form-input" id="est-downpayment" type="text" /></div>';
		html_o += '<div class="est-form-label"><span>A.P.R. (estimated financing rate) :</span><br/><input class="est-form-input" id="est-apr" type="text" value="6.9" /><nobr style="color: blue;margin-left: 5px; font-size: 18px;">%</nobr></div>';
		html_o += '<div class="est-form-label" style="float:left;width:140px;"><span> Term (months) :</span><br/><select id="select-mons"><option value="12">12 mo.</option><option value="24">24 mo.</option><option value="36">36 mo.</option><option value="48">48 mo.</option><option value="60" selected="selected">60 mo.</option><option value="72">72 mo.</option><option value="84">84 mo.</option></select></div>';
		html_o += '<div class="est-form-label">	<span>Estimated Monthly Payment :</span><br/><input class="est-form-input" id="est-result" readonly="readonly" type="text"  value="$' + result.toFixed(2) + '"/></div>';
		$("#dt-middle-content").css("padding-top", "0px").html(html_o);

		$("input.est-form-input").keydown(function(event) {
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

		$("input.est-form-input").keyup(function(event) {
			price = parseFloat($("#est-price").val());

			downPayMent = parseFloat($("#est-downpayment").val());
			arp = parseFloat($("#est-apr").val());
			period = parseInt($("#select-mons").val());

			if (!downPayMent) {
				downPayMent = 0;
			}
			if (!price) {
				price = 0;
			}

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

			if (!downPayMent) {
				downPayMent = 0;
			}
			if (!price) {
				price = 0;
			}

			result = calEstimate(price, downPayMent, arp, period);
			$("#est-result").val("$ " + result.toFixed(2));
		});

	});

	$("#print-flyer").click(function() {
		var mainImageUrl = arrayUrl.CarImageUrl.split(",")[0];
		var template = _.template($("#print-flyer-template").html());
		$('html').html(template({
			mainImageUrl : mainImageUrl,
			arrayUrl : arrayUrl
		}));
		var html_o = "<h3 style='margin-top:0px; margin-bottom:0px;border-bottom: 2px solid gray;'>Vehicle Options</h3>";
		if (arrayUrl.CarsOptions) {
			var optionsList = arrayUrl.CarsOptions.split(",");
		} else {
			var optionsList = [];
		}

		html_o += "<table style='width : 100%;margin-bottom:3px'>";
		var count = 0;
		var check = 0;
		$.each(optionsList, function(index, item) {
			if (count == 0 || count % 3 == 0) {
				html_o += '<tr>';
			}
			check++;
			if (count == 29) {
				html_o += '<td>Etc...</td>';
			} else {
				html_o += '<td>' + item + '</td>';
			}

			if (check == 3) {
				html_o += '</tr>';
				check = 0;
			}

			count++;
			if (count == 30) {
				return false;
			}

		});

		html_o += "</table>";
		$("#print-options").html(html_o);
		$("#print-options").append('<span id="disclaimer">* Options listed are factory standard. One or more of these options may have been removed, altered or have expired since its first purchase. Please check with a sales rep for more information. *</span>');

		setTimeout(function() {
			window.print();
			window.location.reload()
		}
		//history.go(0);}
		, 800);

	});

	$("#description-info").click(function() {
		$(this).addClass("active");
		$("#option-info").removeClass("active");
		$("#estimator-info").removeClass("active");
		var html_o = "";
		html_o += '<div class="tab-content">';
		html_o += '<div class="tab-pane active" id="description">';
		html_o += '<div class="well">';
		if (arrayUrl.Descriptions == null) {
			html_o += "There is no description yet.";
		} else {
			html_o += arrayUrl.Descriptions;
		}
		html_o += '</div></div>';
		$("#dt-middle-content").html(html_o);
	});
}

function load_carfax_info() {
	var wk_data = {
		"VINNumber" : '2C3HE66G72H150041'
	};

	$.ajax({
		type : "POST",
		url : "/ajax/carfax_request.php",
		data : wk_data,
		dataType : "json",
		cache : false,
		success : function(data) {

		}
	});
}

function insert_customer_friend(fname, femail, name, email, phone, year, make, model, comments, carid) {

	var wk_data = {
		"fname" : fname,
		"femail" : femail,
		"name" : name,
		"email" : email,
		"phone" : phone,
		"year" : year,
		"make" : make,
		"model" : model,
		"comments" : comments,
		"carid" : carid
	};

	$.ajax({
		type : "POST",
		url : "/ajax/insert_customer_friend.php",
		data : wk_data,
		dataType : "json",
		cache : false,
		success : function(data) {
			return true;
		}
	});
}

function insert_schedule_info(schedule_time, schedule_date, name, email, phone, year, make, model, comments) {
	var wk_data = {
		"schedule_time" : schedule_time,
		"schedule_date" : schedule_date,
		"name" : name,
		"email" : email,
		"phone" : phone,
		"year" : year,
		"make" : make,
		"model" : model,
		"comments" : comments
	};

	$.ajax({
		type : "POST",
		url : "/ajax/insert_schedule_info.php",
		data : wk_data,
		dataType : "json",
		cache : false,
		success : function(data) {
			return true;
		}
	});
}
