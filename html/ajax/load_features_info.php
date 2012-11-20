<?php
	require_once dirname(__FILE__).'/prepare.php';

	$vindb = common_util::vindb_connect();
	$requests = $_POST;	
	
	if(!empty($requests)){
		$features_array = common_util::load_features_info($vindb);	
	}
	
	$val = array("features_array" => $features_array );
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
