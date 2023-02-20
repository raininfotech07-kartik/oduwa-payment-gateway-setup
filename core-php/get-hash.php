<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
	//keep this method as a secrate
	$boxID="PB1"; 							// Your Payment Box Id
	$public_key="GM****trxN"; 				// Public Key
	$private_key="7l*****PWs"; 				// Private Key
	$coinAmount=number_format(0.00,8);		// OWC amount 0 or more (set 0 if USD amount is >0)
	$usdAmount=number_format(6.48,8);		// USD amount 0 or more (set 0 if OWC amount is >0)
	$orderID=1452;							// your websites order id
	$userID=112;							// your users id

	// generate key using md5 mehod with given formate
	$hash = md5($boxID . "|" . $public_key . "|" . $private_key . "|" . $coinAmount . "|" . $usdAmount . "|" . $orderID . "|" . $userID);
	echo json_encode(array("status"=>true,"hash"=>$hash));
}
