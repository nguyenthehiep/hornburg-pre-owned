<?php
	require_once dirname(__FILE__).'/prepare.php';

	$vindb = common_util::vindb_connect();
	$requests = $_POST;	
	
	if(!empty($requests) && $requests["inv_flg"] == "main"){
		$search_array = common_util::inventory_pull_data($vindb);	
	}else if (!empty($requests) && $requests["inv_flg"] == "search"){
		$search_array = common_util::inventory_pull_data($vindb, $requests["make"],$requests["model"],$requests["trim"],$requests["year"], $requests["price"]);
	}else if (!empty($requests) && $requests["inv_flg"] == "u10000"){
		$search_array = common_util::inventory_pull_data($vindb, $requests["make"],$requests["model"],$requests["trim"],$requests["year"], $requests["price"],$requests["underPrice"]);
	}else if (!empty($requests) && $requests["inv_flg"] == "u15000"){
		$search_array = common_util::inventory_pull_data($vindb, $requests["make"],$requests["model"],$requests["trim"],$requests["year"], $requests["price"],$requests["underPrice"]);
	}else if (!empty($requests) && $requests["inv_flg"] == "u20000"){
		$search_array = common_util::inventory_pull_data($vindb, $requests["make"],$requests["model"],$requests["trim"],$requests["year"], $requests["price"],$requests["underPrice"]);
	}else if (!empty($requests) && $requests["inv_flg"] == "u25000"){
		$search_array = common_util::inventory_pull_data($vindb, $requests["make"],$requests["model"],$requests["trim"],$requests["year"], $requests["price"],$requests["underPrice"]);
	}
	
	$val = array("search_info" => $search_array );
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
