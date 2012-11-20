<?php
	require_once dirname(__FILE__).'/prepare.php';

	$vindb = common_util::vindb_connect();
	$requests = $_POST;

	$price_info = common_util::load_price($vindb,$requests["make"], $requests["model"],$requests["trim"],$requests["year"],$requests["price"]);
	for ($j=0; $j<count($price_info); $j++){
		if($price_info[$j]["SalePrice"] == "0"){
			$price_info[$j]["SalePrice_view"] = "Call for Price!!!";
			$price_info[$j]["SalePrice"] = 9;
		}else {
			$price_info[$j]["SalePrice_view"] = number_format($price_info[$j]["SalePrice"]);
		}
	}

	$val = array("price_info" => $price_info );	
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
