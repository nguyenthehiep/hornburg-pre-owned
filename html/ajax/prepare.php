<?php

	error_reporting(E_ALL);
	ini_set('display_errors', 0);
	date_default_timezone_set('America/New_York');

		// ===== Zend Framework include ===== //
	$app_path = dirname(__FILE__)."/../../app/";
	set_include_path('.'
		. PATH_SEPARATOR . $app_path . 'libs/ZendFramework-1.11.2/library/'
		. PATH_SEPARATOR . get_include_path()
	);
	require_once 'Zend/Loader/Autoloader.php';
	$autoloader = Zend_Loader_Autoloader::getInstance();
	$autoloader->setFallbackAutoloader(true);

	$config = new Zend_Config_Ini( $app_path . "config.ini", "path" );
	require_once( $config->common . "common_util.php" );
	
    Zend_Session::setOptions();
	Zend_Session::start();

	$_auth = Zend_Auth::getInstance()->getStorage()->read();

?>
