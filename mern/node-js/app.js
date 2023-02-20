const express = require('express')
const app = express()
const port = 3001
var md5 = require('md5');

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3002'] // allow React App for access API
}));

app.post('/get-hash', (req, res) => {
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
})

app.post('/callback', (req, res) => {
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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})