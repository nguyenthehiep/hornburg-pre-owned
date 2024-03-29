<?php

require_once( dirname(__FILE__) . '/config.php');

require_once( 'com/gmo_pg/client/input/SearchMemberInput.php');
require_once( 'com/gmo_pg/client/tran/SearchMember.php');

require_once( 'com/gmo_pg/client/input/SaveMemberInput.php');
require_once( 'com/gmo_pg/client/tran/SaveMember.php');

require_once( 'com/gmo_pg/client/input/SearchCardInput.php');
require_once( 'com/gmo_pg/client/tran/SearchCard.php');

require_once( 'com/gmo_pg/client/input/SaveCardInput.php');
require_once( 'com/gmo_pg/client/tran/SaveCard.php');

require_once( 'com/gmo_pg/client/input/EntryTranInput.php');
require_once( 'com/gmo_pg/client/input/ExecTranInput.php');
require_once( 'com/gmo_pg/client/input/EntryExecTranInput.php');
require_once( 'com/gmo_pg/client/tran/EntryExecTran.php');

require_once( 'com/gmo_pg/client/input/TradedCardInput.php');
require_once( 'com/gmo_pg/client/tran/TradedCard.php');

define( 'ERRINFO_NOMEMBER', 'E01390002' );
define( 'ERRINFO_NOCARD', 'E01240002' );
define( 'CARD_SEQ_DEFAULT', 0 );
define( 'CARD_SEQ_MODE', 0 );
define( 'CARD_DEFAULT_FLAG', 1 );
define( 'JOB_CODE_CAPTURE', 'CAPTURE' );

$log;

function execPayment( $member_id,  $order_id, $card_no, $expire, $security_code, $holder_name, $amount ) {

    global $log;
    $log = new Log("payment_api");
    try {
        //search member
        $result = searchMember( $member_id, false );

        if ( $result == false  ) {
            // entryMember
            saveMember( $member_id );
        }

        // search Card
        $result = searchCard( $member_id, false );

        if ( $result == false ) {
            // save card
            saveCard( $member_id, $card_no, $expire, $security_code, $holder_name );
        }

        // entry & exec tran
        execTran( $member_id, $order_id, $amount);

        // traded cad
        //tradedCard( $member_id, $order_id, $holder_name );

    } catch (Exception $e) {
        $log->error( "execPaiment ERROR_CODE=" . $e->getMessage() );
        $log->error( serialize($e) );
        return $e->getMessage();
    }
    return true;
}

function execMonthlyPayment( $member_id,  $order_id, $amount ) {

    global $log;
    $log = new Log("payment_api");
    try {
        //search member
        $result = searchMember( $member_id, true );

        if ( $result == false  ) {
            return false;
        }

        // search Card
        $result = searchCard( $member_id, true );
        if ( $result == false ) {
            return false;
        }

        // entry & exec tran
        execTran( $member_id, $order_id, $amount);

    } catch (Exception $e) {
        $log->error( "execMonthlyPaiment ERROR_CODE=" . $e->getMessage() );
        $log->error( serialize($e) );
        return $e->getMessage();
    }
}

function searchMember( $member_id, $search_mode = false ) {

    global $log;
    $result = false;

    $input = new SearchMemberInput();/* @var $input SearchMemberInput */

    $input->setSiteId( PGCARD_SITE_ID );
    $input->setSitePass( PGCARD_SITE_PASS );
    $input->setMemberId( $member_id );

    $exe = new SearchMember();/* @var $exec SearchMember */
    $output = $exe->exec( $input );/* @var $output SearchMemberOutput */

    $log->info( serialize( $input ) );
    $log->info( serialize( $output ) );

    foreach( $output->getErrList() as $err ) {
        $errInfo = $err->getErrInfo();
        if( $errInfo != ERRINFO_NOMEMBER || $search_mode == true ) {
            $log->error( serialize($input) );
            $log->error( serialize($output) );
            throw new Exception($errInfo);
        }
    } 

    if( $output->getMemberId() ) {
        $result = true;
    }

    return $result;

}

function saveMember( $member_id ) {

    global $log;

    $input = new SaveMemberInput();/* @var $input SaveMemberInput */
    $input->setSiteId( PGCARD_SITE_ID );
    $input->setSitePass( PGCARD_SITE_PASS );
    $input->setMemberId( $member_id );
    $input->setMemberName( $member_id );

    $exe = new SaveMember();/* @var $exec SaveMember */
    $output = $exe->exec( $input );/* @var $output SaveMemberOutput */
    
    $log->info( serialize( $input ) );
    $log->info( serialize( $output ) );
    
    foreach( $output->getErrList() as $err ) {
        $log->error( serialize($input) );
        $log->error( serialize($output) );
        $errInfo = $err->getErrInfo();
        throw new Exception($errInfo);
    } 

    return true;

}

