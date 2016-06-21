//Get userName
function getUserName() {
  var userName = prompt("Hello, what's your name?");

  if (!userName) {
    userName = prompt("You didn't enter a name. Really, what's your name?");
  }
  return userName;
}

//Get phoneNumber
function getPhoneNumber(userName) {
  var phoneNumber = prompt("Hello, " + userName + " what's your phone number?");

  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt('Please enter a valid phone number');
  }
  return phoneNumber;
}

//Validate the phoneNumbe
function validatePhoneNumber(phoneNumber) {
  return phoneNumber.match(/(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/);
}

//Determine location based on phone number
function getLocation(phoneNumber) {
  //phone pattern
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
  //get matches from phoneNumber
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCodes, areaCode, locationName;

  if(phoneMatches) {
      areaCode = phoneMatches[1];
      areaCodes = getAreaCodes();
      locationName = areaCodes[areaCode];
  }
  return locationName ? locationName : "somewhere";
}


//var areaCode = phoneMatches[1];
//var userLocation = kbValues.areaCodes[areaCode];

// var output = '<h1>Hello, ' + userName + 'from' + userLocation + '!</h1>';

// if (phoneNumberPattern.test(phoneNumber)) {
//   output =  output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber +
//                           ' viewed on: ' + kbValues.currentTime + '</p>';
// } else {
//   output = output + '<h2>That number is invalid: ' + phoneNumber + '</h2>';
// }

//document.body.innerHTML = output;
