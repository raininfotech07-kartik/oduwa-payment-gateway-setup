export default function callback(req, res) {
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

  try{
    let resStatus=false;                                    //status for check your response is valid or not
    let key='';
    const {status, confirmed, verify_hash, orderid, userid, amount, received_amount, addr, txHash, pay_date, requestdate}=req.body
    if(req.body.status){                                    //it's identify that status and other data set or not

        let isExist="FIRE_YOUR_DATABASE_QUERY_HERE";        // get record from database where DB_OrderId==orderid and DB_UserId==userid
        if (isExist) {
          let public_key="GM****trxN"; 				              // Public Key
          let private_key="7l*****PWs"; 			              // Private Key

          key = md5(CONCAT(public_key,private_key,orderid));// generate key using md5 mehod with combination of public key, private key and order id
          resStatus = true;                                 //set status as true for pass in response

          if(status=="payment_confirm" && confirmed==0){
            // payment detected but unconfirm transaction
          }else if(status=="payment_confirm" && confirmed==1){
            // payment verified successfully
          }else if(status=="payment_unrecognized"){
            // payment detected but amount not matched
          }
        }
    }
    // send key and status in response to payment gateway for verification
    res.status(200).json({ 'status':resStatus,'hash':key }) 
  }catch(e){
    console.log("Error on hash",e)
    res.status(400).json({ status: false })
  }
}
