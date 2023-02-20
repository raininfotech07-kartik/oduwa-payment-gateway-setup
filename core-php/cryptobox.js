function cryptobox_show(boxID, hash, coinLabel, userID, orderID, coinAmount, usdAmount, iframeID, boxwidth,cookieName) {
    if (typeof boxwidth !== 'number') boxwidth = 500;

    if (boxID.indexOf("PB") === -1) alert('Invalid payment box Id');
    else if (hash === '') alert('Invalid payment box hash');
    if (coinLabel.indexOf("OWC") === -1 && coinLabel.length !== 3) alert('Invalid payment box '+coinLabel+'(must be OWC)');
    else if ((usdAmount !== 0 && coinAmount >= 0.0001) || (usdAmount === 0 && coinAmount === 0)) alert('You can use in payment box options one of variable only: amount or amountUSD. You cannot place values in that two variables together(1 must be 0(Zero))');
    else if ((usdAmount !==0 && usdAmount <= 0.01) || (usdAmount > 500000000)) alert("Invalid USD Amount - " + usdAmount + " UDS. Allowed range: 0.01 .. 500,000,000");
    else if ((coinAmount!==0 && coinAmount < 0.0001) || coinAmount > 500000000) alert("Invalid Coin Amount - " + coinAmount + " " +coinLabel+". Allowed range: 0.0001 .. 500,000,000");
    else if (iframeID === '') alert('Invalid iframeID');
    else if (userID === '') alert('Invalid userID');
    else if (orderID === '') alert('Invalid orderID');
    else {
        if(cookieName !== ''){
            var cookies = {};
            cookies["boxID"] = boxID;
            cookies["hash"] = hash;
            cookies["coinLabel"] = coinLabel;
            cookies["userID"] = userID;
            cookies["orderID"] = orderID;
            cookies["coinAmount"] = coinAmount;
            cookies["usdAmount"] = usdAmount;
            cookies["iframeID"] = iframeID;
            cookies["boxwidth"] = boxwidth;
            set_cookie(cookieName,cookies);
        }
        coinAmount = coinAmount.toFixed(8);
        usdAmount = usdAmount.toFixed(8);
        var url = 'https://api.oduwagateway.com/payment-box/' +
            encodeURIComponent(boxID) +
            '/' + encodeURIComponent(hash) +
            '/' + encodeURIComponent(coinLabel) +
            '/' + encodeURIComponent(userID) +
            '/' + encodeURIComponent(orderID) +
            '/' + encodeURIComponent(coinAmount) +
            '/' + encodeURIComponent(usdAmount) +
            '/' + encodeURIComponent(iframeID) +
            '/' + encodeURIComponent(boxwidth);

        var html = document.getElementById(iframeID);
        if (html == null) alert('Cryptobox iframeID HTML with id "' + iframeID + '" not exist!');
        else html.src = url;

        document.getElementById("frameBox").style.cssText = `
        border-radius: 15px;
        box-shadow: 0 0 12px #aaa;
        -moz-box-shadow: 0 0 12px #aaa;
        -webkit-box-shadow: 0 0 12px #aaa;
        padding: 3px;
        margin: 10px;
        width: 500px;
        height: 185px;
        `;
    }

    return true;
}


function set_cookie(name,data) {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 365 * 24 * 60 * 60));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + JSON.stringify(data) + ";" + expires + ";path=/";
}


