<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>

	<style type="text/css">

	::selection { background-color: #E13300; color: white; }
	::-moz-selection { background-color: #E13300; color: white; }

	body {
		background-color: #fff;
		margin: 40px;
		font: 13px/20px normal Helvetica, Arial, sans-serif;
		color: #4F5155;
	}

	a {
		color: #003399;
		background-color: transparent;
		font-weight: normal;
		text-decoration: none;
	}

	a:hover {
		color: #97310e;
	}

	h1 {
		color: #444;
		background-color: transparent;
		border-bottom: 1px solid #D0D0D0;
		font-size: 19px;
		font-weight: normal;
		margin: 0 0 14px 0;
		padding: 14px 15px 10px 15px;
	}

	code {
		font-family: Consolas, Monaco, Courier New, Courier, monospace;
		font-size: 12px;
		background-color: #f9f9f9;
		border: 1px solid #D0D0D0;
		color: #002166;
		display: block;
		margin: 14px 0 14px 0;
		padding: 12px 10px 12px 10px;
	}

	#body {
		margin: 0 15px 0 15px;
		min-height: 96px;
	}

	p {
		margin: 0 0 10px;
		padding:0;
	}

	p.footer {
		text-align: right;
		font-size: 11px;
		border-top: 1px solid #D0D0D0;
		line-height: 32px;
		padding: 0 10px 0 10px;
		margin: 20px 0 0 0;
	}

	#container {
		margin: 10px;
		border: 1px solid #D0D0D0;
		box-shadow: 0 0 8px #D0D0D0;
		text-align: center;
	}
	</style>
	<!-- Load this JS for access payment box -->
	<script src="assets/cryptobox.js"></script>
</head>
<body onload="loadGateway()">

<div id="container">
	<h1>Welcome to CodeIgniter - Oduwa payment gateway demo!</h1>

	<div id="body">
		<iframe title='payment' id="frameBox" src="" className="iframeCrypto" scrolling="no" marginHeight="0" marginWidth="0" frameBorder="0"></iframe>
	</div>
</div>

<script>
	async function loadGateway() {
		
		let boxID="PB1" 										// your Payment Box Id
		let coinAmount=parseFloat(parseFloat(0).toFixed(8))		// OWC amount 0 or more (set 0 if USD amount is >0)
		let usdAmount=parseFloat(parseFloat(6.48).toFixed(8))	// USD amount 0 or more (set 0 if OWC amount is >0)
		let orderID=1452										// your websites order id
		let userID=112											// your users id
		let coinLabel="OWC"										// set it fix to OWC
		let iframeID="frameBox"									// your iframe id
		let boxwidth="800"										// iframe width

		let api_url="get-hash"									// your API url for get secrate hash
		let response = await fetch(api_url,{method: "POST"});	
		let respp = await response.json();
        if(respp.status===true){
            let hash=respp.hash
            cryptobox_show(boxID, hash, coinLabel, userID, orderID, coinAmount, usdAmount, iframeID, boxwidth); // load url for payment gateway
        }
	};
</script>
</body>
</html>
