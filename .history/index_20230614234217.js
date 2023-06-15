const express=require('express')
const app=express()
const port=3300
const bodyparser=require('body-parser')
const cors=require('cors')
// app.get("/",(req,res)=>{
  
//  res.send(req.query)

// })
/* eslint-disable */
const {initializeApp}=require('firebase/app')
const {getFirestore}=require('firebase/firestore')
const {getAuth}=require('firebase/auth')
const {getStorage}=require('firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyCZwxZYYmwux5W60lL5C9Ifz-9uHfAD860",
    authDomain: "test-36212.firebaseapp.com",
    projectId: "test-36212",
    storageBucket: "test-36212.appspot.com",
    messagingSenderId: "738249892761",
    appId: "1:738249892761:web:a6be481e68090207e7a908"
};
  
const app1 = initializeApp(firebaseConfig);
const auth=getAuth(app1)
const db=getFirestore(app1)
const storage=getStorage(app1)
const {addDoc,collection} =require("firebase/firestore")
 

app.use(bodyparser.json())
app.use(cors())

const or=JSON.parse(" "obj": {
  "id": 2556706,
  "pending": false,
  "amount_cents": 100,
  "success": true,
  "is_auth": false,
  "is_capture": false,
  "is_standalois_capturene_payment": true,
  "is_voided": false,
  "is_refunded": false,
  "is_3d_secure": true,
  "integration_id": 6741,
  "profile_id": 4214,
  "has_parent_transaction": false,
  "order": {
    "id": 4778239,
    "created_at": "2020-03-25T18:36:05.494685",
    "delivery_needed": true,
    "merchant": {
      "id": 4214,
      "created_at": "2019-09-22T18:32:56.764441",
      "phones": [
        "01032347111"
      ],
      "company_emails": [
        "fnjum@temp-link.net"
      ],
      "company_name": "Accept Payments",
      "state": "",
      "country": "EGY",
      "city": "",
      "postal_code": "",
      "street": ""
    },
    "collector": {
      "id": 115,
      "created_at": "2019-06-29T00:48:26.910433",
      "phones": [],
      "company_emails": [],
      "company_name": "logix - test",
      "state": "Heliopolis",
      "country": "egypt",
      "city": "cairo",
      "postal_code": "123456",
      "street": "Marghany"
    },
    "amount_cents": 2000,
    "shipping_data": {
      "id": 2558893,
      "first_name": "abdulrahman",
      "last_name": "Khalifa",
      "street": "Wadi el Nile",
      "building": "5",
      "floor": "11",
      "apartment": "1565162",
      "city": "Cairo",
      "state": "Cairo",
      "country": "EG",
      "email": "abdulrahman@weaccept.co",
      "phone_number": "01011994353",
      "postal_code": "",
      "extra_description": " ",
      "shipping_method": "UNK",
      "order_id": 4778239,
      "order": 4778239
    },
    "shipping_details": {
      "id": 1401,
      "cash_on_delivery_amount": 0,
      "cash_on_delivery_type": "Cash",
      "latitude": null,
      "longitude": null,
      "is_same_day": 0,
      "number_of_packages": 1,
      "weight": 1,
      "weight_unit": "Kilogram",
      "length": 1,
      "width": 1,
      "height": 1,
      "delivery_type": "PUD",
      "return_type": null,
      "order_id": 4778239,
      "notes": "im so tired",
      "order": 4778239
    },
    "currency": "EGP",
    "is_payment_locked": false,
    "is_return": false,
    "is_cancel": false,
    "is_returned": false,
    "is_canceled": false,
    "merchant_order_id": null,
    "wallet_notification": null,
    "paid_amount_cents": 100,
    "notify_user_with_email": false,
    "items": [],
    "order_url": "https://accept.paymobsolutions.com/i/nYWD",
    "commission_fees": 0,
    "delivery_fees_cents": 0,
    "delivery_vat_cents": 0,
    "payment_method": "tbc",
    "merchant_staff_tag": null,
    "api_source": "OTHER",
    "pickup_data": null,
    "delivery_status": []
  },
  "created_at": "2020-03-25T18:39:44.719228",
  "transaction_processed_callback_responses": [],
  "currency": "EGP",
  "source_data": {
    "pan": "2346",
    "type": "card",
    "sub_type": "MasterCard"
  },
  "api_source": "IFRAME",
  "terminal_id": null,
  "is_void": false,
  "is_refund": false,
  "data": {
    "acq_response_code": "00",
    "avs_acq_response_code": "Unsupported",
    "klass": "VPCPayment",
    "receipt_no": "008603626261",
    "order_info": "claudette09@exa.com",
    "message": "Approved",
    "gateway_integration_pk": 6741,
    "batch_no": "20200325",
    "card_num": null,
    "secure_hash": "832F4673452F9538CCD57D6B07B74183A0EEB1BEF7CA58704E31B244E8366549",
    "avs_result_code": "Unsupported",
    "card_type": "MC",
    "merchant": "TEST999999EGP",
    "created_at": "2020-03-25T16:40:37.127504",
    "merchant_txn_ref": "6741_572e773a5a0f55ff8de91876075d023e",
    "authorize_id": "626261",
    "currency": "EGP",
    "amount": "100",
    "transaction_no": "2090026774",
    "txn_response_code": "0",
    "command": "pay"
  },
  "is_hidden": false,
  "payment_key_claims": {
    "lock_order_when_paid": true,
    "integration_id": 6741,
    "billing_data": {
      "email": "claudette09@exa.com",
      "building": "8028",
      "apartment": "803",
      "street": "Ethan Land",
      "country": "CR",
      "state": "Utah",
      "last_name": "Nicolas",
      "first_name": "Clifford",
      "postal_code": "01898",
      "extra_description": "NA",
      "phone_number": "+86(8)9135210487",
      "floor": "42",
      "city": "Jaskolskiburgh"
    },
    "order_id": 4778239,
    "user_id": 4705,
    "pmk_ip": "197.57.37.135",
    "exp": 1585157836,
    "currency": "EGP",
    "amount_cents": 100
  },
  "error_occured": false,
  "is_live": false,
  "other_endpoint_reference": null,
  "refunded_amount_cents": 0,
  "source_id": -1,
  "is_captured": false,
  "captured_amount": 0,
  "merchant_staff_tag": null,
  "owner": 4705,
  "parent_transaction": null
},
"type": "TRANSACTION"
})")
app.post("/",(req,res)=>{
  const pay=collection(db,"paymob")
  const r=req.body
  
})
app.listen(port,()=>{
    console.log("server is run ........... ")
})

