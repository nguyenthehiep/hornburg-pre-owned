<?php /* Smarty version 2.6.26, created on 2012-11-14 06:35:11
         compiled from ./include/pc_dealer_info.html */ ?>
<div class="span4" id="sidebar">	
	<div id="map">
		<iframe style="width: 100%; height: 250px;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/?q=2101-Dove-Street,Newport-Beach-CA&amp;ie=UTF8&amp;hq=&amp;hnear=2101-Dove-Street,Newport-Beach-CA&amp;t=m&amp;z=14$amp;&amp;iwloc=nearll=33.879879,-117.598272&amp;output=embed"></iframe>
		<br />
		<small> <a href="http://maps.google.com/?q=2101-Dove-Street,Newport-Beach-CA&amp;ie=UTF8&amp;hq=&amp;hnear=2101-Dove-Street,Newport-Beach-CA&amp;t=m&amp;z=14&amp;source=embed" style="color:#0000FF;text-align:left">View Larger Map</a> </small>
	</div>

	<div id="dealerInfo">
		<h4>Business Hours</h4>
		<ul class="unstyled">
			<li>
				<div style="width: 65px; display: inline-block;">Weekdays:</div><?php echo $this->_tpl_vars['header_info']['weekdays']; ?>

			</li>
			<li>
				<div style="width: 65px; display: inline-block;">Saturday:</div><?php echo $this->_tpl_vars['header_info']['saturday']; ?>

			</li>
			<li>
				<div style="width: 65px; display: inline-block;">Sunday:</div><?php echo $this->_tpl_vars['header_info']['sunday']; ?>

			</li>
		</ul>
	</div>
</div>