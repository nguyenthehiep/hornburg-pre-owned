<?php /* Smarty version 2.6.26, created on 2012-11-14 06:35:11
         compiled from ./include/pc_header.html */ ?>
<div class="row" id="header-row">
	<div class="span8">
		<div class="hero-unit" id="banner">
			<a href="home">
			<div id="h1Wrap">
				<h1><?php echo $this->_tpl_vars['header_info']['title']; ?>
</h1>
			</div></a>
		</div>
	</div>
	<div class="span8" id="address">
		<address>
			<span id="phone-header" style="color: white !important"><?php echo $this->_tpl_vars['header_info']['phone']; ?>
</span>
			<br />
			<?php echo $this->_tpl_vars['header_info']['address']; ?>

		</address>
	</div>
</div>

<div class="row">

	<div class="span16" id="navBG">
		<nav id="navbar" style="position: relative; z-index: 100;">
			<div class="navbar">
				<ul class="nav">
					<li class="home-vin">
						<a class="a-active"  href="/home">HOME</a>
					</li>
					<li class="inventory-vin">
						<a class="a-active" href="/inventory">INVENTORY</a>
						<div id="inventory-menus" style="">
							<ul style="margin-left: 0px;">
								<li class="inventory-menus-li">
									<a href="/inventory">Our Inventory</a>
								</li>
								<li class="inventory-menus-li">
									<a href="/inventory/specials">View Our Special</a>
								</li>
								<li class="inventory-menus-li">
									<a href="/inventory/features">Features Vehicle</a>
								</li>
							</ul>

						</div>
					</li>
					<li class="financing-vin">
						<a class="a-active" target="" href="/finance">GET APPROVED</a>
						<div id="financing-menus" style="">
							<ul style="margin-left: 0px;">
								<li class="finance-menus-li">
									<a href="/finance/apply">Apply Finance</a>
								</li>
								<li class="finance-menus-li">
									<a href="/finance/estimator">Payment Estimator</a>
								</li>
							</ul>

						</div>
					</li>
					<li class="sell-vin">
						<a class="a-active" href="/sell">SELL YOUR VEHICLE</a>
					</li>
					<li class="locator-vin">
						<a class="a-active" href="/locator">VEHICLE LOCATOR</a>
					</li>
					<li class="direction-vin">
						<a class="a-active" href="/directions">HOURS AND DIRECTIONS</a>
					</li>
					<li class="contact-vin">
						<a class="a-active" href="/contact">CONTACT US</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</div>