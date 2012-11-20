<?php /* Smarty version 2.6.26, created on 2012-11-14 20:18:54
         compiled from inventory/pc_detail.html */ ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<meta name="description" content="Welcome to Hornburg Pre-Owned, a premier car dealership in Newport Beach Orange County that focuses on providing the highest quality of customer service. If you are looking for a vast selection of used domestic or import models at affordable prices, then you are in the right place. Our beautiful Newport Beach dealership is filled with friendly and knowledgeable employees who are eager to assist you.">
		 <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>
		
		<!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
		<!--[if lt IE 9]>
		
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<script src="/libraries/underscore-min.js" type="text/javascript"></script>
		<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_load_javascript.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
		<link rel="stylesheet" href="/css/detail.css" type="text/css" media="all" />
		
	</head>
	<body>
		<div class="container" id="wrapper">
			<div id="fb-root"></div>
			<script></script>
			<!-- WRAPPER DIV -->
			<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
			<?php echo '
			<script type="text/javascript">
				var flat = "inventory";
				var dealer_id = '; ?>
<?php echo $this->_tpl_vars['listingid']; ?>
<?php echo ';
			</script>
			'; ?>

			<script type="text/javascript" src="/js/pages/pc_common.js"></script>
			<script type="text/javascript" src="/js/pages/pc_detail.js"></script>
			<div id="detail-container">
				<div id="detail-left">	

					<div id="holder-slide-images">
						<div class="slide-images">
						</div>
					</div>
					<div id="carousel-nav">
						<!-- Carousel nav -->
						<a class="carousel-control left" href="#myCarousel" data-slide="prev"> <i class="icon-chevron-left icon-white"> </i></a>
						<a class="carousel-control right" href="#myCarousel" data-slide="next"> <i class="icon-chevron-right icon-white"> </i></a>
					</div>
					<div id="detail-left-bottom">
						<div style="position: relative; margin: 8px; margin-right: 15px !important;">
							<h4 style="margin-top: 15px; margin-bottom: 0px;">Owners</h4>CARFAX 1-Owner <img style="position: absolute; right: 0px; top: 0px;" src="http://www.carfaxonline.com/phoenix/img/one_owner_logo_bw.jpg">
							<h4 style="margin-top: 15px; margin-bottom: 0px;">Service Records</h4> 1 Service Records Available
							<br>
							<h4 style="margin-top: 15px; margin-bottom: 0px;">Accident Report</h4>
							<ul style="list-style-type: none; margin-left: 5px;">
								<li><img alt="No Total Loss Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Total Loss Reported to CARFAX
								</li>
								<li><img alt="No Structural/Frame Damage Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Structural/Frame Damage Reported to CARFAX
								</li>
								<li><img alt="No Airbag Deployment Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Airbag Deployment Reported to CARFAX
								</li>
								<li><img alt="No Indication of an Odometer Rollback" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Indication of an Odometer Rollback
								</li>
								<li><img alt="No Accidents / Damage Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Accidents / Damage Reported to CARFAX
								</li>
								<li><img alt="No Manufacturer Recalls Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Manufacturer Recalls Reported to CARFAX
								</li>
							</ul>

							<a class="btn finance-btn" style="color: white !important; background-color: #08506D !important;" target="_blank" id="carfaxBTN" href="http://www.carfax.com/VehicleHistory/p/Report.cfx?vin=1FMNU45S23EA06753">Click Here For Full Report</a>
							<br>
							<br>
							<div style=" width: 100%; font-size: .8em; opacity: .7; text-align:center !important;">
								Not all accidents or other issues are reported to CARFAX. The number of owners is estimated. See the full CARFAX Report for additional information and glossary of terms. 31.Oct.2012 22:02:36
							</div>
						</div>
					</div>
				</div>
				<div id="detail-right">
					<div id="detail-right-top">
						<div id="right-top-left">
							<h1 class="name"></h1>
							<ul class="unstyled"></ul>
						</div>
						<div id="right-top-right">
							<h2></h2>
							<a href="#more-info" class="fancybox btn detail-btn">Get More Info</a>
							<a href="#share" class="fancybox btn detail-btn">Share With a Friend</a>
							<a href="/finance" class="btn detail-btn finance">Apply For Financing</a>
							<a href="#test-drive" id="a-test-drive" class="fancybox btn detail-btn">Request a Test Drive</a>
							<a href="javascript:void(0);" class="btn detail-btn" target="_blank" id="print-flyer">Print Flyer</a>
							<!--<a href="/print/<?php echo $this->_tpl_vars['detail_info']['VINNumber']; ?>
