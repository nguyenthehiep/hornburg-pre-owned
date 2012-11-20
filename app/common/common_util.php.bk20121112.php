<?php
require_once('Zend/Db/Table/Abstract.php');
require_once('Zend/Config/Ini.php');

class common_util {
	private static $_db;
	private static $_vindb;

	//DB CONNECTION
	public static function db_connect() {
		if(self::$_db == null){
			$config = new Zend_Config_Ini( dirname(__FILE__) . "/../config.ini", "database" );
			$params = array('host'	 => $config->params->host,
							'username' => $config->params->username,
							'password' => $config->params->password,
							'dbname'   => $config->params->dbname,
							'charset'  => 'utf8',
							'profiler' => true
			);
			self::$_db = Zend_Db::factory( $config->adapter, $params );
			Zend_Db_Table_Abstract::setDefaultAdapter( self::$_db );
		}
		return self::$_db;
	}
	
	public static function vindb_connect() {
		if(self::$_vindb == null){
			$vin_config = new Zend_Config_Ini( dirname(__FILE__) . "/../config.ini", "vin-db" );
			$vin_params = array('host'		=> $vin_config->vin_params->host,
								'username'	=> $vin_config->vin_params->username,
								'password'	=> $vin_config->vin_params->password,
								'dbname'	=> $vin_config->vin_params->dbname,
								'charset'	=> 'utf8',
								'profiler'	=> true
			);
			self::$_vindb = Zend_Db::factory( $vin_config->adapter, $vin_params );
			Zend_Db_Table_Abstract::setDefaultAdapter( self::$_vindb );
		}
		return self::$_vindb;
	}

	public static function check_device() {

		$agent = $_SERVER['HTTP_USER_AGENT'];
		if(preg_match("/iPhone/",$agent)){
			$result = "pc";
		}else if(preg_match("/Android/", $agent)){
			$result = "pc";
		} else if(preg_match("/DoCoMo/",$agent)){
			$result = "mobile";
		}else if(preg_match("/^UP.Browser|^KDDI/", $agent)){
			$result = "mobile";
		}else if(preg_match("/^J-PHONE|^Vodafone|^SoftBank/", $agent)){
			$result = "mobile";
		} else {
			$result = "pc";
		}
		return $result;
	}
	
	public static function create_password($length = 8){
		for ($password = '', $i = 0; $i < $length; $i++)
		{
			$str = base_convert((string) rand(0, 35), 10, 36);
			$password .= (rand(0, 1) ? strtoupper($str) : $str);
		}
		return $password;
	}

	public static function create_json($json_array) {
		if (is_array($json_array) && count($json_array) > 0) {
			return Zend_Json::encode($json_array);
		} else {
			return '[]';
		}
	}
	
	public static function get_notif_email($to_email){
		$config = new Zend_Config_Ini( dirname(__FILE__) . "/../config.ini", "information" );
		return $config->$to_email;
	}

	public static function send_mail($templete_name, $assign_array, $to_name, $to_mailaddress, $mode="normal") {
		require_once(dirname(__FILE__) ."/qdmail.php");
		$config = new Zend_Config_Ini( dirname(__FILE__) . "/../config.ini" );
		require( $config->path->mail . $templete_name . ".php" );
		$to = array( $to_mailaddress , $to_name.' ' );
		$other_heder['from'][] = array($from_mailaddress, $from_name);
		$option = array(
			'type' => 'text',
			'option'=>array('mtaOption'=>'-f '.$config->information->used_address),
		);
		$return_flag = @qd_send_mail( $option , $to , $subject , $body , $other_heder);
		if(!$return_flag){
		}
	}
	
