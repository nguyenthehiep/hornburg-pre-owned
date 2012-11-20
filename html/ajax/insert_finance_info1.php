<?php
	require_once dirname(__FILE__).'/prepare.php';

	$status = 1;
	$db = common_util::db_connect();
	$requests = $_POST;
	
	$customer_id = common_util::select_max_customerid($db);

	var_dump($requests);
	var_dump(json_decode($requests["First_Name"]));
	
	
	//var_dump($requests["vehicle_info"]);
	//var_dump($requests["financing_info"]);
	//common_util::insert_finance_info($db,$requests, $contact_id, $type = 3);	

	$val = array("status" => $status );	
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
