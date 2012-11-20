<?php
	error_reporting(E_ALL|E_STRICT);
	ini_set('display_errors', 0);
	date_default_timezone_set('America/New_York');

	$app_path = "../app/";
	set_include_path('.'
		. PATH_SEPARATOR . $app_path . 'libs/ZendFramework-1.11.2/library/'
		. PATH_SEPARATOR . get_include_path()
	);
	require_once 'Zend/Loader.php';
	require_once 'Zend/Loader/Autoloader.php';
	$autoloader = Zend_Loader_Autoloader::getInstance();
	$autoloader->setFallbackAutoloader(true);

	$config = new Zend_Config_Ini( $app_path . "config.ini", "path" );

	require_once $config->smarty .'Smarty.class.php';
	require_once $config->views . 'Zend_View_Smarty.class.php';
	require_once( $config->common . "common_util.php" );
	
	Zend_Session::setOptions();
	Zend_Session::start();
	
	$device_type = common_util::check_device();
	
	$config_route = new Zend_Config_Ini( $app_path . "config.ini", "routing" );
	$router       = new Zend_Controller_Router_Rewrite();
	$router->addConfig( $config_route, 'routes' );

	$frontController = Zend_Controller_Front::getInstance();
	$frontController->throwExceptions(true);
	$frontController->setControllerDirectory( $app_path . '/controllers' );
	$frontController->setParam( 'useDefaultControllerAlways', true );
	$frontController->setRouter( $router );
	$view = new Zend_View_Smarty(
		$config->views . 'templates',
		array(
			'compile_dir' => $config->views . 'templates_c',
			'config_dir'  => $config->views . 'configs',
			'cache_dir'   => $config->views . 'cache'
		)
	);
		
	$viewRenderer = Zend_Controller_Action_HelperBroker::getStaticHelper('ViewRenderer');
	$viewRenderer->setView($view)
				 ->setViewBasePathSpec($view->getEngine()->template_dir)
				 ->setViewScriptPathSpec(':controller/'.$device_type .'_'.':action.:suffix')
				 ->setViewScriptPathNoControllerSpec($device_type .'_'.':action.:suffix')
				 ->setViewSuffix('html');
	$frontController->dispatch();

	