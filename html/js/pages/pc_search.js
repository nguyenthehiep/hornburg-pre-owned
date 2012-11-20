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
		//el.append("<option value='" + arrayKey[i] + "'>" + index + " (" + item + ") </option>");
	}
	for (var i = 0; i < arrayKey.length; i++) {
		if (arrayKey[i] == false) {
			el.append("<option value='Not Specified'>Not Specified (" + arrayValue[i] + ") </option>");
		} else {
			el.append("<option value='" + arrayKey[i] + "'>" + arrayKey[i] + " (" + arrayValue[i] + ") </option>");
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
			//UniArr = _.uniq(Arr);
			break;
		case "Model":
			$.each(obj, function(index, item) {
				Arr.push(item.Model);
			});
			//UniArr = _.uniq(Arr);
			break;
		case "Trim":
			$.each(obj, function(index, item) {
				Arr.push(item.Trim);
			});
			//UniArr = _.uniq(Arr);
			break;
		case "Year":
			$.each(obj, function(index, item) {
				Arr.push(item.ModelYear);
			});
			//UniArr = _.uniq(Arr);
			break;
		case "Price":
			$.each(obj, function(index, item) {
				Arr.push(item.SalePrice);
			});
			//UniArr = _.uniq(Arr);
			break;
	}

	return Arr;
}

function displaySearchData(data) {
	var html_o = "";

	$.each(data, function(index, item) {
		html_o += '<div class="row vehicle-listing">';
		html_o += '<div class="span3 listing-container">';
		html_o += '<div class="img">';
		if(item.logo_url[1] == ""){
			html_o += '<a href="/inventory/detail/' + item.ListingID + '" class="thumbnail"><img height="140" style="width: 162px; height: 120px;" src="/images/no-images.jpg" /></a>';
		}else{
			html_o += '<a href="/inventory/detail/' + item.ListingID + '" class="thumbnail"><img height="140" src="' + item.logo_url[1] + '" /></a>';
		}
		
		html_o += '<a href=""><img style="width: 171px;" src="http://www.hornburgpreowned.com/images/carfax-large.jpg" /></a>';
		html_o += '</div></div>';

		html_o += '<div class="span9 listing-container">';
		html_o += '<div class="row">';
		html_o += '<div class="span5 description">';
		html_o += '<a href="/inventory/detail/' + item.ListingID + '"><h3 class="name">' + item.Make + ' ' + item.Model + ' ' + item.Trim + '</h3></a>';
		html_o += '<ul class="unstyled">';
		if(item.Mileage == false || item.Mileage == null){
			html_o += '<li>Mileage: Not Specified</li>';
		}else{
			html_o += '<li>Mileage:' + item.Mileage + '</li>';
		}
		
		if(item.ExteriorColor == false || item.ExteriorColor == null){
			html_o += '<li>Ext: Not Specified</li>';
		}else{
			html_o += '<li>Ext:' + item.ExteriorColor + '</li>';
		}
		
		if(item.InteriorColor == null || item.InteriorColor == false){
			html_o += '<li>Int: Not Specified</li>';
		}else{
			html_o += '<li>Int:' + item.InteriorColor + '</li>';
		}
		
		if(item.StockNumber == false){
			html_o += '<li>Stock # Not Specified</li>';
		}else{
			html_o += '<li>Stock #' + item.StockNumber + '</li>';
		}
		
		if(item.VINNumber == false){
			html_o += '<li>VIN: Not Specified</li>';
		}else{
			html_o += '<li>VIN:' + item.VINNumber + '</li>';
		}
		
		html_o += '</ul></div>';
		html_o += '<div class="span4 price">';
		
		if (parseInt(item.SalePrice) == 0 || item.SalePrice == false) {
			html_o += '<h2 style="font-size: 20px !important;">Call For Price</h2>';
		} else {
			html_o += '<h2>$' + item.SalePrice + '</h2>';
		}

		html_o += '<span class="price-tagline">Everyday Low Price!</span>';
		html_o += '<br/>';
		html_o += '<a href="/finance" style="color: #FFFFFF !important;" class="finance-button">Get Approved!</a>';
		html_o += '</div></div>';
		html_o += '<p class="hold-desciption" title="' + item.Descriptions + '">Description:' + item.Descriptions + '</p>';
		html_o += '</div></div>';
	});

	$("#content-holder").html(html_o);
}

function checkExistData(pri, make, model, trim, year, price) {
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


$(document).ready(function() {
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

	//UnigArr = _.sortBy(UnigArr,function(num){return num;}).reverse();
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

	makeDom.live("change", function() {
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
			//////load template///////
			currentData = detail_obj;
			displaySearchData(detail_obj);
			///////////end///////////////
			return false;
		}
		$.each(detail_obj, function(index, item) {
			if (make.indexOf(item.Make) != -1) {
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

		//////load template///////

		displaySearchData(arrayMake);
		///////////end///////////////
	});

	modelDom.live("change", function() {
		arrayModel = [];
		var model = $(this).val();
		if (model == "0") {
			var data = checkExistData("model", arrayMake);
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

			//////load template///////

			displaySearchData(arrayModel);
			///////////end///////////////
			return false;
		} else {
			var data = checkExistData("model", arrayMake);
			$.each(data, function(index, item) {
				if (model.indexOf(item.Model) != -1) {
					arrayModel.push(item);
				}
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

			//////load template///////

			displaySearchData(arrayModel);
			///////////end///////////////
		}

	});

	trimDom.live("change", function() {
		arrayTrim = [];
		if ($(this).val() == "0") {

			var data = checkExistData("trim", arrayMake, arrayModel);

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

			//////load template///////

			displaySearchData(arrayTrim);
			///////////end///////////////
		}
		else {
			var trim = $(this).val();
			var data = checkExistData("trim",detail_obj,arrayMake, arrayModel);
	
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

			//////load template///////

			displaySearchData(arrayTrim);
			///////////end///////////////
		}
	});

	yearDom.live("change", function() {
		arrayYear = [];
		var year = $(this).val();

		if (year == "0") {
			var data = checkExistData("year", arrayMake, arrayModel, arrayTrim);
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

			//////load template///////

			displaySearchData(arrayYear);
			///////////end///////////////
		}
		else {
			var data = checkExistData("year", arrayMake, arrayModel, arrayTrim);
			$.each(data, function(index, item) {
				if (year.indexOf(item.ModelYear) != -1) {
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

			//////load template///////

			displaySearchData(arrayYear);
			///////////end///////////////
		}

	});

	priceDom.live("change", function() {
		arrayPrice = [];
		var price = $(this).val();
		if (price == "0") {
			var data = checkExistData("price", arrayMake, arrayModel, arrayTrim, arrayYear);
			$.each(data, function(index, item) {
				arrayPrice.push(item);
			});

			currentData = arrayPrice;
			//////load template///////
			displaySearchData(arrayPrice);
			///////////end///////////////
		}
		else {
			var data = checkExistData("price", arrayMake, arrayModel, arrayTrim, arrayYear);
			$.each(data, function(index, item) {
				if (price.indexOf(item.SalePrice) != -1) {
					arrayPrice.push(item);
				}
			});

			currentData = arrayPrice;
			//////load template///////

			displaySearchData(arrayPrice);
			///////////end///////////////
		}
	});

	///////////////////////

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

				displaySearchData(array);

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

				displaySearchData(array);

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

				displaySearchData(array);

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

				displaySearchData(array);

				break;
		}

	});
	//////////////////////

});

