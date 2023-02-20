<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
	$resStatus=false;  //status for check your response is valid or not
	$key='';
	if($_POST['status']){  //it's identify that status and other data set or not
		$isExist="FIRE_YOUR_DATABASE_QUERY_HERE"; // get record from database where DB_OrderId==$_POST['orderid'] and DB_UserId==$_POST['userid']
		if ($isExist) {
			$public_key="GM****trxN"; 				// Public Key
			$private_key="7l*****PWs"; 				// Private Key
			
			$key = md5(($public_key."".$private_key."".$_POST['orderid'])); // generate key using md5 mehod with combination of public key, private key and order id
			$resStatus = true; //set status as true for pass in response

			// Here you can take action on success payment.
			
		}
	}
	// send key and status in response to payment gateway for verification
	echo json_encode(array("status"=>$resStatus,"hash"=>$key));
}
