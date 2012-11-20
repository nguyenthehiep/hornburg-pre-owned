$(function() {

});

function inventory_view(data) {
	var html_o = "";
	$.each(data, function(index, item) {
		html_o += '<div class="row vehicle-listing">';
		html_o += '<div class="span3 listing-container">';
		html_o += '<div class="img">';
		if (item.CarImageUrl.split(",")[0] == "") {
			html_o += '<a href="/inventory/detail/' + item.ListingID + '" class="thumbnail"><img height="140" style="width: 162px; height: 120px;" src="/images/no-images.jpg" /></a>';
		} else {
			html_o += '<a href="/inventory/detail/' + item.ListingID + '" class="thumbnail"><img height="140" src="' + item.CarImageUrl.split(",")[0] + '" /></a>';
		}

		html_o += '<a href=""><img style="width: 171px;" src="http://www.hornburgpreowned.com/images/carfax-large.jpg" /></a> </div> </div>';

		html_o += '<div class="span9 listing-container">';

		html_o += '<div class="row"><div class="span5 description">';

		html_o += '<a href="/inventory/detail/' + item.ListingID + '"><h3 class="name">' + item.Make + '&nbsp;' + item.Model + '&nbsp;' + item.Trim + '</h3></a>';
		html_o += '<ul class="unstyled">';
		if (item.Mileage == "") {
			html_o += '<li>Mileage: Not Specified</li>';
		} else {
			item.Mileage = CommaFormatted(item.Mileage);
			html_o += '<li>Mileage: ' + item.Mileage + '</li>';
		}
		if (item.ExteriorColor == "") {
			html_o += '<li>ExteriorColor: Not Specified</li>';
		} else {
			html_o += '<li>ExteriorColor: ' + item.ExteriorColor + '</li>';
		}
		if (item.InteriorColor == "" || item.InteriorColor == null) {
			html_o += '<li>InteriorColor: Not Specified</li>';
		} else {
			html_o += '<li>InteriorColor: ' + item.InteriorColor + '</li>';
		}
		if (item.StockNumber == "") {
			html_o += '<li>StockNumber: Not Specified</li>';
		} else {
			html_o += '<li>StockNumber: ' + item.StockNumber + '</li>';
		}
		if (item.VINNumber == "") {
			html_o += '<li>VINNumber: Not Specified</li>';
		} else {
			html_o += '<li>VINNumber: ' + item.VINNumber + '</li>';
		}
		html_o += '</ul></div>';

		html_o += '<div class="span4 price">';
		if (item.SalePrice == "0" || item.SalePrice == false) {
			html_o += '<h2 style="font-size: 20px !important;">Call For Price</h2>';
		} else {
			item.SalePrice = CommaFormatted(item.SalePrice);
			html_o += '<h2>$' + item.SalePrice + '</h2>';
		}
		html_o += '<span class="price-tagline">Everyday Low Price!</span>';
		html_o += '<br/><a href="/finance" style="color: #FFFFFF !important;" class="finance-button">Get Approved!</a>';
		html_o += '</div></div>';
		if (item.Descriptions == null) {
			html_o += '<p class="hold-desciption" title="There is no description yet.">Description: There is no description yet.</p></div></div>';
		} else {
			html_o += '<p class="hold-desciption" title="' + item.Descriptions + '">Description: ' + item.Descriptions + '</p></div></div>';
		}
	});
	$("#content-holder").html(html_o);

	$(".vehicle-listing").bind("mouseenter", function() {
		$t = $(this);
		downPayMent = parseFloat($("#est-downpayment").val());
		arp = parseFloat($("#est-apr").val());
		period = parseInt($("#select-mons").val());

		if (!downPayMent) {
			downPayMent = 0;
		}

		var price = $t.children('.listing-container').children('.row').children('.price').children('h2').text();

		var price1 = price.split("$")[1].replace(",", "");
		$("#est-price").val(price1);

		result = calEstimate(price1, downPayMent, arp, period);
		$("#est-result").val("$ " + result.toFixed(2));

	});
}

