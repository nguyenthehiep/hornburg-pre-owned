<?php /* Smarty version 2.6.26, created on 2012-11-13 20:49:32
         compiled from contact/pc_contact.html */ ?>
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
	<link rel="stylesheet" href="/css/contact.css" type="text/css" media="all" />
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
var flat = "contact";
</script>
<script type="text/javascript" src="/js/pages/pc_common.js"></script>

		<div class="row specials" id="content">

			<div class="span12" id="tertiary-cell">
				<!-- MAIN COLUMN CELL -->

				<!-- BEGIN EDIT CONTENT -->
				<div id="tertiary-content">
					<!-- AD CELLS -->
					<h1>Contact Us!</h1>					
						<legend>Contact Info</legend>
						<div class="input-prepend control-group">
							<span class="add-on" title="Name"><i class="icon-user icon-white"></i></span>
							<input name="name" class="required" id="name" type="text" onfocus="if (this.value == 'Name') this.value = '';" onblur="if (this.value == '') this.value = 'Name';" value="Name"/>
							<span class="red"> * </span>
						</div>
						<div class="input-prepend control-group">
							<span class="add-on" title="Email"><i class="icon-envelope icon-white"></i></span>
							<input name="email" class="required" id="email" type="text" onfocus="if (this.value == 'Email') this.value = '';" onblur="if (this.value == '') this.value = 'Email';" value="Email"/>
							<span class="red"> * </span>
						</div>
						<div class="input-prepend control-group">
							<span class="add-on" title="Phone"><b style="color: white !important;">#</b></span>
							<input name="phone" class="number required" id="phone" type="text" onfocus="if (this.value == 'Phone Number') this.value = '';" onblur="if (this.value == '') this.value = 'Phone Number';" value="Phone Number"/>
							<span class="red"> * </span>
						</div>
						<div class="input-prepend control-group">
							<span class="add-on" title="Comments"><i class="icon-comment icon-white"></i></span>
							<textarea name="comments" id="comments" onfocus="if (this.value == 'Add Comments') this.value = '';" onblur="if (this.value == '') this.value = 'Add Comments';">Add Comments</textarea>
						</div>
						<input type="button" name="send" id="submit-contact" value="Contact Us" style="background-color: #333;color: white;">				
				</div>
			</div>
		<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_dealer_info.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
		</div>
		<!-- END OF CONTENT ROW -->
	</div>		
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "./include/pc_footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</body>
</html>