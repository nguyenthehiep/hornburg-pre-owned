<?php
set_include_path(  get_include_path() . ":" . dirname(__FILE__) . "/../gpay_client/")   ;
define( 'PGCARD_SAMPLE_BASE', dirname(__FILE__));
define( 'PGCARD_SAMPLE_ENCODING' , 'UTF-8');

/* 以下の項目をお客様のインストール環境に合わせて設定してください */
//define( 'PGCARD_SAMPLE_URL' , 'http://localhost/clientSample');
define( 'PGCARD_SAMPLE_URL' , 'https://photo3.lapeace.net/premitum/');
define( 'PGCARD_SECURE_RIDIRECT_HTML' , '/home/lapeace/vhosts/photo3.lapeace.net/app/libs//gpay_client/RidirectPage.html');
define( 'PAYPAL_START_RIDIRECT_HTML' , '/your/path/to/RidirectPage');
define( 'WEBMONEY_START_RIDIRECT_HTML' , '/your/path/to/RidirectPage');

/* 以下の項目をテスト環境設定書に従って設定してください */
define( 'PGCARD_SHOP_ID' , 'tshop00007859');
define( 'PGCARD_SHOP_PASS' , 'n1rnd418');
define( 'PGCARD_SITE_ID' , 'tsite00007756');
define( 'PGCARD_SITE_PASS' , 'epfds8v45r');