" class="btn detail-btn" target="_blank" id="print-flyer">Print Flyer</a> -->

						</div>
						<div id="fb-tweet">
							<!--
							<div class="fb-like" data-href="http://vinpage.quocmy/inventory/detail/<?php echo $this->_tpl_vars['detail_info']['ListingID']; ?>
" data-layout="button_count" data-send="false" data-width="450" data-show-faces="true"></div>
							-->
							<div class="fb-like" data-href="http://www.hornburgpreowned.com" data-layout="button_count" data-send="false" data-width="450" data-show-faces="true" style="width: 71px;"></div>

							<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
							<script id="tweeter-script"></script>
						</div>
					</div>
					<div id="detail-right-middle">
						<div id="dt-middle-menu">
							<ul class="nav nav-tabs">
								<li id="description-info" class="active">
									<a href="javascript:void(0);">Description</a>
								</li>
								<li id="option-info">
									<a href="javascript:void(0);">Options</a>
								</li>
								<li id="estimator-info">
									<a href="javascript:void(0);">Estimator</a>
								</li>
								<li id="direction-info">
									<a target="_blank" href="https://maps.google.com/?q=2101-Dove-Street,-Newport-Beach-CA&amp;ie=UTF8&amp;hq=&amp;hnear=2101-Dove-Street,-Newport-Beach-CA&amp;t=m&amp;z=14&amp;source=embed">Directions</a>
								</li>
							</ul>

						</div>
						<div id="dt-content-clear">
							<div id="dt-middle-content">
								<div class="tab-content">
									<div class="tab-pane active" id="description">
										<div class="well"></div>
									</div>
								</div>
							</div>
						</div>

					</div>

					<div class="span9 cell" id="keywords">
						<div id="c3wrap" class="cellwrap"></div>
					</div>
				</div>
			</div>
			<div id="form-hider" style="display: none !important;">
				<div id="test-drive" class="form-wrap">
					<div id="test-drive-listing">
						<!-- AD CELLS -->
						<h3>Take a Test Drive!</h3>
						<h4></h4>
						<p>
							At Freeway Isuzu, we understand that your time is important. Please enter your contact information and desired test drive date and time, so we can provide you with the undivided attention you deserve.
						</p>
						<div id="test-drive" class="validate form-section">
							<legend style="border: none; margin-top: 10px;"></legend>

							<legend>
								Appointment Date
							</legend>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-user icon-white"></i></span>
								<input name="name" class="required" id="name_test" type="text" onfocus="if (this.value == 'Name') this.value = '';" onblur="if (this.value == '') this.value = 'Name';" value="Name"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-envelope icon-white"></i></span>
								<input name="email" class="required" id="email_test" type="text" onfocus="if (this.value == 'Email') this.value = '';" onblur="if (this.value == '') this.value = 'Email';" value="Email"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on"><b style="color: white !important;">#</b></span>
								<input name="phone" class="number required" id="phone_test" type="text" onfocus="if (this.value == 'Phone Number') this.value = '';" onblur="if (this.value == '') this.value = 'Phone Number';" value="Phone Number"/>
								<span class="red"> * </span>
							</div>

							<div class="input-prepend control-group" id="input-prepend-date">
								<span class="add-on"><i class="icon-calendar icon-white"> </i></span>
								<input type="text" name="date" id="test-date" class="datepicker required" onfocus="if (this.value == 'Select a Date!') this.value = '';" onblur="if (this.value == '') this.value = 'Select a Date!';" value="Select a Date!"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-time icon-white"> </i></span>
								<input type="text" name="time" id="time" class="required" onfocus="if (this.value == 'Enter a Time (ie. 12:00pm)') this.value = '';" onblur="if (this.value == '') this.value = 'Enter a Time (ie. 12:00pm)';" value="Enter a Time (ie. 12:00pm)"/>
							</div>

							<legend>Comments</legend>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-comment icon-white"> </i></span>
								<textarea name="comments" id="comments_test" onfocus="if (this.value == 'Additional Comments') this.value = '';" onblur="if (this.value == '') this.value = 'Additional Comments';">Additional Comments</textarea>
							</div>

							<input type="submit" name="testdrive" id="testdrive" value="Test Drive" style="height: 30px; margin-left: 20px; color: white; background-color: #3F3F2B" />
						</div>
					</div>
				</div>

				<div id="more-info" class="form-wrap">
					<div id="more-info-wrap">
						<h3>Get More Info!</h3>
						<h4></h4>
						<div id="tertiary-form" class="validate form-section" >
							<legend style="border: none; margin-top: 10px;"></legend>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-user icon-white"></i></span>
								<input name="name" class="required" id="name_more" type="text" onfocus="if (this.value == 'Name') this.value = '';" onblur="if (this.value == '') this.value = 'Name';" value="Name"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-envelope icon-white"></i></span>
								<input name="email" class="required" id="email_more" type="text" onfocus="if (this.value == 'Email') this.value = '';" onblur="if (this.value == '') this.value = 'Email';" value="Email"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on"><b style="color: white !important;">#</b></span>
								<input name="phone" class="number required" id="phone_more" type="text" onfocus="if (this.value == 'Phone Number') this.value = '';" onblur="if (this.value == '') this.value = 'Phone Number';" value="Phone Number"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-comment icon-white"></i></span>
								<textarea name="comments" id="comments_more" onfocus="if (this.value == 'Additional Comments') this.value = '';" onblur="if (this.value == '') this.value = 'Additional Comments';">Additional Comments</textarea>
							</div>

							<input type="submit" name="moreinfo" id="moreinfo" value="Get More Information" style="height: 30px; margin-left: 20px; color: white; background-color: #3F3F2B" />
						</div>
					</div>
				</div>

				<div id="share" class="form-wrap">
					<h3>Share It!</h3>
					<h4></h4>
					<p>
						Know someone who may be interested? Send it to them now through email!
					</p>
					<div id="share-with-friend" class="validate form-section">
						<legend style="border: none; margin-top: 10px;"></legend>

						<!-- Contact Form Include -->
						<legend>
							Contact Info
						</legend>
						<div class="input-prepend control-group">
							<span class="add-on" title="Name"><i class="icon-user icon-white"> </i> </span>
							<input name="name" class="required" id="name_share" type="text" onfocus="if (this.value == 'Name') this.value = '';" onblur="if (this.value == '') this.value = 'Name';" value="Name" placeholder="Name">
							<span class="red"> * </span>
						</div>
						<div class="input-prepend control-group">
							<span class="add-on" title="Email"><i class="icon-envelope icon-white"></i></span>
							<input name="email" class="required" id="email_share" type="text" onfocus="if (this.value == 'Email') this.value = '';" onblur="if (this.value == '') this.value = 'Email';" value="Email" placeholder="Email">
							<span class="red"> * </span>
						</div>
						<div class="input-prepend control-group">
							<span class="add-on" title="Phone"><b style="color: white !important;">#</b></span>
							<input name="phone" class="number required" id="phone_share" type="text" onfocus="if (this.value == 'Phone Number') this.value = '';" onblur="if (this.value == '') this.value = 'Phone Number';" value="Phone Number" placeholder="Phone Number">
							<span class="red"> * </span>
						</div>
						<legend>
							Friend's Contact Info
						</legend>
						<div class="input-prepend control-group">
							<span class="add-on"><i class="icon-user icon-white"></i></span>
							<input type="text" name="fname" id="fname" class="required" onfocus="if (this.value == 'Name of Friends') this.value = '';" onblur="if (this.value == '') this.value = 'Name of Friends';" value="Name of Friends" placeholder="Name of Friends">
						</div>
						<div class="input-prepend control-group">
							<span class="add-on"><i class="icon-envelope icon-white"></i></span>
							<input type="text" name="femail" id="femail" class="required email" onfocus="if (this.value == 'Email of Friends') this.value = '';" onblur="if (this.value == '') this.value = 'Email of Friends';" value="Email of Friends" placeholder="Email of Friends">
						</div>

						<legend>
							Comments
						</legend>
						<div class="input-prepend control-group icon-white">
							<span class="add-on"><i class="icon-comment icon-white"></i></span>
							<textarea name="comments" id="comments_share" onfocus="if (this.value == 'Additional Comments') this.value = '';" onblur="if (this.value == '') this.value = 'Additional Comments';" placeholder="Additional Comments">Additional Comments</textarea>
						</div>
						<input type="submit" name="share" id="shareinfo" value="Share with Friend"style="height: 30px; margin-left: 20px; color: white; background-color: #3F3F2B"/>
					</div>
				</div>
				<div id="showLargeImg" class="form-wrap">

				</div>

			</div>
		</div>
		<!-- END OF WRAPPER DIV -->
		<input type="hidden" id="hidden_carid" value="<?php echo $this->_tpl_vars['detail_info']['ListingID']; ?>
