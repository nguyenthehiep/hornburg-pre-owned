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
			
	}

	public function detailAction(){
		$this->_listingid = $this->_request -> getParam("listingid", "");
		$this->view->listingid = $this->_listingid;
	
	}
	
	public function u10000Action(){
		/*
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
		$this->view->inventory_info = $res_array;		*/
		$this->view->search_info = "u10000";
	}
	
	public function u15000Action(){
		//$this->u10000Action();
		$this->view->search_info = "u15000";	
	}
	
	public function u20000Action(){
		//$this->u10000Action();
		$this->view->search_info = "u20000";
	}
	
	public function u25000Action(){
		//$this->u10000Action();
		$this->view->search_info = "u25000";
	}
	
	public function featuresAction(){
		
	}
	
	public function specialsAction(){
		
	}
	
	public function searchAction(){
		$search_array = array();
		$search_array["make"] = $_POST["make"];
		$search_array["model"] = $_POST["model"];
		$search_array["trim"] = $_POST["trim"];
		$search_array["year"] = $_POST["year"];
		$search_array["price"] = $_POST["price"];
		
		$this->view->search_info = $search_array;
		
	}
	
	private function redirect_index(){
		$this->_redirect("/");
	}
		
	private function redirect_manage($link){
		$this->_redirect($link);
	}	
}

?>
