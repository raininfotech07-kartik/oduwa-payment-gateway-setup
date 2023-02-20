export default function callback(req, res) {
  try{
    let resStatus=false;                                    //status for check your response is valid or not
    let key='';
    const {status, orderid, userid}=req.body
    if(req.body.status){                                    //it's identify that status and other data set or not

        let isExist="FIRE_YOUR_DATABASE_QUERY_HERE";        // get record from database where DB_OrderId==orderid and DB_UserId==userid
        if (isExist) {
          let public_key="GM****trxN"; 				        // Public Key
          let private_key="7l*****PWs"; 			        // Private Key

          key = md5(CONCAT(public_key,private_key,orderid));// generate key using md5 mehod with combination of public key, private key and order id
          resStatus = true;                                 //set status as true for pass in response

          // Here you can take action on success payment.
        }
    }
    // send key and status in response to payment gateway for verification
    res.status(200).json({ 'status':resStatus,'key':key }) 
  }catch(e){
    console.log("Error on hash",e)
    res.status(400).json({ status: false })
  }
}
