

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

## Run Locally

   Clone the project

```bash
  git clone https://github.com/ODUWAX/ODUWAX/Oduwacoin-Payment-Gateway-NextJS.git
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
    - You have to import [`cryptobox.js`](/cryptobox.js) for load payment gateway
    - Callback url code given in this path [`pages/api/callback.js`](/pages/api/callback.js)
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
