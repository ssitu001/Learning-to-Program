function getUserName() {
  var userName = prompt("Hello, what's your name?");

  if (!userName) {
    userName = prompt("You didn't enter a name. Really, what's your name?");
  }
  return userName;
}

var phoneNumber = prompt("Hello, " + userName + " what's your phone number?");

var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
var areaCode = phoneMatches[1];
var userLocation = kbValues.areaCodes[areaCode];

var output = '<h1>Hello, ' + userName + 'from' + userLocation + '!</h1>';

if (phoneNumberPattern.test(phoneNumber)) {
  output =  output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber +
                          ' viewed on: ' + kbValues.currentTime + '</p>';
} else {
  output = output + '<h2>That number is invalid: ' + phoneNumber + '</h2>';
}

//document.body.innerHTML = output;