	public static function force_https() {
        if(!isset($_SERVER['HTTPS'])) {
            header("Location: https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']."");
            exit;
        }
    }
		
	// LOAD SLIDER INFORMATION //
	public static function load_slider_info ($vindb, $detail_id){
		$sql = $vindb-> select();
		if(empty($detail_id)){
			$sql->from ( "hornburginventory", array (
				"ListingID",			
				"ModelYear",
				"Make",
				"Model",
				"Trim",
				"SalePrice",
				"CarImageUrl"			
			));
		}else{
		$sql->from ( "hornburginventory", array (
				"ListingID", "ModelYear", "Make", "Model", "Trim",
				"VINNumber", "StockNumber",
				"ExteriorColor", "InteriorColor",
				"BodyType",
				"Cylinders",
				"Liters",	
				"DealershipName",
				"Tranmission",			
				"SalePrice",
				"Mileage",			
				"Descriptions",
				"CarsOptions",
				"CarImageUrl"
			));
		}
			
		if(!empty($detail_id)){
			$sql->where("ListingID = ?", "$detail_id");
			$ret = $vindb->fetchRow($sql);
		}else{
			$ret = $vindb->fetchAll($sql);
		}		
		return $ret;
	}
	
	// === LOAD FEATURES === //	
	public static function load_features_info ($vindb){
		$sql = $vindb-> select();
		//$sql->distinct();		
		$sql->from ( "hornburginventory", array (
				"ListingID", "ModelYear", "Make", "Model", "Trim",
				"VINNumber", "StockNumber",
				"ExteriorColor", "InteriorColor",
				"BodyType", "Cylinders", "Liters",
				"DealershipName",
				"Tranmission",			
				"SalePrice",
				"Mileage",			
				"Descriptions",
				"CarsOptions",
				"CarImageUrl"
			));
		$sql->joinLeft( "whitmanenterprisedealershipinventory",
				"hornburginventory.Mileage = whitmanenterprisedealershipinventory.Mileage 
			 AND hornburginventory.ModelYear = whitmanenterprisedealershipinventory.ModelYear 
			 AND hornburginventory.Model = whitmanenterprisedealershipinventory.Model 
			 AND hornburginventory.VINNumber = whitmanenterprisedealershipinventory.VINNumber",
			array ("DealershipId","NewUsed")			 
			);		
					
			$sql->where("whitmanenterprisedealershipinventory.DealershipId = ?","44674");
			$sql->where("whitmanenterprisedealershipinventory.IsFeatured = 1");
			$sql->order ("rand()");
			$sql->limit(5);		
//var_dump("__toString($sql)");
			$ret = $vindb->fetchAll($sql);
				
		return $ret;		
	}
	
	//=== LOAD FILTER INFORMATION === //	
	public static function load_make ($vindb, $make, $model, $trim, $year ,$price){
		$sql = $vindb-> select();
		$sql->from ( "hornburginventory", array("num"=>"COUNT(*)","Make"));
		
		if(!empty($make)){
			$sql->where ("Make = ?","$make");
		}		
		$sql->group("Make");
		
		$ret = $vindb->fetchAll($sql);
		return $ret;		
	}	

	public static function load_model ($vindb, $make, $model, $trim, $year, $price){
		$sql = $vindb-> select();
		$sql->from ( "hornburginventory", array("num"=>"COUNT(*)","Model"));

		if(!empty($make)){
			$sql->where ("Make = ?","$make");
		}
		
		if(!empty($model)){
			var_dump(!empty($model));
			$sql->where ("Model = ?","$model");
		}
		
		if(!empty($trim)){
			if($trim == 99){
				$sql->where ("Trim = ?","");
			}else{
				$sql->where ("Trim = ?","$trim");	
			}			
		}
		if(!empty($year)){
			$sql->where ("ModelYear = ?","$year");
		}
		if($price != ""){
			$sql->where ("SalePrice = ?","$price");
		}
		
		$sql->group("Model");
		$ret = $vindb->fetchAll($sql);
		return $ret;		
	}
	
	public static function load_trim ($vindb, $make, $model, $trim ,$year, $price){
		$sql = $vindb-> select();
		$sql->from ( "hornburginventory", array("num"=>"COUNT(*)","Trim"));
		
		if(!empty($make)){
			$sql->where ("Make = ?","$make");
		}
		
		if (!empty($model)){
			$sql->where ("Model = ?","$model");
		}
		
		if(!empty($trim)){
			if($trim == 99){
				$sql->where ("Trim = ?","");
			}else{
				$sql->where ("Trim = ?","$trim");	
			}			
		}
		
		if(!empty($year)){
			$sql->where ("ModelYear = ?","$year");
		}

		if($price != ""){
			$sql->where ("SalePrice = ?","$price");
		}	
			
		$sql->group("Trim");		

		$ret = $vindb->fetchAll($sql);
		return $ret;		
	}
	
	public static function load_year ($vindb, $make, $model, $trim, $year, $price){
		$sql = $vindb-> select();
		$sql->from ( "hornburginventory", array("num"=>"COUNT(*)","ModelYear"));

		if(!empty($make)){
			$sql->where ("Make = ?","$make");
		}
		if (!empty($model)){
			$sql->where ("Model = ?","$model");
		}
		if($price != ""){
			$sql->where ("SalePrice = ?","$price");
		}
		if(!empty($trim)){
			if($trim == 99){
				$sql->where ("Trim = ?","");
			}else{
				$sql->where ("Trim = ?","$trim");	
			}			
		}
		
		if(!empty($year)){
			$sql->where ("ModelYear = ?","$year");
		}
		$sql->group("ModelYear");

		$ret = $vindb->fetchAll($sql);
		return $ret;
	}
	
	public static function load_price ($vindb, $make, $model, $trim, $year, $price){
		$sql = $vindb-> select();
		$sql->from ( "hornburginventory", array("num"=>"COUNT(*)","SalePrice"));

		if(!empty($make)){
			$sql->where ("Make = ?","$make");
		}
		if (!empty($model)){
			$sql->where ("Model = ?","$model");
		}
		if(!empty($year)){
			$sql->where ("ModelYear = ?","$year");
		}
		
		if(!empty($trim)){
			if($trim == 99){
				$sql->where ("Trim = ?","");
			}else{
				$sql->where ("Trim = ?","$trim");	
			}
			
		}
		
		if($price != ""){
			$sql->where ("SalePrice = ?","$price");
		}
		$sql->group("SalePrice");
		
		$ret = $vindb->fetchAll($sql);
		return $ret;		
	}

	public function select_max_id($db){
		$sql = $db->select();
		$sql->from( "contact_info",array(new Zend_Db_Expr('max(contact_id) as maxId')));	
		
		$ret = $db->fetchRow($sql);
		return $ret["maxId"];		
	}
	
	public function select_max_customerid($db){
		$sql = $db->select();
		$sql->from( "customer_info",array(new Zend_Db_Expr('max(customer_id) as maxId')));	
		
		$ret = $db->fetchRow($sql);
		return $ret["maxId"];		
	}

	
	// pulls dealer's inventory
	public function inventory_pull_data($vindb,$make, $model, $trim, $year, $price, $underPrice) {
		$sql = $vindb-> select();
		$sql->from ( "hornburginventory",array (
			"ListingID",
			"ModelYear",
			"Make",
			"Model",
			"Trim",
			"VINNumber",
			"SalePrice",
			"Mileage",
			"ExteriorColor",
			"StockNumber",
			"Descriptions",
			"CarImageUrl",
			"InteriorColor"	));
		if(!empty($underPrice)){
			switch($underPrice){
				case "u10000":
					$sql->where ("SalePrice <= ?","10000");
					break;
				case "u15000":
					$sql->where ("SalePrice <= ?","15000");
					break;
				case "u20000":
					$sql->where ("SalePrice <= ?","20000");
					break;
				case "u25000":
					$sql->where ("SalePrice <= ?","25000");
					break;
				default:
			}
		}else{
				if(!empty($make)){
					$sql->where ("Make = ?","$make");
				}
		
				if (!empty($model)){
					$sql->where ("Model = ?","$model");
				}
	
				if(!empty($trim)){
					if($trim == 99){
						$sql->where 
						("Trim = ?","");
					}else{
						$sql->where ("Trim = ?","$trim");	
					}			
				}
		
				if(!empty($year)){
					$sql->where ("ModelYear = ?","$year");
				}
		
				if(!empty($price)){			
					$sql->where ("SalePrice = ?","$price");
				}
		}
		
		//$sql->limit (15);	
		$sql-> order("SalePrice");
		
		$ret = $vindb->fetchAll($sql);
		return $ret;
	}
	
	public function insert_customer_action($db, $submit_info, $contact_id){
		$contact_info = array(
			'contact_name'		=> $submit_info["name"],
			'contact_email'		=> $submit_info["email"],
			'contact_phone'		=> $submit_info["phone"],
			'contact_city'		=> $submit_info["city"],
			'contact_state'		=> $submit_info["state"],
			'contact_type'		=> $submit_info["type"],
			'registdate'		=> new Zend_Db_Expr('now()')
		);
		$db->insert('contact_info', $contact_info);
		
		$vehicle_info = array(
			'contact_id'		=> $contact_id+1,
			'year'				=> $submit_info["year"],
			'make'				=> $submit_info["make"],
			'model'				=> $submit_info["model"],
			'Mileage'			=> $submit_info["mileage"],
			'color'				=> $submit_info["color"],
			'vehicle_info_type'	=> $submit_info["type"],
			'comment'			=> $submit_info["comment"],
			'options'			=> $submit_info["options"],
			'registdate'		=> new Zend_Db_Expr('now()')
		);
		
		$db->insert('vehicle_info', $vehicle_info);
		
		$data = array(
			'contact_name'		=> $submit_info["name"],
			'contact_email'		=> $submit_info["email"],
			'contact_phone'		=> $submit_info["phone"],
			'contact_city'		=> $submit_info["city"],
			'contact_state'		=> $submit_info["state"],
			'year'				=> $submit_info["year"],
			'make'				=> $submit_info["make"],
			'model'				=> $submit_info["model"],
			'Mileage'			=> $submit_info["mileage"],
			'color'				=> $submit_info["color"],
			'comment'			=> $submit_info["comment"],
			'options'			=> $submit_info["options"],
		);
				
		$to_email = self::get_notif_email($to_email = "test_email");
		$mail_content = "";		
		if($submit_info["type"] == 1){
			$mail_content = "pc_sell";
		}elseif ($submit_info["type"] ==2 ){
			$mail_content = "pc_find";
			//type=3 for contact us
		}elseif ($submit_info["type"] ==4 ){
			$mail_content = "pc_getinfo";
		}
		
		if($submit_info["type"] != 6 || $submit_info["type"] != 3 || $submit_info["type"] !=5){
			//self::send_mail( "$mail_content", $data, "", "$to_email" );	
		}
		
		return 1;
	}	
	
	public function insert_contact_us($db, $submit_info, $contact_id, $type){
		$contact_info = array(
			'contact_name'		=> $submit_info["name"],
			'contact_email'		=> $submit_info["email"],
			'contact_phone'		=> $submit_info["phone"],			
			'contact_type'		=> $type,
			'registdate'		=> new Zend_Db_Expr('now()')
		);
		$db->insert('contact_info', $contact_info);
		
		$data = array(
			'contact_name'		=> $submit_info["name"],
			'contact_email'		=> $submit_info["email"],
			'contact_phone'		=> $submit_info["phone"],	
			'comment'			=> $submit_info["comment"]					
		);		
		$to_email = self::get_notif_email($to_email = "test_email");
		self::send_mail( "pc_contact", $data, "", "$to_email" );		
	}
	
	public function insert_customer_friend($db, $submit_info, $contact_id, $link){
		$contact_info = array(
			'contact_id'		=> $contact_id,
			'friend_name'		=> $submit_info["fname"],
			'friend_email'		=> $submit_info["femail"],			
			'registdate'		=> new Zend_Db_Expr('now()')
		);
		$db->insert('customer_friend', $contact_info);
				
		$data = array(
			'contact_name'		=> $submit_info["name"],
			'contact_email'		=> $submit_info["email"],
			'contact_phone'		=> $submit_info["phone"],			
			'year'				=> $submit_info["year"],
			'make'				=> $submit_info["make"],
			'model'				=> $submit_info["model"],
			'comment'			=> $submit_info["comments"],
			'friend_name'		=> $submit_info["fname"],
			'friend_email'		=> $submit_info["femail"],
			'link'				=> $link		
		);		
		
		self::send_mail( "pc_shareinfo", $data, "", $submit_info["femail"] );		
	}
	
	public function insert_schedule_info($db, $submit_info, $contact_id){
		$contact_info = array(
			'contact_id'		=> $contact_id+1,
			'schedule_time'		=> $submit_info["schedule_time"],
			'schedule_date'		=> $submit_info["schedule_date"],					
			'registdate'		=> new Zend_Db_Expr('now()')
		);

		$db->insert('schedule_info', $contact_info);
		
		$data = array(
			'contact_name'		=> $submit_info["name"],
			'contact_email'		=> $submit_info["email"],
			'contact_phone'		=> $submit_info["phone"],			
			'year'				=> $submit_info["year"],
			'make'				=> $submit_info["make"],
			'model'				=> $submit_info["model"],
			'comment'			=> $submit_info["comments"],
			'schedule_time'		=> $submit_info["schedule_time"],
			'schedule_date'		=> $submit_info["schedule_date"]			
		);
		
		$to_email = self::get_notif_email($to_email = "test_email");
		self::send_mail( "pc_testdrive", $data, "", "$to_email" );		
	}
	
	public function categorize_info($vindb, $price_limit){
		$sql = $vindb-> select();
		$sql->from ( "hornburginventory",array (
			"ListingID",
			"ModelYear",
			"Make",
			"Model",
			"Trim",
			"VINNumber",
			"SalePrice",
			"Mileage",
			"ExteriorColor",
			"StockNumber",
			"Descriptions",
			"CarImageUrl",
			"InteriorColor"	));
		$sql -> where ("SalePrice <= ?", "$price_limit");
		$sql -> order ("SalePrice");

		$ret = $vindb->fetchAll($sql);
		return $ret;
	}
	
	// === Financing Information === //
	public function insert_finance_info($db, $finance_info, $customer_id){
		$customer_info = array(
			'firstname'							=> $finance_info["First_Name"],
			'middlename'						=> $finance_info["Middle_Initial"],
			'lastname'							=> $finance_info["Last_Name"],
			'email_address'						=> $finance_info["E-mail_Address"],
			'address' 							=> $finance_info["Address"],
			'previous_address' 					=> $finance_info["Previous_Address"],
			'previous_city' 					=> $finance_info["Previous_City"],
			'previous_state' 					=> $finance_info["Previous_State"],
			'previous_zip' 						=> $finance_info["Previous_ZIP"],
			'previoustime_at_address_month' 	=> $finance_info["Previous_Time_at_Address_Months"],
			'previoustime_at_address_year' 		=> $finance_info["Previous_Time_at_Address_Years"],
			'city' 								=> $finance_info["City"],
			'state' 							=> $finance_info["State"],
			'zip_code' 							=> $finance_info["Zip"],
			'livetime_at_address_month' 		=> $finance_info["Time_at_Address_Months"],
			'livetime_at_address_year' 			=> $finance_info["Time_at_Address_Years"],
			'homephone' 						=> $finance_info["Home_Phone_#"],
			'cellularphone' 					=> $finance_info["Cellular_Phone_#"],
			'ssn_no' 							=> $finance_info["SSN"],
			'birthday' 							=> date("Y-m-d", strtotime($finance_info["DOB(MM/DD/YYYY)"])),
			'employment_tiltle' 				=> $finance_info["Employment_Title"],
			'employer_name' 					=> $finance_info["Employer_Name"],
			'employer_phone' 					=> $finance_info["Employer_Phone_#"],
			'time_at_job_month' 				=> $finance_info["Time_at_Job_Months"],
			'time_at_job_year' 					=> $finance_info["Time_at_Job_Years"],
			'previoustime_at_job_month' 		=> $finance_info["Previous_Time_at_Job_Months"],
			'previoustime_at_job_year' 			=> $finance_info["Previous_Time_at_Job_Years"],
			'gross_monthly_income' 				=> $finance_info["Gross_Monthly_Income"],
			'income_interval' 					=> $finance_info["Income_Interval"],
			'other_income_amount' 				=> $finance_info["Other_Income_Amount"],
			'other_income_interval' 			=> $finance_info["Other_Income_Interval"],
			'salesperson' 						=> $finance_info["Salesperson"],
			'registdate'						=> new Zend_Db_Expr('now()')
		);

		$db->insert('customer_info', $customer_info);
		
		if($finance_info["trade_no"] == "true"){
			$customer_choice_trade = 1;
		}else{
			$customer_choice_trade = 2;
		}
		
		if($finance_info["trade_new"] == "true"){
			$customer_vehicle_type = 1;
		}else{
			$customer_vehicle_type = 2;
		}
		
		if($finance_info["Trade_Vehicle_Make"] == "Others"){
			$finance_info["Trade_Vehicle_Make"] = $finance_info["Others_Make"];
		}
		
		if($finance_info["Trade_Vehicle_Model"] == "Others" ){
			$finance_info["Trade_Vehicle_Model"] = $finance_info["Others_Model"];
		}
		$finance_vehicle_info = array(
			'customer_id'				=> $customer_id+1,
			'customer_choice_trade'		=> $customer_choice_trade,
			'customer_vehicle_type'		=> $customer_vehicle_type,
			'vehicle_year'				=> $finance_info["Vehicle_Year"],
			'vehicle_make' 				=> $finance_info["Vehicle_Make"],
			'vehicle_model' 			=> $finance_info["Vehicle_Model"],
			'vehicle_stock' 			=> $finance_info["Vehicle_Stock_#"],
			'customer_vehicle_year' 	=> $finance_info["Trade_Vehicle_Year"],
			'customer_vehicle_make' 	=> $finance_info["Trade_Vehicle_Make"],
			'customer_vehicle_model' 	=> $finance_info["Trade_Vehicle_Model"],			
			'registdate'				=> new Zend_Db_Expr('now()')		
		);
	
		$db->insert('finance_vehicle_info', $finance_vehicle_info);
		
		if($finance_info["trade_buy"] == "true"){
			$trade_value = 1;
		}else{
			$trade_value = 2;
		}
		$finance_info = array(
			'customer_id'				=> $customer_id+1,
			'buy_lease'					=> $trade_value,
			'customer_monthly_pay'		=> $finance_info["Monthly_Payment"],
			'term'						=> $finance_info["Term"],
			'financed_amount' 			=> $finance_info["Financed_Amount"],
			'cash_down' 				=> $finance_info["Cash_Down"],
			'comment' 					=> $finance_info["Comments"],
			'registdate'				=> new Zend_Db_Expr('now()')
		);
		
		$db->insert('customer_finance_info', $finance_info);
		
		//$to_email = self::get_notif_email($to_email = "test_email");
		//self::send_mail( "pc_financing", $data, "", "$to_email" );		
	}
}
?>
