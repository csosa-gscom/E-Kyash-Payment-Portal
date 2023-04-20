const CryptoJS = require("crypto-js");
var apiKey = "APPKEY17-07A8-4BAF-AA0F-B1568C5017A3";
var header = {
"alg": "HS256",
"typ": "JWT"
};
var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
var encodedHeader = CryptoJS.enc.Base64.stringify(stringifiedHeader);
var data = {
    "sid": "4951091037",
    "pinHash": "62baa44d7cf5b1359f19b1f536512dbe5713a94b04aeda70bf64456d3615eb64",
    "pushkey": "{{pushkey}}"
};
var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
var encodedData = CryptoJS.enc.Base64.stringify(stringifiedData);
var token = encodedHeader + "." + encodedData;
var signature = CryptoJS.HmacSHA256(token, apiKey);
signature = CryptoJS.enc.Base64.stringify(signature);
var jwtToken = token + "." + signature;

console.log("encodedHeader: ", encodedHeader);
console.log("encodedData: ", encodedData);
console.log("signature: ", signature);

console.log(jwtToken);
