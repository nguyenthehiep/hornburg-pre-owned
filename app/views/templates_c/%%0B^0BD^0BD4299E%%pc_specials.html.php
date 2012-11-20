<?php /* Smarty version 2.6.26, created on 2012-11-11 22:48:13
         compiled from inventory/pc_specials.html */ ?>
<html>
	<head>
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

		<script src="/libraries/underscore-min.js" type="text/javascript"></script>
		<script src="/libraries/js.class.min.js" type="text/javascript"></script>
		<link rel="stylesheet" href="/css/specials.css" type="text/css" media="all" />
	</head>
	<body>
		<div class="container" id="wrapper">
			<!-- WRAPPER DIV -->
			<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

			<?php echo '
			<script type="text/javascript">
				var flat = "inventory";
				$("#btn-specials-print").live("click",function(){
					$("#header-row").hide();
					$("#specials-top-text").hide();
					$(".row").hide();
					$("#specials-content-text").hide();
					$(this).hide();
					window.print();
					
					$("#header-row").show();
					$("#specials-top-text").show();
					$(".row").show();
					$("#specials-content-text").show();
					$(this).show();
				});
			</script>
			'; ?>

			<script type="text/javascript" src="/js/pages/pc_common.js"></script>

			<div id="specials-content">
				<div id="specials-content-top">
					<div id="specials-top-text">
						<div id="fct-left">
							<p>
								Service Specials
							</p>
						</div>
					</div>
					<div id="specials-top-img">
						<img style="width: 100%;" src="/images/specials-default.jpg" />
					</div>
					<div id="specials-print">
						<button id="btn-specials-print">
							Print Coupon
						</button>
					</div>
				</div>
				<div id="specials-content-text">
					<h2>Priority Service Maintenance Program</h2>
					<p>
						Isuzu’s Priority Service Maintenance Program provides manufacturer approved scheduled maintenance.
					</p>
					<h4>Eligible Vehicles</h4>
					<p>
						All 2008 N/F-Series and newer Diesel and Gas model vehicles distributed by Isuzu Commercial
						Truck of America, Inc., subject to utilization and mileage guidelines after submission and approval by Isuzu.
					</p>
					<h4>Available Coverage</h4>
					<p>
						Customer should select Priority Service Maintenance Program coverage based on time and
						mileage based on historical and estimated utilization. Subject to credit approval, customer may be able to finance the
						cost of the Program in conjunction with a lease or finance contract with Isuzu Finance of America, Inc. Standard
						Extended Powertrain Warranty coverage is included in Priority Service Maintenance Programs with program terms
						that exceed the vehicle’s base warranty.
					</p>
					<h4>Limitation of Coverage</h4>
					<p>
						The quantity of maintenance services is fixed based on the particular program coverage
						selected by the customer. Once all maintenance program services have been provided, the customer will receive no
						additional services under the program unless additional services are purchased.
					</p>
					<h4>Customer Obligations</h4>
					<p>
						Customer is responsible for proper vehicle operation and the timely scheduling of
						maintenance services with participating dealers. Customer is responsible for conducting pre-trip inspections on a
						regular basis as recommended. Maintenance services may only be obtained from participating dealers, but Warranty
						and Extended Warranty services may be conducted by any authorized dealer. In the event of a suspected component
						defect or failure, Customer must present the vehicle to an authorized dealer as soon as possible. Failure and/or
						damage caused by abuse, neglect or accidents are customer’s responsibility.
					</p>
					<p class="small">
						The number of scheduled maintenance services provided under the Program is fixed based on the particular Program coverage that you select. Once all maintenance and optional services
						have been provided, you will not be eligible for additional maintenance services under the Program unless additional services are purchased. Program services must be performed by an
						authorized Priority Service Maintenance Program dealer. The Program does not cover all parts and services. See an Enrollment Form for details.
					</p>
				</div>
			</div>

		</div>
		<!-- END OF WRAPPER DIV -->

		<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

		
	</body>

</html>