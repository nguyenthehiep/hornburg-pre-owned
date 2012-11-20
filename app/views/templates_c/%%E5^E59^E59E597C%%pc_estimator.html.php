<?php /* Smarty version 2.6.26, created on 2012-11-14 07:11:11
         compiled from finance/pc_estimator.html */ ?>
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
		<link rel="stylesheet" href="/css/finance.css" type="text/css" media="all" />
	</head>
	<body>
		<div class="container" id="wrapper">
			<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
			<script type="text/javascript">
				var flat = "finance";
			</script>
			<script type="text/javascript" src="/js/pages/pc_common.js"></script>
			<script type="text/javascript" src="/js/pages/estimator.js"></script>
			
			<!-- CONTENT ROW -->
			<div id="features-content-top">
				<div id="fct-left">
					<p>
						Finance Calculator
					</p>
				</div>
				<div id="fct-right">
					<div id="fbtn-print">
						<button id="features-print">
							Print
						</button>
					</div>
				</div>
			</div>
			<div class="row specials" id="estimate-content">
				<div id="est-text">

					<p>
						Please use our payment calculators to determine what you can afford and what your monthly payment will be.  After you've calculated an acceptable amount you can search our inventory for vehicles matching this price, all with the single click of a button!
					</p>

				</div>
				<div id="est-form">
					<div id="est-will-pay">
					<div id="est-form-title">
						<span>How Much Will I Pay ?</span>
					</div>
					<div class="est-form-label">
						<span>Enter the price of a vehicle you are looking at :</span><br/>
						<input class="est-form-input" id="est-price" type="text" />
					</div>
					<div class="est-form-label">
						<span>Down payment / trade-in value :</span><br/>
						<input class="est-form-input" id="est-downpayment" type="text" />
					</div>
					<div class="est-form-label">
						<span>A.P.R. (estimated financing rate) :</span><br/>
						<input class="est-form-input" id="est-apr" type="text" value="6.9" /><nobr style="color: blue;margin-left: 5px; font-size: 18px;">%</nobr>
					</div>
					<div class="est-form-label">
						<span> Term (months) :</span><br/>
						<select id="select-mons">
							<option value="12">12 mo.</option>
							<option value="24">24 mo.</option>
							<option value="36">36 mo.</option>
							<option value="48">48 mo.</option>
							<option value="60" selected="selected">60 mo.</option>
							<option value="72">72 mo.</option>
							<option value="84">84 mo.</option>
						</select>
					</div>
					<div class="est-form-label">
						<span>Estimated Monthly Payment :</span><br/>
						<input class="est-form-input" id="est-result" readonly="readonly" type="text" />
					</div>
				</div>
				
				<div id="est-monthly-pay">
					<div id="est-monthly-form-title">
						<span>How Much Can I Afford ?</span>
					</div>
					<div class="est-form-label">
						<span>Monthly Payment :</span><br/>
						<input class="est-monthly-form-input" id="est-monthly-price" type="text" />
					</div>
					<div class="est-form-label">
						<span>Down payment / trade-in value :</span><br/>
						<input class="est-monthly-form-input" id="est-monthly-downpayment" type="text" />
					</div>
					<div class="est-form-label">
						<span>A.P.R. (estimated financing rate) :</span><br/>
						<input class="est-monthly-form-input" id="est-monthly-apr" type="text" value="6.9" /><nobr style="color: blue;margin-left: 5px; font-size: 18px;">%</nobr>
					</div>
					<div class="est-form-label">
						<span> Term (months) :</span><br/>
						<select id="select-monthly-mons">
							<option value="12">12 mo.</option>
							<option value="24">24 mo.</option>
							<option value="36">36 mo.</option>
							<option value="48">48 mo.</option>
							<option value="60" selected="selected">60 mo.</option>
							<option value="72">72 mo.</option>
							<option value="84">84 mo.</option>
						</select>
					</div>
					<div class="est-form-label">
						<span>Estimated Monthly Payment :</span><br/>
						<input class="est-monthly-form-input" id="est-monthly-result" readonly="readonly" type="text" />
					</div>
				</div>
				
				</div>
			</div></div>
			<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
	</body>
</html>