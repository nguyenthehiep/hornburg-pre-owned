<?php
	require_once dirname(__FILE__).'/prepare.php';

	$status = 1;
	$db = common_util::db_connect();
	$requests = $_POST;
	
	$contact_id = common_util::select_max_id($db);
	$link = $config->baseurl."inventory/detail/".$requests["carid"];
//var_dump($link);
	common_util::insert_customer_friend($db, $requests, $contact_id, $link);	

	$val = array("status" => $status );	
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
