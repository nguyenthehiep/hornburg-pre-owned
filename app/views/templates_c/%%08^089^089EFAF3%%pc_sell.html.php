<?php /* Smarty version 2.6.26, created on 2012-11-14 06:42:27
         compiled from sell/pc_sell.html */ ?>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="description" content="Welcome to Hornburg Pre-Owned, a premier car dealership in Newport Beach Orange County that focuses on providing the highest quality of customer service. If you are looking for a vast selection of used domestic or import models at affordable prices, then you are in the right place. Our beautiful Newport Beach dealership is filled with friendly and knowledgeable employees who are eager to assist you.">
<!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_load_javascript.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>		
<link rel="stylesheet" href="/css/sell.css" type="text/css" media="all" />
<script type="text/javascript" src="/js/pages/pc_contact.js"></script>
</head>

<body>
		<div class="container" id="wrapper">
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<script type="text/javascript">
	var flat = "sell";
</script>
<script type="text/javascript" src="/js/pages/pc_common.js"></script>

		<div class="row specials" id="content">
			<div class="span12" id="tertiary-cell">
				<div id="tertiary-content">
					<h1>WE PAY CASH FOR CARS!</h1>
					<p>
						Selling your vehicle has never been easier - or more lucrative - than right now. We're desperate for used cars right now due to unprecedented customer demand, and we're prepared to pay you TOP DOLLAR for your car, truck, SUV or crossover vehicle in just three easy steps.
					</p>
					<ol>
						<li>
							Bring your Vehicle (with less than 100,000 miles and clean carfax) in to our dealership!
						</li>
						<li>
							We’ll appraise your vehicle and make you an offer with no obligations.
						</li>
						<li>
							Offer good for 7 Days Guaranteed!
						</li>
					</ol>
					<p>
						It's that simple! We will buy your vehicle for fair market value without hassle.
					</p>
					<p>
						We need quality used cars, so if you're in the market to sell, WE'RE BUYING! Save yourself the time, money and aggravation of multiple classified ad and internet postings, repeated test drives, countless missed appointments and endless price haggling. Visit or call us today to schedule your appointment.
					</p>
					<!-- vehicle appraisal -->
					<div id="vehicle-appraisal">						
						<div class="span6 no-left sell-span6">
							<!-- Contact Form Include -->
						  <legend>Contact Info</legend>
						  <div class="input-prepend control-group">
						    <span class="add-on" title="Name"><i class="icon-user icon-white"></i></span>
						      <input name="name" class="required" id="name" type="text" onfocus="if (this.value == 'Name') this.value = '';" onblur="if (this.value == '') this.value = 'Name';" value="Name"/><span class="red"> * </span>
						  </div>
						  <div class="input-prepend control-group">
						    <span class="add-on" title="Email"><i class="icon-envelope icon-white"></i></span>
						      <input name="email" class="required" id="email" type="text" onfocus="if (this.value == 'Email') this.value = '';" onblur="if (this.value == '') this.value = 'Email';" value="Email"/><span class="red"> * </span>
						  </div>
						  <div class="input-prepend control-group">
						    <span class="add-on" title="Phone"><b style="color: white !important;">#</b></span>
						      <input name="phone" class="number required" id="phone" type="text" onfocus="if (this.value == 'Phone Number') this.value = '';" onblur="if (this.value == '') this.value = 'Phone Number';" value="Phone Number"/><span class="red"> * </span>
						  </div>
							<div class="input-prepend control-group">
								<span class="add-on" title="City"><i class="icon-star icon-white"></i></span>
								<input name="city" class="" id="city" type="text" onfocus="if (this.value == 'City') this.value = '';" onblur="if (this.value == '') this.value = 'City';" value="City"/>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on" title="State"><i class="icon-star icon-white"></i></span>
								<input name="state" class="" id="state" type="text" onfocus="if (this.value == 'State') this.value = '';" onblur="if (this.value == '') this.value = 'State';" value="State"/>
							</div>
							<legend>Comments</legend>
							<div class="input-prepend control-group">
								<span class="add-on" title="Comments"><i class="icon-comment icon-white"></i></span>
								<textarea name="comments" id="comments" onfocus="if (this.value == 'Additional Comments') this.value = '';" onblur="if (this.value == '') this.value = 'Additional Comments';">Additional Comments</textarea>
							</div>
							<span class="red"> * Required </span>
						</div>
						<div class="span6 sell-span6">
							<legend>Vehicle Info</legend>
							<div class="input-prepend control-group">
								<span class="add-on" title="Year"><i class="icon-star icon-white"></i></span>
								<input name="year" class="required number" id="year" type="text" onfocus="if (this.value == 'Year') this.value = '';" onblur="if (this.value == '') this.value = 'Year';" value="Year"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on" title="Make"><i class="icon-star icon-white"></i></span>
								<input name="make" class="required" id="make" type="text" onfocus="if (this.value == 'Make') this.value = '';" onblur="if (this.value == '') this.value = 'Make';" value="Make"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on" title="Model"><i class="icon-star icon-white"></i></span>
								<input name="model" class="required" id="model" type="text" onfocus="if (this.value == 'Model') this.value = '';" onblur="if (this.value == '') this.value = 'Model';" value="Model"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on" title="Mileage"><i class="icon-star icon-white"></i></span>
								<input name="mileage" class="number" id="mileage" type="text" onfocus="if (this.value == 'Mileage') this.value = '';" onblur="if (this.value == '') this.value = 'Mileage';" value="Mileage"/>
								<span class="red"> * </span>
							</div>
							<div class="input-prepend control-group">
								<span class="add-on" title="Color"><i class="icon-star icon-white"></i></span>
								<input name="color" class="" id="color" type="text" onfocus="if (this.value == 'Color') this.value = '';" onblur="if (this.value == '') this.value = 'Color';" value="Color"/>
							</div>
							<legend>Options</legend>
							<div class="input-prepend control-group">
								<span class="add-on"><i class="icon-list icon-white" title="Options"></i></span>
								<textarea name="options" id="finder-options" onfocus="if (this.value == 'Options') this.value = '';" onblur="if (this.value == '') this.value = 'Options';">Options</textarea>
							</div>
							<input type="button" id="submit-sell" value="Apply Sell" />
						</div>							
					</div>
					<!-- end vehicle appraisal -->
				</div>
			</div>				
		</div>			
	</div>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	</body>
</html>