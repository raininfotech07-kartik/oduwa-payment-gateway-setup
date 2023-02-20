var md5 = require('md5');

export default function getHash(req, res) {
  try{
    //keep this method as a secrate
    let boxID="PB1" 							              // Your Payment Box Id
    let public_key="GM****trxN"; 				        // Public Key
    let private_key="7l*****PWs"; 				      // Private Key
    let coinAmount=parseFloat(0).toFixed(8)		  // OWC amount 0 or more (set 0 if USD amount is >0)
    let usdAmount=parseFloat(6.48).toFixed(8)   // USD amount 0 or more (set 0 if OWC amount is >0)
    let orderID=1452                            // your websites order id
    let userID=112                              // your users id

    // generate key using md5 mehod with given formate
    let hash = md5(boxID + "|" + public_key + "|" + private_key + "|" + coinAmount+ "|" + usdAmount + "|" + orderID + "|" + userID);
    res.status(200).json({ status: true, hash: hash })
  }catch(e){
    console.log("Error on hash",e)
    res.status(400).json({ status: false })
  }
}
