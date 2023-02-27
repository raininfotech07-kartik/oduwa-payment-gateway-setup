<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */

	 public function __construct()
	 {
		 parent::__construct();
		 
	 }

	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function get_hash()
	{
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

	public function callBack()
	{
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

		$resStatus=false;  									//status for check your response is valid or not
		$key='';
		if($_POST['status']){ 								//it's identify that status and other data set or not

			$isExist="FIRE_YOUR_DATABASE_QUERY_HERE"; 		// get record from database where DB_OrderId==$_POST['orderid'] and DB_UserId==$_POST['userid']
			if ($isExist) {
				$public_key="GM****trxN"; 					// Public Key
				$private_key="7l*****PWs"; 					// Private Key
				
				$key = md5(($public_key."".$private_key."".$_POST['orderid'])); // generate key using md5 mehod with combination of public key, private key and order id
				$resStatus = true; 							//set status as true for pass in response

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
}
