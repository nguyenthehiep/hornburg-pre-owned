<?php

class Push_Notification_Exception extends Exception{}

/**
 * Notification_iPhone
 * ノーティフィケーションクラス
 */
abstract class Push_Notification_Abstract{
	private $_deviceToken;
	private $_config;
	private $_message;
	private $_badge = 0;
	private $_sound;

	
	/**
	 * ノーティフィケーションクラスのコンストラクタ
	 * @deviceToken
	 */
	function __construct($deviceToken,&$config){
		$this->_deviceToken = $deviceToken;
		$this->_config = $config;
	}
	
	/**
	 * init
	 * ノーティフィケーションを送信する為の初期化をします
	 * @throws Push_Notification_Exception 初期化失敗時
	 */
	abstract public function init();
	
	/**
	 * send
	 * ノーティフィケーションを送信する
	 * @throws Push_Notification_Exception 送信失敗時
	 */
	abstract public function send();
	
	
	
	/**
	 * setBody
	 * ノーティフィケーション内容を設定する
	 * @message String メッセージ
	 * @badge int バッジ表示数 0:バッジを表示しない (端末が非対応の場合は無効)
	 * @sound boolean サウンド false:着信音を出さない true:出す (端末が非対応の場合は無効)
	 */
	public function setBody($message,$badge = 0,$sound = null){
		$this->_message = $message;
		$this->_badge = $badge;
		$this->_sound = $sound;
	}
	
	// setter/getter
	public function getMessage(){
		return $this->_message;
	}
	public function getBadge(){
		return $this->_badge;
	}
	public function getSound(){
		return $this->_sound;
	}
	public function getDeviceToken(){
		return $this->_deviceToken;
	}
	public function &getConfig(){
		return $this->_config;
	}
}