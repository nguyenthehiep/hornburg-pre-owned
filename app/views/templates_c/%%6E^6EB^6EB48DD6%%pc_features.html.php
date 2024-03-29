<?php /* Smarty version 2.6.26, created on 2012-11-14 06:42:39
         compiled from inventory/pc_features.html */ ?>
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
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
		<link rel="stylesheet" href="/css/features.css" type="text/css" media="all" />
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
			</script>
			'; ?>

			<script type="text/javascript" src="/js/pages/pc_common.js"></script>
			<script type="text/javascript" src="/js/pages/pc_features.js"></script>

			<div id="features-content">
				<div id="features-content-top">
					<div id="fct-left">
						<p>
							Featured Vehicles
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
				<div id="features-content-text">
					<p>
						Hornburg-pre-owned provides a selection of Featured Vehicles, representing new and popular cars,
						trucks and SUVs at competitive prices. Please take a moment to investigate these current highlighted models,
						hand-picked from our ever-changing new and Pre-Owned vehicle inventories!
					</p>
				</div>
				<div id="fc-content">
					<div id="loading-features"></div>
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
<?php echo '	
	<script>
		var features = new featuresClass();
	</script>'; ?>

</html>