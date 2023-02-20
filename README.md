

![Logo](https://www.oduwagateway.com/odw/landing/images/logo.png)


## Oduwa Payment Gateway for NextJs, MERN (ReactJs + NodeJs), CodeIgniter, Core PHP

#### Follow this guide for setup Oduwa payment gateway in your website.
- [Basic Requirements for access gateway.](#basic-requirements)
- [How to setup payment gateway in your website?](#how-to-setup)
- [UI view of payment gateway](#ui-view)

<a name="basic-requirements"></a>
#### 1. Basic Requirements for access gateway.

- [Register as a Vendor account for free](https://www.oduwagateway.com/register) on the website.

    ![App Screenshot](https://www.oduwagateway.com/odw/githubdata/register-as-vendor.png)

- Create new payment box from [here](https://www.oduwagateway.com/webandor/apply-new-box)
    - Click on Add box at right side of page

        ![App Screenshot](https://www.oduwagateway.com/odw/githubdata/new-payment-box-1.png)
        <a name="createPaymentbox2"></a>
    - Fill up all details for create payment box

        ![App Screenshot](https://www.oduwagateway.com/odw/githubdata/new-payment-box-2.png)

    - Wait for `Admin approval` to access payment gateway box in your website

<a name="how-to-setup"></a>
### 2. How to setup payment gateway in your website?

- You can access this payment gateway in below frameworks
    - [NextJs `node v13 or above`](#nextjs)
    - [MERN (ReactJs + NodeJs)  `node v13 or above`](#mern)
    - [CodeIgniter `PHP 7.3 or lower`](#codeIgniter)
    - [Core PHP](#core-php)

## Run Locally

   Clone the project

```bash
  git clone https://github.com/******.git
```
<a name="nextjs"></a>
- ### NextJs
    Go to the project directory

    ```bash
        cd next-js
    ```

    Install dependencies

    ```bash
        npm install
    ```

    Start the server

    ```bash
        npm run dev
    ```
    - You have to import [`cryptobox.js`](/next-js/cryptobox.js) for load payment gateway
    - Callback url code given in this path [`pages/api/callback.js`](/next-js/pages/api/callback.js)
    - You have to set callback url in this [Callback URL field](#createPaymentbox2)
 

            
<a name="mern"></a>
- ### MERN (MERN (ReactJs + NodeJs)
    Go to the project directory
    ```bash
        cd mern
    ```

    You can see 2 projects in mern directory, [`react-js`](/mern/react-js) for front end and [`node-js`](/mern/node-js) for backend.
    let's start with react-js
    ```bash
        cd react-js
    ```

    Install dependencies

    ```bash
        npm install
    ```

    Start the server

    ```bash
        npm run start
    ```
    - You have to import [`cryptobox.js`](/mern/react-js/src/cryptobox.js) for load payment gateway
    ###

    #### Now open another terminal and go to node-js directory
    ```bash
        cd mern/node-js
    ```

    Install dependencies

    ```bash
        npm install
    ```

    Start the server

    ```bash
        node app.js
    ```
    - Callback url code given in this path [`app.js => app.post('/callback')`](/mern/node-js/app.js)
    - You have to set callback url in this [Callback URL field](#createPaymentbox2)
    
<a name="codeIgniter"></a>
- ### CodeIgniter
    You can run this project using PHP server
    Copy codeigniter directory and pest it under PHP root directory `e.g PATH_TO/htdocs/`
    ```bash
        cp codeigniter PATH/TO/PHP_SERVER_DIR 
    ```

    open this url in your browser

    ```bash
        http://localhost:8080/PATH_TO_PROJECT
    ```
    - You have to load [`cryptobox.js`](/codeigniter/assets/cryptobox.js) file for load payment gateway
    - Callback url code given in this path [`application/controllers/Welcome.php`](/codeigniter/application/controllers/Welcome.php)
    - You have to set callback url in this [Callback URL field](#createPaymentbox2)

<a name="core-php"></a>
- ### Core PHP
    You can run this project using PHP server
    Copy core-php directory and pest it under PHP root directory `e.g PATH_TO/htdocs/`
    ```bash
        cp codeigniter PATH/TO/PHP_SERVER_DIR 
    ```

    open this url in your browser

    ```bash
        http://localhost:8080/PATH_TO_PROJECT
    ```
    - You have to load [`cryptobox.js`](/core-php/cryptobox.js) file for load payment gateway
    - Callback url code given in this path [`callback.php`](/core-php/callback.php)
    - You have to set callback url in this [Callback URL field](#createPaymentbox2)

<a name="ui-view"></a>
### UI view of payment gateway
- Waiting for payment

![App Screenshot](https://www.oduwagateway.com/odw/githubdata/payment-awaiting.png)

- Don't have a OWC payment card

![App Screenshot](https://www.oduwagateway.com/odw/githubdata/dont-have-card.png)

- Successfull payment

![App Screenshot](https://www.oduwagateway.com/odw/githubdata/success-payment.png)

- Payment gateway credential not valid OR not approved by admin

![App Screenshot](https://www.oduwagateway.com/odw/githubdata/box-not-valid.png)


## Support
For support, email on support@oduwacoin.io or visit [here](https://www.oduwagateway.com/contact).