function groupData(data, preData) {
	var obj = {};
	$.each(data, function(index, item) {
		var count = 0;
		$.each(preData, function(a, b) {
			if (b == item) {
				count++;
			}
		});
		obj[item] = count;
	});

	return obj;
}

function appendDom(el, obj, text) {
	el.html('');
	switch(text) {
		case "make":
			el.append("<option value='0'>Select a Make</option>");
			break;
		case "model":
			el.append("<option value='0'>Select a Model</option>");
			break;
		case "trim":
			el.append("<option value='0'>Select a Trim</option>");
			break;
		case "year":
			el.append("<option value='0'>Select a Year</option>");
			break;
		case "price":
			el.append("<option value='0'>Select a Price</option>");
			break;
	}

	var arrayKey = [];
	var arrayValue = [];
	$.each(obj, function(index, item) {
		arrayKey.push(index);
	});
	arrayKey = _.sortBy(arrayKey, function(num) {
		return num;
	});

	for (var i = 0; i < arrayKey.length; i++) {
		$.each(obj, function(index, item) {
			if (index == arrayKey[i]) {
				arrayValue.push(item);
			}
		});
		// el.append("<option value='" + arrayKey[i] + "'>" + index + " (" +
		// item + ") </option>");
	}
	for (var i = 0; i < arrayKey.length; i++) {
		if (arrayKey[i] == false) {
			el.append("<option value='Not Specified'>Not Specified (" + arrayValue[i] + ") </option>");
		} else {
			if (text == "price") {
				var displayPrice = "$" + CommaFormatted(arrayKey[i]);
				el.append("<option value='" + arrayKey[i] + "'>" + displayPrice + " (" + arrayValue[i] + ") </option>");
			} else {
				el.append("<option value='" + arrayKey[i] + "'>" + arrayKey[i] + " (" + arrayValue[i] + ") </option>");
			}
		}
	}
}

function getData(obj, type) {
	var Arr = [];
	switch (type) {
		case "Make":
			$.each(obj, function(index, item) {
				Arr.push(item.Make);
			});
			// UniArr = _.uniq(Arr);
			break;
		case "Model":
			$.each(obj, function(index, item) {
				Arr.push(item.Model);
			});
			// UniArr = _.uniq(Arr);
			break;
		case "Trim":
			$.each(obj, function(index, item) {
				Arr.push(item.Trim);
			});
			// UniArr = _.uniq(Arr);
			break;
		case "Year":
			$.each(obj, function(index, item) {
				Arr.push(item.ModelYear);
			});
			// UniArr = _.uniq(Arr);
			break;
		case "Price":
			$.each(obj, function(index, item) {
				Arr.push(item.SalePrice);
			});
			// UniArr = _.uniq(Arr);
			break;
	}

	return Arr;
}

function checkExistData(pri, detail_obj, make, model, trim, year, price) {
	switch (pri) {
		case "price":
			if (year.length > 0) {
				return year;
			} else {
				if (trim.length > 0) {
					return trim;
				} else {
					if (model.length > 0) {
						return model;
					} else {
						if (make.length > 0) {
							return make;
						} else {
							return detail_obj;
						}

					}
				}
			}
			break;
		case "year":
			if (trim.length > 0) {
				return trim;
			} else {
				if (model.length > 0) {
					return model;
				} else {
					if (make.length > 0) {
						return make;
					} else {
						return detail_obj;
					}
				}
			}
			break;

		case "trim":
			if (model.length > 0) {
				return model;
			} else {
				if (make.length > 0) {
					return make;
				} else {
					return detail_obj;
				}
			}
			break;

		case "model":
			if (make.length > 0) {
				return make;
			} else {
				return detail_obj;
			}
			break;

		default:
			return detail_obj;
			break;
	}
}

