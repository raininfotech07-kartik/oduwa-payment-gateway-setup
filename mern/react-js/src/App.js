import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

// Import this JS for access payment box 
import cryptobox_show from './cryptobox'

function App() {

  useEffect(()=>{
    (async()=>{
        let boxID="PB1" 										// your Payment Box Id
        let coinAmount=parseFloat(parseFloat(0).toFixed(8))		// OWC amount 0 or more (set 0 if USD amount is >0)
        let usdAmount=parseFloat(parseFloat(6.48).toFixed(8))	// USD amount 0 or more (set 0 if OWC amount is >0)
        let orderID=1452										// your websites order id
        let userID=112											// your users id
        let coinLabel="OWC"										// set it fix to OWC
        let iframeID="frameBox"									// your iframe id
        let boxwidth="800"										// iframe width

        let api_url="http://localhost:3001/get-hash"			// your API url for get secrate hash
        let response = await fetch(api_url,{method: "POST"});	
        let respp = await response.json();
        if(respp.status===true){
            let hash=respp.hash
            cryptobox_show(boxID, hash, coinLabel, userID, orderID, coinAmount, usdAmount, iframeID, boxwidth); // load url for payment gateway
        }
    })()
},[])

  return (
    <div className="App">
      <header className="App-header">
          <h1 style={{"textAlign":"center"}}>Welcome to MERN (ReactJs + NodeJs) - Oduwa payment gateway demo!</h1>
          <iframe title='payment' id="frameBox" src="" className="iframeCrypto" scrolling="no" marginHeight="0" marginWidth="0" frameBorder="0"></iframe>
      </header>
    </div>
  );
}

export default App;
