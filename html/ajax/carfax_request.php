<?php
	require_once dirname(__FILE__).'/prepare.php';
	
	$requests = $_POST;

//	$vin = $requests["VINNumber"];
$vin = '2C3HE66G72H150041';
$productDataID = 'E1428055F9C029C2';
//$productDataID = '793BF814927D7578';
$url = 'https://secured.CARFAX.com/partner/service.cfx';
$dealerID = 'C490214';
$dealerPass = '92819';
// $testID = 'C490214';
// $testPass = '25754';
$purchase = 'Y';
$reportType = 'VHR';
$onlineListing = 'Y';
$xml = "
<carfax-request>
        <vin>$vin</vin>
        <product-data-id>$productDataID</product-data-id>
        <username>$dealerID</username><password>$dealerPass</password>
        <purchase>$purchase</purchase>
        <report-type>$reportType</report-type>
        <online-listing>$onlineListing</online-listing>
</carfax-request>";
var_dump($xml);

//CARFAX
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
$return=curl_exec($ch);

//echo $content;
//$carfax = simplexml_load_string($carfax);
//print_r($carfax);
//echo $return;

//$carfax = simplexml_load_string($return, 'SimpleXMLElement', LIBXML_NOCDATA);
var_dump($return);
var_dump($return);
var_dump($return);
var_dump($return);
var_dump($return);


//echo "Index array\n";


//	$val = array("carfax_info" => $model_info );	
//	$json = common_util::create_json($val);
//	header('Content-type: text/javascript; charset=utf-8');
//	echo $json;	
?>
