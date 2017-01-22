var crypto = require('crypto-js');

var secretMessage = {
	name: 'Rohan',
	secretName : '007'
};

var secretKey = '123abc';


//Encrypt
var objectToString = JSON.stringify(secretMessage);
var encryptedMessage = crypto.AES.encrypt(objectToString,secretKey);
console.log('Encrypted Message: '+encryptedMessage);

//Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decyptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log(decyptedMessage);
console.log(decyptedMessage.secretName);	