function searchCard( $member_id, $search_mode = false ) {

    global $log;
    $result = false;

    $input = new SearchCardInput();/* @var $input SearchCardInput */
    $input->setSiteId( PGCARD_SITE_ID );
    $input->setSitePass( PGCARD_SITE_PASS );
    $input->setMemberId( $member_id );
    $input->setCardSeq( CARD_SEQ_DEFAULT );
    $input->setSeqMode( CARD_SEQ_MODE );    

    $exe = new SearchCard();/* @var $exec SearchCard */
    $output = $exe->exec( $input );/* @var $output SearchCardOutput */

    $log->info( serialize( $input ) );
    $log->info( serialize( $output ) );
    
    foreach( $output->getErrList() as $err ) {
        $errInfo = $err->getErrInfo();
        if( $errInfo != ERRINFO_NOCARD || $search_mode == true ) {
            $log->error( serialize( $input ) );
            $log->error( serialize( $output ) );
            throw new Exception($errInfo);
        }
    } 

    $cardlist = $output->getCardList();
    if( count($cardlist) > 0 ) {
        $result = true;
    }

    return $result;
}

function saveCard( $member_id, $card_no, $expire, $security_code, $holder_name, $overwrite = false ) {

    global $log;

    $input = new SaveCardInput();/* @var $input SaveCardInput */
    $input->setSiteId( PGCARD_SITE_ID );
    $input->setSitePass( PGCARD_SITE_PASS );
    $input->setMemberId( $member_id );
    if( $overwrite == true ) {
        $input->setCardSeq( CARD_SEQ_DEFAULT );
    }
    $input->setSeqMode( CARD_SEQ_MODE );    
    $input->setCardNo( $card_no );
    //$input->setCardPass( $_POST['CardPass'] );
    $input->setExpire( $expire );
    $input->setDefaultFlag( CARD_DEFAULT_FLAG );
    $input->setHolderName( $holder_name );
        
    $exe = new SaveCard();/* @var $exec SearchCard */
    $output = $exe->exec( $input );/* @var $output SaveCardOutput */

    $log->info( serialize( $input ) );
    $log->info( serialize( $output ) );
    
    foreach( $output->getErrList() as $err ) {
        $log->error( serialize($input) );
        $log->error( serialize($output) );
        $errInfo = $err->getErrInfo();
        throw new Exception($errInfo);
    } 

    return true;
}

function execTran( $member_id, $order_id, $amount ) {

    global $log;

    $entryInput = new EntryTranInput();
    $entryInput->setShopId( PGCARD_SHOP_ID );
    $entryInput->setShopPass( PGCARD_SHOP_PASS );
    $entryInput->setJobCd( JOB_CODE_CAPTURE );
    $entryInput->setOrderId( $order_id );
    $entryInput->setAmount( $amount );

    $execInput = new ExecTranInput();

    $execInput->setOrderId( $order_id );
    $execInput->setMethod( 1 );

    $execInput->setSiteId( PGCARD_SITE_ID );
    $execInput->setSitePass( PGCARD_SITE_PASS );
    
    $execInput->setMemberId( $member_id );
    $execInput->setCardSeq( CARD_SEQ_DEFAULT );

    $input = new EntryExecTranInput();/* @var $input EntryExecTranInput */
    $input->setEntryTranInput( $entryInput );
    $input->setExecTranInput( $execInput );
        
    $exe = new EntryExecTran();/* @var $exec EntryExecTran */
    $output = $exe->exec( $input );/* @var $output EntryExecTranOutput */

    $log->info( serialize( $input ) );
    $log->info( serialize( $output ) );

    foreach( $output->getEntryErrList() as $err ) {
        $log->error( serialize($input) );
        $log->error( serialize($output) );
        $errInfo = $err->getErrInfo();
        throw new Exception($errInfo);
    } 
    foreach( $output->getExecErrList() as $err ) {
           $log->error( serialize($input) );
           $log->error( serialize($output) );
        $errInfo = $err->getErrInfo();
        throw new Exception($errInfo);
    } 

    return $output;
}

function tradedCard( $member_id, $order_id, $holder_name ) {

    global $log;

       $input = new TradedCardInput();/* @var $input TradedCardInput */
        
       $input->setShopId( PGCARD_SHOP_ID );
       $input->setShopPass( PGCARD_SHOP_PASS );
       $input->setSiteId( PGCARD_SITE_ID );
       $input->setSitePass( PGCARD_SITE_PASS );
       $input->setMemberId( $member_id );
       $input->setOrderId( $order_id );
       $input->setSeqMode( CARD_SEQ_MODE );
       $input->setDefaultFlag( CARD_DEFALT_FLAG );
       $input->setHolderName( $holder_name );
        
       $exe = new TradedCard();/* @var $exec TradedTran */
       $output = $exe->exec( $input );/* @var $output TradedCardOutput */

    $log->info( serialize( $input ) );
    $log->info( serialize( $output ) );

    foreach( $output->getErrList() as $err ) {
        $log->error( serialize( $input ) );
        $log->error( serialize( $output ) );
        $errInfo = $err->getErrInfo();
        throw new Exception($errInfo);
    } 

    return $output;
}


?>