function triggerDataLoaded(detail_obj) {
	var template_content = "#content-template";
	var makeGroup = [];
	var modelGroup = [];
	var yearGroup = [];
	var priceGroup = [];
	var trimGroup = [];
	var currentData = detail_obj;

	makeGroup = getData(detail_obj, "Make");
	modelGroup = getData(detail_obj, "Model");
	yearGroup = getData(detail_obj, "Year");
	priceGroup = getData(detail_obj, "Price");
	trimGroup = getData(detail_obj, "Trim");

	var uniMakeGroup = _.uniq(makeGroup);
	var uniModelGroup = _.uniq(modelGroup);
	var uniYearGroup = _.uniq(yearGroup);
	var uniPriceGroup = _.uniq(priceGroup);
	var uniTrimGroup = _.uniq(trimGroup);

	// UnigArr = _.sortBy(UnigArr,function(num){return num;}).reverse();
	var makeObj = {};
	var modelObj = {};
	var yearObj = {};
	var priceObj = {};
	var trimObj = {};
	trimObj = groupData(uniTrimGroup, trimGroup);
	makeObj = groupData(uniMakeGroup, makeGroup);
	modelObj = groupData(uniModelGroup, modelGroup);
	priceObj = groupData(uniPriceGroup, priceGroup);
	yearObj = groupData(uniYearGroup, yearGroup);

	var makeDom = $("#makeDrp");
	var modelDom = $("#modelDrp");
	var trimDom = $("#trimDrp");
	var yearDom = $("#yearDrp");
	var priceDom = $("#priceDrp");

	appendDom(makeDom, makeObj, "make");
	appendDom(modelDom, modelObj, "model");
	appendDom(trimDom, trimObj, "trim");
	appendDom(yearDom, yearObj, "year");
	appendDom(priceDom, priceObj, "price");

	var arrayMake = [];
	var arrayModel = [];
	var arrayTrim = [];
	var arrayYear = [];
	var arrayPrice = [];

	makeDom.change(function() {
		arrayMake = [];
		var make = $(this).val();
		if (make == "0") {
			var makeDom = $("#makeDrp");
			var modelDom = $("#modelDrp");
			var trimDom = $("#trimDrp");
			var yearDom = $("#yearDrp");
			var priceDom = $("#priceDrp");

			appendDom(makeDom, makeObj, "make");
			appendDom(modelDom, modelObj, "model");
			appendDom(trimDom, trimObj, "trim");
			appendDom(yearDom, yearObj, "year");
			appendDom(priceDom, priceObj, "price");
			// ////load template///////
			currentData = detail_obj;
			inventory_view(detail_obj);

			return false;
		}
		$.each(detail_obj, function(index, item) {
			if (item.Make.indexOf(make) != -1) {
				arrayMake.push(item);
			}
		});

		currentData = arrayMake;

		var Model = [];
		var Year = [];
		var Trim = [];
		var Price = [];
		$.each(arrayMake, function(index, item) {
			Model.push(item.Model);
			Year.push(item.ModelYear);
			Trim.push(item.Trim);
			Price.push(item.SalePrice);
		});

		var UniModel = _.uniq(Model);
		var UniYear = _.uniq(Year);
		var UniTrim = _.uniq(Trim);
		var UniPrice = _.uniq(Price);
		var MObj = {};
		var YObj = {};
		var TrObj = {};
		var PObj = {};
		MObj = groupData(UniModel, Model);
		YObj = groupData(UniYear, Year);
		TrObj = groupData(UniTrim, Trim);
		PObj = groupData(UniPrice, Price);
		var modelDom = $("#modelDrp");
		var trimDom = $("#trimDrp");
		var yearDom = $("#yearDrp");
		var priceDom = $("#priceDrp");
		appendDom(modelDom, MObj, "model");
		appendDom(trimDom, TrObj, "trim");
		appendDom(yearDom, YObj, "year");
		appendDom(priceDom, PObj, "price");

		// ////load template///////
		inventory_view(arrayMake);
		// /////////end////////////
	});

	modelDom.change(function() {
		arrayModel = [];
		var model = $(this).val();
		if (model == "0") {
			var data = checkExistData("model", detail_obj, arrayMake);
			$.each(data, function(index, item) {
				arrayModel.push(item);
			});

			currentData = arrayModel;

			var Year = [];
			var Trim = [];
			var Price = [];
			$.each(arrayModel, function(index, item) {
				Year.push(item.ModelYear);
				Trim.push(item.Trim);
				Price.push(item.SalePrice);
			});

			var UniYear = _.uniq(Year);
			var UniTrim = _.uniq(Trim);
			var UniPrice = _.uniq(Price);

			var YObj = {};
			var TrObj = {};
			var PObj = {};

			YObj = groupData(UniYear, Year);
			TrObj = groupData(UniTrim, Trim);
			PObj = groupData(UniPrice, Price);

			var trimDom = $("#trimDrp");
			var yearDom = $("#yearDrp");
			var priceDom = $("#priceDrp");

			appendDom(trimDom, TrObj, "trim");
			appendDom(yearDom, YObj, "year");
			appendDom(priceDom, PObj, "price");

			// ////load template///////

			inventory_view(arrayModel);
			// /////////end////////////
			return false;
		} else {
			var data = checkExistData("model", detail_obj, arrayMake);

			if (model != "Not Specified") {
				$.each(data, function(index, item) {
					/*
					 if (item.Model.indexOf(model) != -1) {
					 arrayModel.push(item);
					 }*/
					if (item.Model == model) {
						arrayModel.push(item);
					}
				});
			} else {
				$.each(data, function(index, item) {
					/*
					 if (item.Model.indexOf(model) != -1) {
					 arrayModel.push(item);
					 }*/
					if (item.Model == "") {
						arrayModel.push(item);
					}
				});
			}

			currentData = arrayModel;

			var Year = [];
			var Trim = [];
			var Price = [];
			$.each(arrayModel, function(index, item) {
				Year.push(item.ModelYear);
				Trim.push(item.Trim);
				Price.push(item.SalePrice);
			});

			var UniYear = _.uniq(Year);
			var UniTrim = _.uniq(Trim);
			var UniPrice = _.uniq(Price);

			var YObj = {};
			var TrObj = {};
			var PObj = {};

			YObj = groupData(UniYear, Year);
			TrObj = groupData(UniTrim, Trim);
			PObj = groupData(UniPrice, Price);

			var trimDom = $("#trimDrp");
			var yearDom = $("#yearDrp");
			var priceDom = $("#priceDrp");

			appendDom(trimDom, TrObj, "trim");
			appendDom(yearDom, YObj, "year");
			appendDom(priceDom, PObj, "price");

			// ////load template///////

			inventory_view(arrayModel);
			// /////////end///////////
		}

	});

	trimDom.change(function() {
		arrayTrim = [];
		if ($(this).val() == "0") {

			var data = checkExistData("trim", detail_obj, arrayMake, arrayModel);

			$.each(data, function(index, item) {
				arrayTrim.push(item);
			});

			currentData = arrayTrim;

			var Year = [];
			var Price = [];

			$.each(arrayTrim, function(index, item) {
				Year.push(item.ModelYear);
				Price.push(item.SalePrice);
			});

			var UniYear = _.uniq(Year);
			var UniPrice = _.uniq(Price);

			var YObj = {};
			var PObj = {};

			YObj = groupData(UniYear, Year);
			PObj = groupData(UniPrice, Price);

			var yearDom = $("#yearDrp");
			var priceDom = $("#priceDrp");

			appendDom(yearDom, YObj, "year");
			appendDom(priceDom, PObj, "price");

			// ////load template///////
			inventory_view(arrayTrim);
			// /////////end///////////
		} else {
			var trim = $(this).val();
			var data = checkExistData("trim", detail_obj, arrayMake, arrayModel);

			if (trim != "Not Specified") {
				$.each(data, function(index, item) {
					if (trim == item.Trim) {
						arrayTrim.push(item);
					}
				});
			} else {
				$.each(data, function(index, item) {
					if (item.Trim == "") {
						arrayTrim.push(item);
					}
				});
			}

			currentData = arrayTrim;

			var Year = [];
			var Price = [];

			$.each(arrayTrim, function(index, item) {
				Year.push(item.ModelYear);
				Price.push(item.SalePrice);
			});

			var UniYear = _.uniq(Year);
			var UniPrice = _.uniq(Price);

			var YObj = {};
			var PObj = {};

			YObj = groupData(UniYear, Year);
			PObj = groupData(UniPrice, Price);

			var yearDom = $("#yearDrp");
			var priceDom = $("#priceDrp");

			appendDom(yearDom, YObj, "year");
			appendDom(priceDom, PObj, "price");

			// ////load template///////
			inventory_view(arrayTrim);
			// /////////end/////////////
		}
	});

	yearDom.change(function() {
		arrayYear = [];
		var year = $(this).val();

		if (year == "0") {
			var data = checkExistData("year", detail_obj, arrayMake, arrayModel, arrayTrim);
			$.each(data, function(index, item) {
				arrayYear.push(item);
			});
			currentData = arrayYear;
			var Price = [];
			$.each(arrayYear, function(index, item) {
				Price.push(item.SalePrice);
			});

			var UniPrice = _.uniq(Price);

			var PObj = {};

			PObj = groupData(UniPrice, Price);

			var priceDom = $("#priceDrp");

			appendDom(priceDom, PObj, "price");

			// ////load template///////
			inventory_view(arrayYear);
			// /////////end////////////
		} else {
			var data = checkExistData("year", detail_obj, arrayMake, arrayModel, arrayTrim);
			$.each(data, function(index, item) {
				if (item.ModelYear.indexOf(year) != -1) {
					arrayYear.push(item);
				}
			});
			currentData = arrayYear;
			var Price = [];
			$.each(arrayYear, function(index, item) {
				Price.push(item.SalePrice);
			});

			var UniPrice = _.uniq(Price);

			var PObj = {};

			PObj = groupData(UniPrice, Price);

			var priceDom = $("#priceDrp");

			appendDom(priceDom, PObj, "price");

			// ////load template///////
			inventory_view(arrayYear);
			// /////////end///////////////
		}

	});

	priceDom.change(function() {
		arrayPrice = [];
		var price = $(this).val();
		if (price == "0") {
			var data = checkExistData("price", detail_obj, arrayMake, arrayModel, arrayTrim, arrayYear);
			$.each(data, function(index, item) {
				arrayPrice.push(item);
			});

			currentData = arrayPrice;
			// ////load template///////
			inventory_view(arrayPrice);
			// /////////end///////////////
		} else {
			var data = checkExistData("price", detail_obj, arrayMake, arrayModel, arrayTrim, arrayYear);
			$.each(data, function(index, item) {
				if (item.SalePrice.indexOf(price) != -1) {
					arrayPrice.push(item);
				}
			});

			currentData = arrayPrice;
			// ////load template///////
			inventory_view(arrayPrice);
			// /////////end///////////////
		}
	});

	// /////////////////////

	$("input[name='order']").live('click', function() {
		var getID = $(this).attr('id');

		switch (getID) {
			case "order-saleprice":
				var listPrice = [];
				var array = [];
				$.each(currentData, function(index, item) {
					var value = parseFloat(item.SalePrice.replace(",", "."));
					listPrice.push(value);
				});

				listPrice = _.uniq(listPrice);
				listPrice = _.sortBy(listPrice, function(num) {
					return num;
				}).reverse();

				$.each(listPrice, function(index, item) {
					$.each(currentData, function(index1, item1) {
						var vl = parseFloat(item1.SalePrice.replace(",", "."));
						if (vl == item) {
							array.push(item1);
						}
					});
				});

				inventory_view(array);

				break;

			case "order-year":
				var listYear = [];
				var array = [];
				$.each(currentData, function(index, item) {
					var value = parseInt(item.ModelYear);
					listYear.push(value);
				});

				listYear = _.uniq(listYear);
				listYear = _.sortBy(listYear, function(num) {
					return num;
				}).reverse();

				$.each(listYear, function(index, item) {
					$.each(currentData, function(index1, item1) {
						var vl = parseInt(item1.ModelYear);
						if (vl == item) {
							array.push(item1);
						}
					});
				});

				inventory_view(array);

				break;

			case "order-model":
				var listModel = [];
				var array = [];
				$.each(currentData, function(index, item) {
					var value = item.Model;
					listModel.push(value);
				});

				listModel = _.uniq(listModel);
				listModel = _.sortBy(listModel, function(num) {
					return num;
				});

				$.each(listModel, function(index, item) {
					$.each(currentData, function(index1, item1) {
						var vl = item1.Model;
						if (vl == item) {
							array.push(item1);
						}
					});
				});

				inventory_view(array);
				break;

			case "order-make":
				var listMake = [];
				var array = [];
				$.each(currentData, function(index, item) {
					var value = item.Make;
					listMake.push(value);
				});

				listMake = _.uniq(listMake);
				listMake = _.sortBy(listMake, function(num) {
					return num;
				});

				$.each(listMake, function(index, item) {
					$.each(currentData, function(index1, item1) {
						var vl = item1.Make;
						if (vl == item) {
							array.push(item1);
						}
					});
				});

				inventory_view(array);
				break;

			////////////////

			/////////////////
		}

	});
	$(".vehicle-listing").bind("mouseenter", function() {
		$t = $(this);
		downPayMent = parseFloat($("#est-downpayment").val());
		arp = parseFloat($("#est-apr").val());
		period = parseInt($("#select-mons").val());

		if (!downPayMent) {
			downPayMent = 0;
		}

		var price = $t.children('.listing-container').children('.row').children('.price').children('h2').text();

		var price1 = price.split("$")[1].replace(",", "");
		$("#est-price").val(price1);

		result = calEstimate(price1, downPayMent, arp, period);
		$("#est-result").val("$ " + result.toFixed(2));

	});

	$("input.est-inv-input").keydown(function(event) {
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

	$("input.est-inv-input").keyup(function(event) {
		var price = parseFloat($("#est-price").val());
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
		var price = parseFloat($("#est-price").val());
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
	// ////////////////////
}


$(document).ready(function() {
	// ///////////
	switch(inv_flg) {
		case "main":
			var wk_data = {
				"inv_flg" : inv_flg
			};
			break;
		case "search":
			var wk_data = {
				"make" : make,
				"year" : year,
				"model" : model,
				"price" : price,
				"trim" : trim,
				"inv_flg" : inv_flg
			};
			break;
		case "u10000":
			var wk_data = {
				"underPrice" : underPrice,
				"inv_flg" : inv_flg
			};
			break;
		case "u15000":
			var wk_data = {
				"underPrice" : underPrice,
				"inv_flg" : inv_flg
			};
			break;
		case "u20000":
			var wk_data = {
				"underPrice" : underPrice,
				"inv_flg" : inv_flg
			};
			break;
		case "u25000":
			var wk_data = {
				"underPrice" : underPrice,
				"inv_flg" : inv_flg
			};
			break;
	}

	var detail_obj = "";
	$.ajax({
		type : "POST",
		url : "/ajax/load_search_info.php",
		data : wk_data,
		dataType : "json",
		cache : false,
		success : function(data) {
			detail_obj = data.search_info;
			inventory_view(detail_obj);
			$("#loading-select").hide();

			triggerDataLoaded(detail_obj);
		}
	});
	// ////////////
});

