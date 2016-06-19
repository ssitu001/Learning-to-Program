
var currentDate = new Date();
var kbValues = {};

kbValues.projectName = 'kittenbook';
kbValues.versionNumber = '0.0.1';

kbValues.currentTime = currentDate.getFullYear() + '-' + 
                  (currentDate.getMonth() + 1) + '-' + 
                  currentDate.getDate() + ' at ' + 
                  currentDate.getHours() + ':' + 
                  currentDate.getMinutes() + ':' + 
                  currentDate.getSeconds();

var userName = prompt("Hello, what's your name?");

var phoneNumber = prompt("Hello, " + userName + " what's your phone number?");

var phoneNumberPattern = /1?-?\(?\d{3}[\-\)]\d{3}-\d{4}/;

var output = '<h1>Hello, ' + userName + '!</h1>';

if (phoneNumberPattern.test(phoneNumber)) {
  output =  output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber +
                          ' viewed on: ' + kbValues.currentTime + '</p>';
} else {
  output = output + '<h2>That number is invalid: ' + phoneNumber + '</h2>';
}

document.body.innerHTML = output;

var images = document.querySelectorAll('div.userContentWrapper img');