<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
	// You will get these fields on each callback
	// status 
	// confirmed
	// verify_hash
	// orderid
	// userid
	// amount
	// received_amount
	// addr
	// txHash
	// pay_date
	// requestdate

	$resStatus=false;  //status for check your response is valid or not
	$key='';
	if($_POST['status']){  //it's identify that status and other data set or not
		$isExist="FIRE_YOUR_DATABASE_QUERY_HERE"; // get record from database where DB_OrderId==$_POST['orderid'] and DB_UserId==$_POST['userid']
		if ($isExist) {
			$public_key="GM****trxN"; 				// Public Key
			$private_key="7l*****PWs"; 				// Private Key
			
			$key = md5(($public_key."".$private_key."".$_POST['orderid'])); // generate key using md5 mehod with combination of public key, private key and order id
			$resStatus = true; //set status as true for pass in response

			if($_POST['status']=="payment_confirm" && $_POST['confirmed']==0){
				// payment detected but unconfirm transaction
			}else if($_POST['status']=="payment_confirm" && $_POST['confirmed']==1){
				// payment verified successfully
			}else if($_POST['status']=="payment_unrecognized"){
				// payment detected but amount not matched
			}
		}
	}
	// send key and status in response to payment gateway for verification
	echo json_encode(array("status"=>$resStatus,"hash"=>$key));
}
