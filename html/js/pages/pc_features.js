var featuresClass = Class({
	data : null,
	init : function() {
		$this = this;		
		var wk_data = {
				"features" : 2
		};

		$.ajax({
			type : "POST",
			url : "/ajax/load_features_info.php",
			data : wk_data,
			dataType : "json",
			cache : false,
			success : function(data) {
				$this.showPage(data.features_array);
			}
		});

		this.addHandlers();
	},
	showPage : function(data) {
		$this.data = data;
		var html_o = "";
		$.each(data, function(index, item) {
			
			html_o += '<div class="fc-items">';
			html_o += '<div class="fc-item-top">';
			html_o += '<a href="/inventory/detail/' + item.ListingID + '"><label><nobr>' + item.ModelYear + '</nobr> <nobr>' + item.Make + '</nobr> <nobr>' + item.Model + '</nobr></label></a>';
			html_o += '</div>';
			html_o += '<div class="fc-items-content">';
			html_o += '<div class="fc-items-content-img">';
			if (item.CarImageUrl != "") {
				html_o += '<img src="' + item.CarImageUrl.split(',')[0] + '" />';
			} else {
				html_o += '<img style="width:125px;" src="/images/no-images.jpg" />';
			}

			html_o += '</div>';

			html_o += '<div class="fc-items-content-info">';
			html_o += '<ul>';
			item.SalePrice = $this.CommaFormatted(item.SalePrice);
			html_o += '<li>Price: $' + item.SalePrice + '</li>';
			html_o += '<li>Bodystyle: ' + item.BodyType + '</li>';
			if(item.NewUsed == ""){
				html_o += '<li>Type: Not Specified</li>';
			}else{
				html_o += '<li>Type: ' + item.NewUsed + '</li>';
			}
			html_o += '<li>Stock Number: ' + item.StockNumber + '</li>';
			html_o += '</ul></div> </div>';
			html_o += '<div class="fc-items-button"> <div class="fbtn-detail"> <a class="fc-details" href="/inventory/detail/' + item.ListingID + '" style="font-weight: bold;color: #005580 !important;">View Details</a> </div> </div></div>';
		});
		html_o += '<br style="clear:both;font-size:0;line-height:0;height:0;" />';
		$("#fc-content").html(html_o);

	},
	printPage : function(data) {
		var html_o = "";
		$.each(data, function(index, item) {
			
			html_o += '<div class="fc-items">';
			html_o += '<div class="fc-item-top">';
			html_o += '<label><nobr>' + item.ModelYear + '</nobr> <nobr>' + item.Make + '</nobr> <nobr>' + item.Model + '</nobr></label>';
			html_o += '</div>';
			html_o += '<div class="fc-items-content">';
			html_o += '<div class="fc-items-content-img">';
			if (item.CarImageUrl != "") {
				html_o += '<img src="' + item.CarImageUrl.split(',')[0] + '" />';
			} else {
				html_o += '<img style="width:125px;" src="/images/no-images.jpg" />';
			}

			html_o += '</div>';

			html_o += '<div class="fc-items-content-info">';
			html_o += '<ul>';
			item.SalePrice = $this.CommaFormatted(item.SalePrice);
			html_o += '<li>Price: $' + item.SalePrice + '</li>';
			html_o += '<li>Bodystyle: ' + item.BodyType + '</li>';
			if(item.NewUsed == ""){
				html_o += '<li>Type: Not Specified</li>';
			}else{
				html_o += '<li>Type: ' + item.NewUsed + '</li>';
			}
			
			html_o += '<li>Engine: ' + item.Cylinders + 'Cylinders ' + item.Liters + 'Liters</li>';
			if(item.ExteriorColor != ""){
				html_o += '<li>ExteriorColor: ' + item.ExteriorColor + '</li>';
			}else{
				html_o += '<li>ExteriorColor: Not Specified</li>';
			}
			if(item.InteriorColor != null){
				html_o += '<li>InteriorColor: ' + item.InteriorColor + '</li>';				
			}else{
				html_o += '<li>InteriorColor: Not Specified</li>';
			}
			
			html_o += '<li>VIN: ' + item.VINNumber + '</li>';

			html_o += '<li>Stock Number: ' + item.StockNumber + '</li>';
			html_o += '</ul></div> </div>';
			html_o += '<div class="fc-items-button"> <div class="fbtn-detail"> <a class="fc-details" href="/inventory/detail/' + item.ListingID + '" style="font-weight: bold;color: #005580 !important;">View Details</a> </div> </div></div>';
		});
		html_o += '<br style="clear:both;font-size:0;line-height:0;height:0;" />';
		$("#fc-content").html(html_o);
	},
	CommaFormatted : function(amount) {
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
	},

	addHandlers : function() {
		$("#fbtn-print").live("click", function() {
			$this.printPage($this.data);
			$(".fc-items").css("height", "235px");
			$(".fc-items-content").css("height", "176px");
			var inter = setInterval(function() {				
				$(".fc-items-content-info").children('ul').children('li').css("color", "black");
				window.print();
				$this.showPage($this.data);
				clearInterval(inter);
			}, 1000);

		});
	}
});

$(function() {

});

$(document).ready(function() {

});
