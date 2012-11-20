<?php
	require_once dirname(__FILE__).'/prepare.php';

	$vindb = common_util::vindb_connect();
	$requests = $_POST;

	$dealer_id = "";
	if(!empty($requests)){
		$slider_array = common_util::load_slider_info($vindb, $dealer_id);	
	}		

	$val = array("slider_info" => $slider_array );	
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
