<?php

class LocatorController extends Zend_Controller_Action
{
	public function init(){}
	public function preDispatch(){
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
	
	public function locatorAction(){}	
	
}

?>
