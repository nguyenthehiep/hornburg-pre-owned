<?php /* Smarty version 2.6.26, created on 2012-11-12 02:44:06
         compiled from inventory/pc_u15000.html */ ?>
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
</head>
<body>
<div class="container" id="wrapper"> <!-- WRAPPER DIV -->
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_header.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>	
<script type="text/javascript">
		<?php echo '
				var flat = "inventory";
				var inv_flg = "u15000";
				var underPrice = "'; ?>
<?php echo $this->_tpl_vars['search_info']; ?>
<?php echo '";
		'; ?>

</script>
<script type="text/javascript" src="/js/pages/pc_common.js"></script>
<script type="text/javascript" src="/js/pages/pc_inventory.js"></script>
	<div class="row" id="content"><!-- MAIN COLUMN CELL -->    
		<div class="span12">
			<div class="row" id="inventory"> <!-- INVENTORY LISTING ROW -->
				<div class="span12"  id="content-holder">					
				</div>
			</div>
		</div> <!-- END OF INVENTORY LISTING ROW -->
		
		<div class="row"> <!-- FOOTER ROW -->
			<div class="span12"> </div>
		</div> <!-- END OF FOOTER ROW -->	
	
	
		<div class="span4" id="sidebar"> <!-- SIDEBAR CELL -->
			<div class="row"> <!-- SOCIAL MEDIA ROW -->
	        	<div class="span4" id="filter">
	            	<div id="filter-inner-wrap" >
	                    <h1>Filter Options</h1>
	                    <select id="makeDrp" name="make"></select>
						<select id="modelDrp" name="model"></select>
						<select id="trimDrp" name="trim"></select>
						<select id="yearDrp" name="year"></select>
						<select id="priceDrp" name="price"></select>
						
						<div style="width: 100%; text-align: right;">
						<a href="" class="display-all-cars" style="display: block;">View All Cars</a><br />
						</div>
						
						<div class="order-wrap">

						<h1>Order Results</h1>
						<input class="orderbtns" type="radio" name="order" value="make" id="order-make" /><label class="label-order" for="order-make">Make</label>
						<input class="orderbtns" type="radio" name="order" value="model" id="order-model" /><label class="label-order" for="order-model">Model</label>
						<input class="orderbtns" type="radio" name="order" value="year" id="order-year" /><label class="label-order" for="order-year">Year</label>
						<input class="orderbtns" type="radio" name="order" value="saleprice" id="order-saleprice" /><label class="label-order" for="order-saleprice">Price</label>

						</div>                    
	                </div>
	           	</div>
	           	
	           	<div class="span4" id="estimator">
	            	<div id="estimator-inner-wrap" >
	                    <h1>Price Estimator</h1>
	                	<div>
	                		<span>Price</span>                		 
						     <input class="est-inv-input" id="est-price" name="est-price"  type="text" placeholder="Price"/>
	                	</div>
	                	<div>
	                		<span>Down Payment</span>	
	                		<input class="est-inv-input"  id="est-downpayment" name="est-downpayment"  type="text" placeholder="Down Payment"/>
	                	</div> 
	                	<div>
	                		<span>Finance Rate</span>
	                		<input class="est-inv-input"  id="est-apr" name="e_rate"  type="text" value="6.9"/>%
	                	</div>
	                	<div>
	                		<span>Contract Length</span>
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
	                	
	                	<div>
	                		<span>Result is below</span>
	                		<input class="est-inv-input" id="est-result" name="est-result"  type="text" readonly="readonly"/>
	                	</div>
					</div>
	           	</div>
	        </div> <!-- END OF SOCIAL MEDIA ROW -->			
		</div> <!-- END OF SIDEBAR CELL -->
	
	</div><!-- END OF MAIN CELL -->
</div> <!-- END OF WRAPPER DIV -->

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</body>

</html>