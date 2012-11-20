<?php

class InventoryController extends Zend_Controller_Action
{
	public function init(){

	}
	
	public function preDispatch(){
		$this->config = new Zend_Config_Ini( dirname(__FILE__) . "/../config.ini", "default" );
		$this->vindb = common_util::vindb_connect();
		//$this->action = $this->getRequest()->getActionName();		
		$this->config_info = new Zend_Config_Ini( dirname(__FILE__) . "/../config.ini", "information" );
		
		$header =array();		
		$header["title"]	= $this->config_info->page_tile;
		$header["phone"]	= $this->config_info->page_phone;
		$header["address"]	= $this->config_info->page_address;
		$header["weekdays"]	= $this->config_info->weekdays;
		$header["saturday"]	= $this->config_info->saturday;
		$header["sunday"]	= $this->config_info->sunday;
				
		$this->view->header_info = $header;	
	}
	
	public function inventoryAction(){		

		if($_POST == NULL){
			$inventory_array = common_util::inventory_pull_data($this->vindb, $limit = 10);
		
		}else {					
			$inventory_array = common_util::inventory_pull_data($this->vindb,$limit = 10, $_POST["make"],$_POST["model"],$_POST["trim"],$_POST["year"], $_POST["price"]);
				
		}
		for ($i=0; $i<count($inventory_array); $i++){			
			$inventory_array[$i]["logo_url"] = split(",", $inventory_array[$i]["CarImageUrl"]);
			$inventory_array[$i]["SalePrice"] = number_format($inventory_array[$i]["SalePrice"]);
			$inventory_array[$i]["Mileage"] = number_format($inventory_array[$i]["Mileage"]);
		}		

		$this->view->inventory_obj = json_encode($inventory_array);
		$this->view->inventory_info = $inventory_array;
	}

	public function detailAction(){
		$this->_listingid = $this->_request -> getParam("listingid", "");

		$detail_array = common_util::load_slider_info($this->vindb, $this->_listingid);
		$detail_array["logo_url"] = split(",", $detail_array["CarImageUrl"]);
		$detail_array["SalePrice"] = number_format($detail_array["SalePrice"]);
		$detail_array["Mileage"] = number_format($detail_array["Mileage"]);

		$this->view->listingid = $this->_listingid;
		$this->view->detail_info = $detail_array;
		$this->view->arrayUrl = json_encode($detail_array);
	}
	
	public function u10000Action(){
		$this->action = $this->getRequest()->getActionName();

		if($this->action == "u15000"){
			$price = 15000;
		}else if($this->action == "u20000"){
			$price = 20000;
		}else if($this->action == "u25000"){
			$price = 25000;
		}else{
			$price = 10000;
		}
		$res_array = common_util::categorize_info($this->vindb, $price);
		
		for ($i=0; $i<count($res_array); $i++){						
			$res_array[$i]["logo_url"] = split(",", $res_array[$i]["CarImageUrl"]);
			$res_array[$i]["SalePrice"] = number_format($res_array[$i]["SalePrice"]);
			$res_array[$i]["Mileage"] = number_format($res_array[$i]["Mileage"]);
		}		

		$this->view->res_obj = json_encode($res_array);
		$this->view->inventory_obj = json_encode($res_array);		
		$this->view->inventory_info = $res_array;		
	}
	
	public function u15000Action(){
		$this->u10000Action();	
	}
	
	public function u20000Action(){
		$this->u10000Action();
	}
	
	public function u25000Action(){
		$this->u10000Action();
	}
	
	public function featuresAction(){
		
	}
	
	public function specialsAction(){
		
	}
	
	private function redirect_index(){
		$this->_redirect("/");
	}
		
	private function redirect_manage($link){
		$this->_redirect($link);
	}	
}

?>
