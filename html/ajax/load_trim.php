<?php
	require_once dirname(__FILE__).'/prepare.php';

	$vindb = common_util::vindb_connect();
	$requests = $_POST;

	$trim_info = common_util::load_trim($vindb,$requests["make"],$requests["model"],$requests["trim"],$requests["year"],$requests["price"]);
	for ($j=0; $j<count($trim_info); $j++){
		if($trim_info[$j]["Trim"] == ""){
			$trim_info[$j]["Trim_view"] = "Not Described!";
			$trim_info[$j]["Trim"] = 99;
		}else{
			$trim_info[$j]["Trim_view"] = $trim_info[$j]["Trim"];
		}
	}

//	var_dump($trim_info);
	
	$val = array("trim_info" => $trim_info );	
	$json = common_util::create_json($val);
	header('Content-type: text/javascript; charset=utf-8');
	echo $json;	
?>
