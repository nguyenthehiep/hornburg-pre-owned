<?php

class IndexController extends Zend_Controller_Action
{
	public function init(){}
	public function preDispatch(){
		$this->config = new Zend_Config_Ini( dirname(__FILE__) . "/../config.ini", "information" );
		
		$header =array();		
		$header["title"]	= $this->config->page_tile;
		$header["phone"]	= $this->config->page_phone;
		$header["address"]	= $this->config->page_address;
		$header["weekdays"]	= $this->config->weekdays;
		$header["saturday"]	= $this->config->saturday;
		$header["sunday"]	= $this->config->sunday;

		$this->vindb = common_util::vindb_connect();		
		
		$deatail_id = "";
		//$slider_array = common_util::load_slider_info($this->vindb, $deatail_id);

		$this->view->header_info = $header;
		//$this->view->slider_info = json_encode($slider_array);				
	}
	
	public function indexAction(){
				
	}
	
}

?>