">
		<input type="hidden" id="hidden_make" value="<?php echo $this->_tpl_vars['detail_info']['Make']; ?>
">
		<input type="hidden" id="hidden_model" value="<?php echo $this->_tpl_vars['detail_info']['Model']; ?>
">
		<input type="hidden" id="hidden_year" value="<?php echo $this->_tpl_vars['detail_info']['ModelYear']; ?>
">

		<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	</body>
	<script id="print-flyer-template" type="text/template">
		<head>
		<link rel="stylesheet" href="/css/detail.css" type="text/css" media="all" />
		</head>
		<body>
		<div id="print-container">
		<div id="print-header">
		<div id="print-header-title">
		<h1>Hornburg Pre-Owned</h1>
		</div>
		<div id="print-header-address">
		<address><span id="phone">800-434-4593</span><br> 2101 Dove Street, Newport Beach CA</address>
		</div>
		</div>
		<div id="print-info">
		<div id="print-main-image">
		<img src="<%=mainImageUrl%>" />
		</div>
		<div id="print-info-info">
		<div id="vehicle-title-wrap">
		<h1>2011 Land Rover Range Rover Sport HSE LUX</h1><h1><small>Everyday Low Price</small> $52,002</h1>
		</div>
		<div id="vehicle-info-info">
		<ul>
		<li><nobr class="print-info-name">Miles:</nobr> <%=arrayUrl.Mileage%></li>
		<li><nobr class="print-info-name">Stocks:</nobr> <%=arrayUrl.StockNumber%></li>
		<li><nobr class="print-info-name">VIN:</nobr> <%=arrayUrl.VINNumber%></li>
		<li><nobr class="print-info-name">Exterior Color:</nobr> <%=arrayUrl.ExteriorColor%></li>
		<li><nobr class="print-info-name">Transmission:</nobr> <%=arrayUrl.Tranmission%></li>
		<li><nobr class="print-info-name">Body Style:</nobr> <%=arrayUrl.BodyType%>
		<li><nobr class="print-info-name">Engine:</nobr> <%=arrayUrl.Cylinders%>Cylinders, <%=arrayUrl.Liters%>Liters</li>
		<li><nobr class="print-info-name">Location:</nobr> <%=arrayUrl.DealershipName%>
		</ul>
		</div>
		</div>
		</div>
		<div id="print-options">

		</div>
		<div id="print-footer">
		<div id="print-footer-left">
		<div id="detail-left-bottom">
		<div style="position: relative;">
		<h4 style="margin-top: 0px; margin-top: 0px">Owners</h4>CARFAX 1-Owner <img style="position: absolute; right: 0px; top: 0px;" src="http://www.carfaxonline.com/phoenix/img/one_owner_logo_bw.jpg">
		<h4>Service Records</h4> 1 Service Records Available
		<br>
		<h4>Accident Report</h4>
		<ul style="list-style-type: none; margin-left: 5px;">
		<li><img alt="No Total Loss Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Total Loss Reported to CARFAX
		</li>
		<li><img alt="No Structural/Frame Damage Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Structural/Frame Damage Reported to CARFAX
		</li>
		<li><img alt="No Airbag Deployment Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Airbag Deployment Reported to CARFAX
		</li>
		<li><img alt="No Indication of an Odometer Rollback" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Indication of an Odometer Rollback
		</li>
		<li><img alt="No Accidents / Damage Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Accidents / Damage Reported to CARFAX
		</li>
		<li><img alt="No Manufacturer Recalls Reported to CARFAX" src="http://www.carfaxonline.com/phoenix/img/checkmark.jpg"> No Manufacturer Recalls Reported to CARFAX
		</li>
		</ul>

		<a class="btn finance-btn" style="color: white !important; background-color: #08506D !important;text-decoration: none;padding: 4px;" target="_blank" id="carfaxBTN" href="http://www.carfax.com/VehicleHistory/p/Report.cfx?vin=1FMNU45S23EA06753">Click Here For Full Report</a>
		<br>
		<br>
		<div style=" width: 100%; font-size: .8em; opacity: .7; text-align:center !important;">
		Not all accidents or other issues are reported to CARFAX. The number of owners is estimated. See the full CARFAX Report for additional information and glossary of terms. 31.Oct.2012 22:02:36
		</div>
		</div>
		</div>
		<div>
		<img src="http://maps.googleapis.com/maps/api/streetview?size=412x200&amp;location=2101-Dove-Street,-Newport-Beach-CA&amp;heading=235&amp;sensor=false">
		</div>
		</div>
		<div id="print-footer-right">
		<img id="map" class="span9" src="http://maps.googleapis.com/maps/api/staticmap?center=2101-Dove-Street,-Newport-Beach-CA&amp;zoom=15&amp;size=532x575&amp;markers=size:mid|label:Dealer|2101 Dove Street, Newport Beach CA&amp;sensor=false">
		</div>
		</div>
		</div>
		</body>
		
	</script>
</html>