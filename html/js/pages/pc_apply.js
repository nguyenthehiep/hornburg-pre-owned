var ApplyClass = Class({
	init : function() {
		this.showApplyBase();
		//$("#date").mask("99/99/9999");

		//$("#tin").mask("99-9999999");
		//$("#ssn").mask("999-99-9999");
		this.loadMaskInput();
		this.checkRequiredField();
		this.addHandlers();
		//this.loadDataCombobox();
		this.dataCombobox = $.post("/ajax/load_inventory_info.php",{apply:3}, function(data) {
			return data;
		});

	},
	dataCombobox : [],
	loadDataCombobox : function() {
		var detail_obj = "";
		var wk_data = {
				"apply" : 3
		};

		$.ajax({
			type : "POST",
			url : "/ajax/load_inventory_info.php",
			data : wk_data,
			dataType : "json",
			cache : false,
			success : function(data) {
				this.dataCombobox = data.slider_info;
			}
		});
	},

	loadMaskInput : function() {
		$("#home-phone").mask("(999) 999-9999");
		$("#cellular-phone").mask("(999) 999-9999");
		$("#SSN").mask("999-99-9999");
		$("#DOB").mask("99/99/9999");
		$("#employer-phone").mask("(999) 999-9999");

	},
	checkRequiredField : function() {

		var labelList = $('label.apply-label');
		$.each(labelList, function(index, item) {
			item = $(item);
			
			var val = item.parent().children('.apply-input-common').val();
			
			if (val == "") {
				if (item.hasClass('required-input')) {
					$(this).parent().children('nobr').remove();
					$(this).parent().append('<nobr class="label-required">*</nobr>')
				}
			} else {
				if (val) {
					if (val.indexOf("Select a") != -1) {
						if (item.hasClass('required-input')) {
							$(this).parent().children('nobr').remove();
							$(this).parent().append('<nobr class="label-required">*</nobr>')
						}
					}else{
						$(this).parent().children('nobr').remove();
					}
				}
			}
		});
	},
	checkValidEmail : function(email) {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	},

	template_tag1 : "#base-apply",
	template_tag2 : "#vehicle-infor-template",
	template_tag3 : "#financing-info-template",
	state_template : "#states-template",
	dataTag1 : {},
	dataTag2 : {},
	dataTag3 : {},

	dataCbo : null,
	listYear : [],
	listModel : [],
	listMake : [],
	listObjYear : [],
	listObjMake : [],
	listObjModel : [],
	listTradeYear : [],
	listTradeMake : [],
	listTradeModel : [],
	listObjTradeYear : [],
	listObjTradeMake : [],
	listObjTradeModel : [],

	showApplyBase : function() {
		var template = _.template($(this.template_tag1).html());

		$('#apply-content').html(template({	}));

		var state_template = _.template($(this.state_template).html());
		$('select.statelist').append(state_template({}));
	},

	showAnnounce : function() {
		$("#box-announce").show();
	},
	callKeyDownEvent : function() {
		$("input.just-num").keydown(function(event) {
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
	},

	callKeyUpEvent : function() {
		$("#taa-years").keyup(function() {
			var value = parseInt($(this).val());
			var months = parseInt($("#taa-month").val());
			if (!months) {
				months = 0;
			}
			if (value < 2 && months < 24) {
				$("#hiddenAddress").show();
			} else {
				$("#hiddenAddress").hide();
			}
		});

		$("#taa-month").keyup(function() {
			var value = parseInt($(this).val());
			var years = parseInt($("#taa-years").val());
			if (!years) {
				years = 0;
			}
			if (value < 24 && years < 2) {
				$("#hiddenAddress").show();
			} else {
				$("#hiddenAddress").hide();
			}
		});

		$("#taj-years").keyup(function() {
			var value = parseInt($(this).val());
			var months = parseInt($("#taj-months").val());
			if (!months) {
				months = 0;
			}
			if (value < 2 && months < 24) {
				$("#hiddenJob").show();
			} else {
				$("#hiddenJob").hide();
			}
		});

		$("#taj-months").keyup(function() {
			var value = parseInt($(this).val());
			var years = parseInt($("#taj-years").val());
			if (!years) {
				years = 0;
			}
			if (value < 24 && years < 2) {
				$("#hiddenJob").show();
			} else {
				$("#hiddenJob").hide();
			}
		});
	},
	saveHistoryInput : function() {
		var liList = $("#apply-tag1 ul li");
		var page = this.checkCurrentPage();
		var data = {};

		$.each(liList, function(index, item) {
			item = $(item);
			var checkClass = item.attr('class');

			if (checkClass != "two-input") {
				var key = item.children('label.apply-label').text().replace(/\s/g, "_");

				var value = item.children('.apply-input-common').val();
				data[key] = value;
			} else {

			}

		});

		var listTwoLabel = $('label.label-input-two');
		var listTwoInput = $('input.apply-two-text');

		for (var i = 0; i < listTwoInput.length; i++) {
			var a = $(listTwoInput[i]);
			var b = $(listTwoLabel[i]);

			var k_part1 = a.parent().children('label.apply-label').text().replace(/\s/g, "_");
			var k_part2 = b.text().replace(/\s/g, "_");
			var key = k_part1 + "_" + k_part2;

			var value = a.val();
			data[key] = value;
		}

		if (page == 1) {
			this.dataTag1 = data;
		} else {
			var listRa = $("input.apply-radio");

			$.each(listRa, function(index, item) {
				item = $(item);
				var id = item.attr("id").replace("-", "_");
				if (item.hasClass('radio-checked')) {
					data[id] = true;
				} else {
					data[id] = false;
				}
			});
			if (page == 2) {
				this.dataTag2 = data;
			} else {
				this.dataTag3 = data;
			}
		}

	},
	saveHistoryRadio : function() {
	},

	appendSavedValue : function(data) {

		var liList = $("#apply-tag1 ul li");
		$.each(liList, function(index, item) {
			item = $(item);
			var checkClass = item.attr('class');

			if (checkClass != "two-input") {
				var key = item.children('label.apply-label').text().replace(/\s/g, "_");

				item.children('.apply-input-common').val(data[key]);
			}
		});

		var listTwoLabel = $('label.label-input-two');
		var listTwoInput = $('input.apply-two-text');

		for (var i = 0; i < listTwoInput.length; i++) {
			var a = $(listTwoInput[i]);
			var b = $(listTwoLabel[i]);

			var k_part1 = a.parent().children('label.apply-label').text().replace(/\s/g, "_");
			var k_part2 = b.text().replace(/\s/g, "_");
			var key = k_part1 + "_" + k_part2;

			a.val(data[key]);

		}

		var listRa = $("input.apply-radio");
		$.each(listRa, function(index, item) {
			item = $(item);
			var id = item.attr("id");
			item.attr("checked", data[id]);
		});
	},

	appendCombobox : function() {
		if ($this.dataTag2.Vehicle_Year) {
			if ($this.dataTag2.Vehicle_Year.indexOf("Select a") == -1) {
				$("#select-make").attr("disabled", false);
				$("#select-year").trigger("change");
				$("#select-make").val($this.dataTag2.Vehicle_Make);
			}
		}

		if ($this.dataTag2.Vehicle_Make) {
			if ($this.dataTag2.Vehicle_Make.indexOf("Select a") == -1) {
				$("#select-model").attr("disabled", false);
				$("#select-make").trigger("change");
				$("#select-model").val($this.dataTag2.Vehicle_Model);
			}
		}

		//////////////////
		if ($this.dataTag2.Trade_Vehicle_Year) {
			if ($this.dataTag2.Trade_Vehicle_Year.indexOf("Select a") == -1) {
				$("#trade-select-make").attr("disabled", false);
				$("#trade-select-year").trigger("change");
				$("#trade-select-make").val($this.dataTag2.Trade_Vehicle_Make);
			}
		}

		if ($this.dataTag2.Trade_Vehicle_Make) {
			if ($this.dataTag2.Trade_Vehicle_Make.indexOf("Select a") == -1) {
				$("#trade-select-model").attr("disabled", false);
				$("#trade-select-make").trigger("change");
				$("#trade-select-model").val($this.dataTag2.Trade_Vehicle_Model);
			}
		}

		////////////////
		if ($this.dataTag2.trade_yes == true) {
			$("#trade-yes").trigger("click");
		} else {
			$("#trade-no").trigger("click");
		}

		if ($this.dataTag2.trade_used == true) {
			$("#trade-used").trigger("click");
		} else {
			$("#trade-new").trigger("click");
		}
	},
	
	checkChangeEvent : function(){
		$("#select-year").change( function() {
			$("#select-make").empty();
				
			$this.listMake = [];
			$this.listObjMake = [];
			if ($(this).val() == "Select a Year") {
				$.each($this.listObjYear, function(index, item) {
					$this.listObjMake.push(item);
					$this.listMake.push(item.Make);
				});
			} else {
				var year = parseInt($(this).val());
				//$this.dataCbo = JSON.parse($this.dataCombobox.response);

				$.each($this.listObjYear, function(index, item) {
					var y = parseInt(item.ModelYear);
					//listYear.push(parseInt(item.ModelYear));
					if (y == year) {
						$this.listObjMake.push(item);
						$this.listMake.push(item.Make);
					}
				});
			}

			$this.listMake = _.uniq($this.listMake);
			$this.listMake = _.sortBy($this.listMake, function(num) {
				return num;
			});
			var html_o = "<option>Select a Make</option>";
			$("#select-make").append("<option>Select a Make</option>");
			$.each($this.listMake, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";
				$("#select-make").append("<option value='" + item + "'>" + item + "</option>");
			});
			
			var text = $(this).attr('value');
			if (text.indexOf("Select a") == -1) {
				$("#select-make").attr("disabled", false);
			}
			
			$this.checkRequiredField();
		});
		
		////
		
		$("#select-make").change(function() {
			$("#select-model").empty();
			var make = $(this).val();
			
			//$this.dataCbo = JSON.parse($this.dataCombobox.response);
			$this.listModel = [];
			$this.listObjModel = [];

			if (make == "Select a Make") {
				$.each($this.listObjMake, function(index, item) {
					$this.listObjModel.push(item);
					$this.listModel.push(item.Model);
				});
			} else {
				$.each($this.listObjMake, function(index, item) {
					var m = item.Make;
					//listYear.push(parseInt(item.ModelYear));
					if (m == make) {
						$this.listObjModel.push(item);
						$this.listModel.push(item.Model);
					}
				});
			}

			$this.listModel = _.uniq($this.listModel);
			$this.listModel = _.sortBy($this.listModel, function(num) {
				return num;
			});
			var html_o = "<option>Select a Model</option>";
			$("#select-model").append("<option>Select a Model</option>");
			$.each($this.listModel, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";
				if(item.Model != ""){
					$("#select-model").append("<option value='" + item + "'>" + item + "</option>");
				}
				
			});
			var text = $(this).attr('value');
			if (text.indexOf("Select a") == -1) {
				$("#select-model").attr("disabled", false);
			}
			$("#select-model").html(html_o);
			$this.checkRequiredField();
		});
		
		///
		$("#trade-select-year").change(function() {
			$("#trade-select-make").empty();
			$this.listTradeMake = [];
			$this.listObjTradeMake = [];
			var year = parseInt($(this).val());
			//$this.dataCbo = JSON.parse($this.dataCombobox.response);

			$.each($this.listObjTradeYear, function(index, item) {
				var y = parseInt(item.ModelYear);
				//listYear.push(parseInt(item.ModelYear));
				if (y == year) {
					$this.listObjTradeMake.push(item);
					$this.listTradeMake.push(item.Make);
				}
			});

			$this.listTradeMake = _.uniq($this.listTradeMake);
			$this.listTradeMake = _.sortBy($this.listTradeMake, function(num) {
				return num;
			});
			var html_o = "<option>Select a Make</option>";
			$("#trade-select-make").append("<option>Select a Make</option>");
			$.each($this.listTradeMake, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";
				$("#trade-select-make").append("<option value='" + item + "'>" + item + "</option>");
			});
			
			$("#trade-select-make").append("<option style='font-weight:bold;'>Others</option>");
			//html_o += "<option style='font-weight:bold;'>Others</option>";
			var text = $(this).attr('value');
			if (text.indexOf("Select a") == -1) {
				$("#trade-select-make").attr("disabled", false);
			}
			//$("#trade-select-make").html(html_o);
		});
		
		///
		$("#trade-select-make").change(function() {
			$("#trade-select-model").empty();
			var make = $(this).val();
			//$this.dataCbo = JSON.parse($this.dataCombobox.response);
			$this.listTradeModel = [];
			$this.listObjTradeModel = [];
			$.each($this.listObjTradeMake, function(index, item) {
				var m = item.Make;
				//listYear.push(parseInt(item.ModelYear));
				if (m == make) {
					$this.listObjTradeModel.push(item);
					$this.listTradeModel.push(item.Model);
				}
			});

			$this.listTradeModel = _.uniq($this.listTradeModel);
			$this.listTradeModel = _.sortBy($this.listTradeModel, function(num) {
				return num;
			});
			var html_o = "<option>Select a Model</option>";
			$("#trade-select-model").append("<option>Select a Model</option>");
			$.each($this.listTradeModel, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";
				$("#trade-select-model").append("<option value='" + item + "'>" + item + "</option>");
			});
			$("#trade-select-model").append("<option>Others</option>");
			//html_o += "<option>Others</option>";
			//$("#trade-select-model").html(html_o);
			
			var text = $(this).val();
			
			if (text.indexOf("Select a") == -1) {
				$("#trade-select-model").attr("disabled", false);
			}
			
			if (text == "Others") {
				$("#li-others-make").children('label.apply-label').addClass('required-input');
				$("#li-others-make").show();
				$this.checkRequiredField();
			} else {
				$("#li-others-make").children('label.apply-label').removeClass('required-input');
				$("#li-others-make").children("nobr").remove();
				$("#li-others-make").val('').hide();

				$("#li-others-model").children('label.apply-label').removeClass('required-input');
				$("#li-others-model").children("nobr").remove();
				$("#li-others-model").val('').hide();
				$this.checkRequiredField();
			}
		});
		
		//
		$("#trade-select-model").change(function() {
			var text = $(this).val();

			if (text == "Others") {
				$("#li-others-model").children('label.apply-label').addClass('required-input');
				$("#li-others-model").show();
				$this.checkRequiredField();
			} else {
				$("#li-others-model").children('label.apply-label').removeClass('required-input');
				$("#li-others-model").children("nobr").remove();
				$("#li-others-model").val('').hide();

				$this.checkRequiredField();
			}

		});
		
		$("#select-model").change(function() {
		
			$this.checkRequiredField();
			

		});
		
		
	},
	addHandlers : function() {
		$this = this;
		$this.callKeyUpEvent();
		/*
		$("#trade-select-year").live("change", function() {
			$this.listTradeMake = [];
			$this.listObjTradeMake = [];
			var year = parseInt($(this).val());
			//$this.dataCbo = JSON.parse($this.dataCombobox.response);

			$.each($this.listObjTradeYear, function(index, item) {
				var y = parseInt(item.ModelYear);
				//listYear.push(parseInt(item.ModelYear));
				if (y == year) {
					$this.listObjTradeMake.push(item);
					$this.listTradeMake.push(item.Make);
				}
			});

			$this.listTradeMake = _.uniq($this.listTradeMake);
			$this.listTradeMake = _.sortBy($this.listTradeMake, function(num) {
				return num;
			});
			var html_o = "<option>Select a Make</option>";
			$.each($this.listTradeMake, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";
			});
			html_o += "<option style='font-weight:bold;'>Others</option>";
			$("#trade-select-make").html(html_o);
		});*/
		/*
		$("#select-year").change( function() {
			$this.listMake = [];
			$this.listObjMake = [];
			if ($(this).val() == "Select a Year") {
				$.each($this.listObjYear, function(index, item) {
					$this.listObjMake.push(item);
					$this.listMake.push(item.Make);
				});
			} else {
				var year = parseInt($(this).val());
				//$this.dataCbo = JSON.parse($this.dataCombobox.response);

				$.each($this.listObjYear, function(index, item) {
					var y = parseInt(item.ModelYear);
					//listYear.push(parseInt(item.ModelYear));
					if (y == year) {
						$this.listObjMake.push(item);
						$this.listMake.push(item.Make);
					}
				});
			}

			$this.listMake = _.uniq($this.listMake);
			$this.listMake = _.sortBy($this.listMake, function(num) {
				return num;
			});
			var html_o = "<option>Select a Make</option>";
			$.each($this.listMake, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";

			});

			$("#select-make").html(html_o);
			$this.checkRequiredField();
		});
		
		$("#trade-select-make").live("change", function() {
			var make = $(this).val();
			//$this.dataCbo = JSON.parse($this.dataCombobox.response);
			$this.listTradeModel = [];
			$this.listObjTradeModel = [];
			$.each($this.listObjTradeMake, function(index, item) {
				var m = item.Make;
				//listYear.push(parseInt(item.ModelYear));
				if (m == make) {
					$this.listObjTradeModel.push(item);
					$this.listTradeModel.push(item.Model);
				}
			});

			$this.listTradeModel = _.uniq($this.listTradeModel);
			$this.listTradeModel = _.sortBy($this.listTradeModel, function(num) {
				return num;
			});
			var html_o = "<option>Select a Model</option>";
			$.each($this.listTradeModel, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";

			});
			html_o += "<option>Others</option>";
			$("#trade-select-model").html(html_o);
		});
		/*
		$("#select-make").live("change", function() {
			var make = $(this).val();
			//$this.dataCbo = JSON.parse($this.dataCombobox.response);
			$this.listModel = [];
			$this.listObjModel = [];

			if (make == "Select a Make") {
				$.each($this.listObjMake, function(index, item) {
					$this.listObjModel.push(item);
					$this.listModel.push(item.Model);
				});
			} else {
				$.each($this.listObjMake, function(index, item) {
					var m = item.Make;
					//listYear.push(parseInt(item.ModelYear));
					if (m == make) {
						$this.listObjModel.push(item);
						$this.listModel.push(item.Model);
					}
				});
			}

			$this.listModel = _.uniq($this.listModel);
			$this.listModel = _.sortBy($this.listModel, function(num) {
				return num;
			});
			var html_o = "<option>Select a Model</option>";
			$.each($this.listModel, function(index, item) {
				html_o += "<option value='" + item + "'>" + item + "</option>";

			});

			$("#select-model").html(html_o);
			$this.checkRequiredField();
		});
		*/
		$("input.apply-radio").live("click", function() {
			var list = $("input.apply-radio");
			$.each(list, function(index, item) {
				item = $(item);
				if (!item.attr("checked"))
					item.removeClass('radio-checked');
			});

			$(this).addClass('radio-checked');
		});
		$("#bt-print").live('click', function() {
			window.print();
		});
		$("input.just-num").keydown(function(event) {
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

		///////////////////////////////////////////////
		$('#trade-yes').live('click', function() {
			$('div.hidden-tag2').show();
		});
		$('#trade-no').live('click', function() {
			$('div.hidden-tag2').hide();
		});
/*
		$('#select-year').live("change", function() {

			var text = $(this).attr('value');
			if (text.indexOf("Select a") == -1) {
				$("#select-make").attr("disabled", false);
			}
		});
		$("#select-make").live("change", function() {

			var text = $(this).attr('value');
			if (text.indexOf("Select a") == -1) {
				$("#select-model").attr("disabled", false);
			}
		});

		$('#trade-select-year').live("change", function() {

			var text = $(this).attr('value');
			if (text.indexOf("Select a") == -1) {
				$("#trade-select-make").attr("disabled", false);
			}
		}); 
		$("#trade-select-make").live("change", function() {

			var text = $(this).attr('value');
			if (text.indexOf("Select a") == -1) {
				$("#trade-select-model").attr("disabled", false);
			}

			if (text == "Others") {
				$("#li-others-make").children('label.apply-label').addClass('required-input');
				$("#li-others-make").show();
				$this.checkRequiredField();
			} else {
				$("#li-others-make").children('label.apply-label').removeClass('required-input');
				$("#li-others-make").children("nobr").remove();
				$("#li-others-make").val('').hide();

				$("#li-others-model").children('label.apply-label').removeClass('required-input');
				$("#li-others-model").children("nobr").remove();
				$("#li-others-model").val('').hide();
				$this.checkRequiredField();
			}
		});
		$("#trade-select-model").live("change", function() {
			var text = $(this).attr('value');

			if (text == "Others") {
				$("#li-others-model").children('label.apply-label').addClass('required-input');
				$("#li-others-model").show();
				$this.checkRequiredField();
			} else {
				$("#li-others-model").children('label.apply-label').removeClass('required-input');
				$("#li-others-model").children("nobr").remove();
				$("#li-others-model").val('').hide();

				$this.checkRequiredField();
			}

		});*/

		$("#tag3-comment").live("keydown", function(event) {
			var num = 200;
			if ($(this).val().length > num) {
				return false;
			} else {
				$("#tag3-counter").text(num - parseInt($(this).val().length));
			}
		});
		///////////////////////////////////////////////////////

		$('#vehicle-info').live('click', function() {
			$this.saveHistoryInput();

			var check = $this.checkCurrentPage();
			/*
			if (check == 1) {
				var checkRequired = $("nobr.label-required");
				if (checkRequired.length > 0) {
					$.each(checkRequired, function(index, item) {

						var text = $(this).parent().children('label.required-input').text();
						$(this).parent().children('.nobr-label').remove();
						$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>Please enter valid " + text + ".</nobr>")
					});
					return;
				}
			}
			*/
			var li_list = $("#apply-menu li");
			$.each(li_list, function(index, item) {
				item = $(item);
				item.removeClass('active');
			});
			$("#bt-next").removeClass('tag3-submit');
			$(this).addClass('active');

			///////
			var template = _.template($($this.template_tag2).html());

			$('#apply-content').html(template({	}));
			$("#bt-next").text('Next');

			$this.listYear = [];
			$this.listObjYear = [];
			$this.listTradeYear = [];
			$this.listTradeObjYear = [];

			$this.dataCbo = JSON.parse($this.dataCombobox.responseText);
			$.each($this.dataCbo.slider_info, function(index, item) {
				$this.listObjTradeYear.push(item);
				$this.listTradeYear.push(parseInt(item.ModelYear));
				$this.listObjYear.push(item);
				$this.listYear.push(parseInt(item.ModelYear));
			});
			$this.listYear = _.uniq($this.listYear);
			$this.listYear = _.sortBy($this.listYear, function(num) {
				return num;
			}).reverse();

			$.each($this.listYear, function(index, item) {
				$("#select-year").append("<option value='" + item + "'>" + item + "</option>");
				$("#trade-select-year").append("<option value='" + item + "'>" + item + "</option>");
			});

			$this.appendSavedValue($this.dataTag2);

			$this.appendCombobox();
			$("#trade-select-model").trigger("change");

			var selectList = $(".apply-select");
			$.each(selectList, function(index, item) {
				item = $(item);
				if (item.val().indexOf("Select a") == -1) {
					item.attr("disabled", false);
					item.parent().children('nobr.label-required').remove();
				}
			});

			$("input.apply-text").blur(function() {
				var text = "";
				text = $(this).attr('value');
				if (text == "") {
					var label = $(this).parent().children("label.required-input").text();
					$(this).parent().children('.nobr-label').remove();
					var hasNobr = $(this).parent().children('nobr.label-required');

					if (label) {
						if (hasNobr.length < 1) {
							$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>Please enter valid " + label + ".</nobr>")
						}
					}

				} else {
					if ($(this).attr("id") == "apply-email") {
						if ($this.checkValidEmail(text)) {
							$(this).parent().children('nobr').remove();
						} else {

						}
					} else {
						$(this).parent().children('nobr').remove();
					}

				}

			});

			$this.checkRequiredField();
			
			$this.checkChangeEvent();
		
		

			///////
		});
		$('#customer-info').live('click', function() {
			$this.saveHistoryInput();
			var li_list = $("#apply-menu li");
			$.each(li_list, function(index, item) {
				item = $(item);
				item.removeClass('active');
			});

			$(this).addClass('active');

			var template = _.template($($this.template_tag1).html());
			$("#bt-next").removeClass('tag3-submit');
			$('#apply-content').html(template({	}));
			$this.loadMaskInput();

			$("#bt-next").text('Next');

			var state_template = _.template($($this.state_template).html());
			$('select.statelist').append(state_template({}));

			$this.appendSavedValue($this.dataTag1);
			$this.callKeyDownEvent();

			$this.checkRequiredField();

			$this.callKeyUpEvent();
		});

		$('#financing-info').live('click', function() {
			$this.saveHistoryInput();

			var check = $this.checkCurrentPage();
			if (check == 1) {
				return;
			}

			var checkRequired = $("nobr.label-required");
			if (checkRequired.length > 0) {
				$.each(checkRequired, function(index, item) {
					$(this).parent().children('.nobr-label').remove();
					$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>This field is required</nobr>")
				});
				return;
			}

			var li_list = $("#apply-menu li");
			$.each(li_list, function(index, item) {
				item = $(item);
				item.removeClass('active');
			});

			$(this).addClass('active');

			var template = _.template($($this.template_tag3).html());

			$('#apply-content').html(template({	}));

			$("#bt-next").text('Submit');
			$("#bt-next").addClass('tag3-submit');

			$this.callKeyDownEvent();

			$this.appendSavedValue($this.dataTag3);

			if ($this.dataTag3.trade_leave == true) {
				$("#trade-leave").trigger("click");
			} else {
				$("#trade-buy").trigger("click");
			}

			$("input.apply-text").blur(function() {
				var text = "";
				text = $(this).attr('value');
				if (text == "") {
					var label = $(this).parent().children("label.required-input").text();
					$(this).parent().children('.nobr-label').remove();
					var hasNobr = $(this).parent().children('nobr.label-required');

					if (label) {
						if (hasNobr.length < 1) {
							$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>Please enter valid " + label + ".</nobr>")
						}
					}

				} else {
					if ($(this).attr("id") == "apply-email") {
						if ($this.checkValidEmail(text)) {
							$(this).parent().children('nobr').remove();
						} else {

						}
					} else {
						$(this).parent().children('nobr').remove();
					}

				}

			});
			$this.checkRequiredField();
		});

		/////////////
		$("#bt-next").live('click', function() {
			var checkRequired = $("nobr.label-required");

			if (checkRequired.length > 0) {
				$.each(checkRequired, function(index, item) {
					$(this).parent().children('.nobr-label').remove();
					$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>This field is required</nobr>")
				});
				return;
			}

			var check = $this.checkCurrentPage();
			if (check == 1) {
				$this.saveHistoryInput();
				$("#bt-next").removeClass('tag3-submit');
				$("#customer-info").removeClass('active');
				$("#vehicle-info").addClass('active');
				var template = _.template($($this.template_tag2).html());
				$('#apply-content').html(template({	}));

				$this.listYear = [];
				$this.listObjYear = [];
				$this.listTradeYear = [];
				$this.listTradeObjYear = [];
				$this.dataCbo = JSON.parse($this.dataCombobox.responseText);
				$.each($this.dataCbo.slider_info, function(index, item) {
					$this.listObjTradeYear.push(item);
					$this.listTradeYear.push(parseInt(item.ModelYear));
					$this.listObjYear.push(item);
					$this.listYear.push(parseInt(item.ModelYear));
				});
				$this.listYear = _.uniq($this.listYear);
				$this.listYear = _.sortBy($this.listYear, function(num) {
					return num;
				}).reverse();

				$.each($this.listYear, function(index, item) {
					$("#select-year").append("<option value='" + item + "'>" + item + "</option>");
					$("#trade-select-year").append("<option value='" + item + "'>" + item + "</option>");
				});

				$this.appendSavedValue($this.dataTag2);

				var selectList = $(".apply-select");
				$.each(selectList, function(index, item) {
					item = $(item);
					if (item.val().indexOf("Select a") != -1) {
						item.attr("disabled", false);
					}
				});

				$this.appendCombobox();
				$("#trade-select-model").trigger("change");

				$("input.apply-text").blur(function() {
					var text = "";
					text = $(this).attr('value');
					if (text == "") {
						var label = $(this).parent().children("label.required-input").text();
						$(this).parent().children('.nobr-label').remove();
						var hasNobr = $(this).parent().children('nobr.label-required');

						if (label) {
							if (hasNobr.length < 1) {
								$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>Please enter valid " + label + ".</nobr>")
							}
						}

					} else {
						if ($(this).attr("id") == "apply-email") {
							if ($this.checkValidEmail(text)) {
								$(this).parent().children('nobr').remove();
							} else {

							}
						} else {
							$(this).parent().children('nobr').remove();
						}

					}

				});
				$this.checkRequiredField();
				
				$this.checkChangeEvent();

			} else {
				if (check == 2) {
					$this.saveHistoryInput();
					$("#vehicle-info").removeClass('active');
					$("#financing-info").addClass('active');
					var template = _.template($($this.template_tag3).html());
					$('#apply-content').html(template({	}));

					$("#bt-next").text('Submit');
					$("#bt-next").addClass('tag3-submit');

					$this.callKeyDownEvent();
					$this.appendSavedValue($this.dataTag3);

					if ($this.dataTag3.trade_leave == true) {
						$("#trade-leave").trigger("click");
					} else {
						$("#trade-buy").trigger("click");
					}

					$("input.apply-text").blur(function() {
						var text = "";
						text = $(this).attr('value');
						if (text == "") {
							var label = $(this).parent().children("label.required-input").text();
							$(this).parent().children('.nobr-label').remove();
							var hasNobr = $(this).parent().children('nobr.label-required');

							if (label) {
								if (hasNobr.length < 1) {
									$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>Please enter valid " + label + ".</nobr>")
								}
							}

						} else {
							if ($(this).attr("id") == "apply-email") {
								if ($this.checkValidEmail(text)) {
									$(this).parent().children('nobr').remove();
								} else {

								}
							} else {
								$(this).parent().children('nobr').remove();
							}

						}

					});
					$this.checkRequiredField();
					
					$this.checkChangeEvent();

				} else {

				}
			}
		});

		$('div.tag3-submit').live('click', function() {
			if ($("#check-agree").attr('checked')) {
				$this.saveHistoryInput();

				var wk_data = {};
				$.each($this.dataTag1,function(index,item){
					wk_data[index] = item;
				});
				$.each($this.dataTag2,function(index,item){
					wk_data[index] = item;
				});
				$.each($this.dataTag3,function(index,item){
					wk_data[index] = item;
				});
				
				$.ajax({
					type : "POST",
					url : "/ajax/insert_finance_info.php",
					data : wk_data,
					dataType : "json",
					cache : false,
					success : function(data) {
						return data.status;
					}
				});				
				
			} else {
				$("#box-announce").show();
				setTimeout(function() {
					$('#box-announce').fadeOut('fast');
				}, 1000);

			}
		});

		$("#DOB").blur(function() {
			var vl = $(this).val().split('/')[2];
			var year = new Date().getFullYear();
			if (year - parseInt(vl) <= 100) {
				$(this).parent().children('nobr').remove();
			} else {
				return false;
			}

		});
		$("input.apply-text").blur(function() {
			var text = "";
			text = $(this).attr('value');
			if (text == "") {
				var label = $(this).parent().children("label.required-input").text();
				$(this).parent().children('.nobr-label').remove();
				var hasNobr = $(this).parent().children('nobr.label-required');

				if (label) {
					if (hasNobr.length < 1) {
						$(this).parent().append("<nobr class='nobr-label' style='margin-left:20px;color:red'>Please enter valid " + label + ".</nobr>")
					}
				}

			} else {
				if ($(this).attr("id") == "apply-email") {
					if ($this.checkValidEmail(text)) {
						$(this).parent().children('nobr').remove();
					} else {

					}
				} else {
					$(this).parent().children('nobr').remove();
				}
			}
		});

		$('.two-input input.apply-two-text').blur(function() {
			//var list = $(".two-input input.apply-text");
			var list = $(this).parent().children('input.apply-two-text');
			var check = true;
			$.each(list, function(index, item) {
				item = $(item);
				if (item.attr('value') == "") {
					check = false;
				}
			});
			if (check) {
				$(this).parent().children('nobr').remove();
			}
		});
		$(".apply-textarea").blur(function() {
			var text = "";
			text = $(this).attr('value');
			if (text == "") {

			} else {
				if ($(this).attr("id") == "apply-email") {
					if ($this.checkValidEmail(text)) {
						$(this).parent().children('nobr').remove();
					} else {

					}
				} else {
					$(this).parent().children('nobr').remove();
				}
			}
		});

		$(".apply-select").change(function() {
			var text = "";
			text = $(this).attr('value');
			if (text.indexOf("Select a") != -1) {

			} else {
				$(this).parent().children('nobr').remove();
			}
		});
	},

	checkCurrentPage : function() {
		var count = 0;
		var check = 0;
		var li_list = $("#apply-menu li");
		$.each(li_list, function(index, item) {
			item = $(item);
			count++;
			if (item.hasClass('active')) {
				check = count;
			}
		});
		return check;
	}
});
