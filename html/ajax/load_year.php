<?php
	require_once dirname(__FILE__).'/prepare.php';

	$vindb = common_util::vindb_connect();
	$requests = $_POST;

	$year_info = common_util::load_year($vindb,$requests["make"],$requests["model"],$requests["trim"], $requests["year"], $requests["price"]);	

	$val = array("year_info" => $year_info );	
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
