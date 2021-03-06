
var currentDate = new Date();
var kbValues = {};

function getAreaCodes() {
  return kbValues.areaCodes; 
}

kbValues.projectName = 'kittenbook';
kbValues.versionNumber = '0.0.1';
kbValues.areaCodes = {
    '201':  'New Jersey',
    '202':  'District of Columbia',
    '203':  'Connecticut',
    '204':  'Manitoba',
    '205':  'Alabama',
    '206':  'Washington',
    '207':  'Maine',
    '208':  'Idaho',
    '209':  'California',
    '210':  'Texas',
    '212':  'New York',
    '213':  'California',
    '214':  'Texas',
    '215':  'Pennsylvania',
    '216':  'Ohio',
    '217':  'Illinois',
    '218':  'Minnesota',
    '219':  'Indiana',
    '224':  'Illinois',
    '225':  'Louisiana',
    '228':  'Mississippi',
    '229':  'Georgia',
    '231':  'Michigan',
    '234':  'Ohio',
    '239':  'Florida',
    '240':  'Maryland',
    '242':  'Bahamas',
    '246':  'Barbados',
    '248':  'Michigan',
    '250':  'British Columbia',
    '251':  'Alabama',
    '252':  'North Carolina',
    '253':  'Washington',
    '254':  'Texas',
    '256':  'Alabama',
    '260':  'Indiana',
    '262':  'Wisconsin',
    '264':  'Anguilla',
    '267':  'Pennsylvania',
    '268':  'Antigua/Barbuda',
    '269':  'Michigan',
    '270':  'Kentucky',
    '276':  'Virginia',
    '281':  'Texas',
    '284':  'British Virgin Islands',
    '289':  'Ontario',
    '301':  'Maryland',
    '302':  'Delaware',
    '303':  'Colorado',
    '304':  'West Virginia',
    '305':  'Florida',
    '306':  'Saskatchewan',
    '307':  'Wyoming',
    '308':  'Nebraska',
    '309':  'Illinois',
    '310':  'California',
    '312':  'Illinois',
    '313':  'Michigan',
    '314':  'Missouri',
    '315':  'New York',
    '316':  'Kansas',
    '317':  'Indiana',
    '318':  'Louisiana',
    '319':  'Iowa',
    '320':  'Minnesota',
    '321':  'Florida',
    '323':  'California',
    '325':  'Texas',
    '330':  'Ohio',
    '334':  'Alabama',
    '336':  'North Carolina',
    '337':  'Louisiana',
    '339':  'Massachusetts',
    '340':  'US Virgin Islands',
    '345':  'Cayman Islands',
    '347':  'New York',
    '351':  'Massachusetts',
    '352':  'Florida',
    '360':  'Washington',
    '361':  'Texas',
    '386':  'Florida',
    '401':  'Rhode Island',
    '402':  'Nebraska',
    '403':  'Alberta',
    '404':  'Georgia',
    '405':  'Oklahoma',
    '406':  'Montana',
    '407':  'Florida',
    '408':  'California',
    '409':  'Texas',
    '410':  'Maryland',
    '412':  'Pennsylvania',
    '413':  'Massachusetts',
    '414':  'Wisconsin',
    '415':  'California',
    '416':  'Ontario',
    '417':  'Missouri',
    '418':  'Quebec',
    '419':  'Ohio',
    '423':  'Tennessee',
    '425':  'Washington',
    '430':  'Texas',
    '432':  'Texas',
    '434':  'Virginia',
    '435':  'Utah',
    '440':  'Ohio',
    '441':  'Bermuda',
    '443':  'Maryland',
    '450':  'Quebec',
    '456':  'NANP area',
    '469':  'Texas',
    '473':  'Grenada',
    '478':  'Georgia',
    '479':  'Arkansas',
    '480':  'Arizona',
    '484':  'Pennsylvania',
    '501':  'Arkansas',
    '502':  'Kentucky',
    '503':  'Oregon',
    '504':  'Louisiana',
    '505':  'New Mexico',
    '506':  'New Brunswick',
    '507':  'Minnesota',
    '508':  'Massachusetts',
    '509':  'Washington',
    '510':  'California',
    '512':  'Texas',
    '513':  'Ohio',
    '514':  'Quebec',
    '515':  'Iowa',
    '516':  'New York',
    '517':  'Michigan',
    '518':  'New York',
    '519':  'Ontario',
    '520':  'Arizona',
    '530':  'California',
    '540':  'Virginia',
    '541':  'Oregon',
    '551':  'New Jersey',
    '559':  'California',
    '561':  'Florida',
    '562':  'California',
    '563':  'Iowa',
    '567':  'Ohio',
    '570':  'Pennsylvania',
    '571':  'Virginia',
    '573':  'Missouri',
    '574':  'Indiana',
    '580':  'Oklahoma',
    '585':  'New York',
    '586':  'Michigan',
    '601':  'Mississippi',
    '602':  'Arizona',
    '603':  'New Hampshire',
    '604':  'British Columbia',
    '605':  'South Dakota',
    '606':  'Kentucky',
    '607':  'New York',
    '608':  'Wisconsin',
    '609':  'New Jersey',
    '610':  'Pennsylvania',
    '612':  'Minnesota',
    '613':  'Ontario',
    '614':  'Ohio',
    '615':  'Tennessee',
    '616':  'Michigan',
    '617':  'Massachusetts',
    '618':  'Illinois',
    '619':  'California',
    '620':  'Kansas',
    '623':  'Arizona',
    '626':  'California',
    '630':  'Illinois',
    '631':  'New York',
    '636':  'Missouri',
    '641':  'Iowa',
    '646':  'New York',
    '647':  'Ontario',
    '649':  'Turks & Caicos Islands',
    '650':  'California',
    '651':  'Minnesota',
    '660':  'Missouri',
    '661':  'California',
    '662':  'Mississippi',
    '664':  'Montserrat',
    '670':  'CNMI',
    '671':  'Guam',
    '678':  'Georgia',
    '682':  'Texas',
    '701':  'North Dakota',
    '702':  'Nevada',
    '703':  'Virginia',
    '704':  'North Carolina',
    '705':  'Ontario',
    '706':  'Georgia',
    '707':  'California',
    '708':  'Illinois',
    '709':  'Newfoundland',
    '710':  'US',
    '712':  'Iowa',
    '713':  'Texas',
    '714':  'California',
    '715':  'Wisconsin',
    '716':  'New York',
    '717':  'Pennsylvania',
    '718':  'New York',
    '719':  'Colorado',
    '720':  'Colorado',
    '724':  'Pennsylvania',
    '727':  'Florida',
    '731':  'Tennessee',
    '732':  'New Jersey',
    '734':  'Michigan',
    '740':  'Ohio',
    '754':  'Florida',
    '757':  'Virginia',
    '758':  'St. Lucia',
    '760':  'California',
    '763':  'Minnesota',
    '765':  'Indiana',
    '767':  'Dominica',
    '770':  'Georgia',
    '772':  'Florida',
    '773':  'Illinois',
    '774':  'Massachusetts',
    '775':  'Nevada',
    '778':  'British Columbia',
    '780':  'Alberta',
    '781':  'Massachusetts',
    '784':  'St. Vincent & Grenadines',
    '785':  'Kansas',
    '786':  'Florida',
    '787':  'Puerto Rico',
    '801':  'Utah',
    '802':  'Vermont',
    '803':  'South Carolina',
    '804':  'Virginia',
    '805':  'California',
    '806':  'Texas',
    '807':  'Ontario',
    '808':  'Hawaii',
    '809':  'Dominican Republic',
    '810':  'Michigan',
    '812':  'Indiana',
    '813':  'Florida',
    '814':  'Pennsylvania',
    '815':  'Illinois',
    '816':  'Missouri',
    '817':  'Texas',
    '818':  'California',
    '819':  'Quebec',
    '828':  'North Carolina',
    '830':  'Texas',
    '831':  'California',
    '832':  'Texas',
    '843':  'South Carolina',
    '845':  'New York',
    '847':  'Illinois',
    '848':  'New Jersey',
    '850':  'Florida',
    '856':  'New Jersey',
    '857':  'Massachusetts',
    '858':  'California',
    '859':  'Kentucky',
    '860':  'Connecticut',
    '862':  'New Jersey',
    '863':  'Florida',
    '864':  'South Carolina',
    '865':  'Tennessee',
    '867':  'Yukon, NW Terr., Nunavut',
    '868':  'Trinidad & Tobago',
    '869':  'St. Kitts & Nevis',
    '870':  'Arkansas',
    '876':  'Jamaica',
    '878':  'Pennsylvania',
    '880':  'NANP area',
    '881':  'NANP area',
    '882':  'NANP area',
    '901':  'Tennessee',
    '902':  'Nova Scotia',
    '903':  'Texas',
    '904':  'Florida',
    '905':  'Ontario',
    '906':  'Michigan',
    '907':  'Alaska',
    '908':  'New Jersey',
    '909':  'California',
    '910':  'North Carolina',
    '912':  'Georgia',
    '913':  'Kansas',
    '914':  'New York',
    '915':  'Texas',
    '916':  'California',
    '917':  'New York',
    '918':  'Oklahoma',
    '919':  'North Carolina',
    '920':  'Wisconsin',
    '925':  'California',
    '928':  'Arizona',
    '931':  'Tennessee',
    '936':  'Texas',
    '937':  'Ohio',
    '939':  'Puerto Rico',
    '940':  'Texas',
    '941':  'Florida',
    '947':  'Michigan',
    '949':  'California',
    '952':  'Minnesota',
    '954':  'Florida',
    '956':  'Texas',
    '970':  'Colorado',
    '971':  'Oregon',
    '972':  'Texas',
    '973':  'New Jersey',
    '978':  'Massachusetts',
    '979':  'Texas',
    '980':  'North Carolina',
    '985':  'Louisiana',
    '989':  'Michigan'
  };

kbValues.currentTime = currentDate.getFullYear() + '-' + 
                  (currentDate.getMonth() + 1) + '-' + 
                  currentDate.getDate() + ' at ' + 
                  currentDate.getHours() + ':' + 
                  currentDate.getMinutes() + ':' + 
                  currentDate.getSeconds();

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



function getImages () {
  var images = document.querySelectorAll('div.userContentWrapper img');
  //console.log(images);
  for (var i = 0; i < images.length; i++) {
    console.log(images[i].src);
  }
  return images;
}


function getImageHeight(image) {
  return image.height;
}

function getImageWidth(image) {
  return image.width;
}

function replaceImages(images, location) {
  var baseImageUrl, height, width, image;
  switch (location) {
    case 'somewhere':
      baseImageUrl = 'http://placepuppy.it/';
      break;
    default:
      baseImageUrl = 'http://placekitten.com/g/';
      break;
  }
  for (var i=0; i < images.length; i++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }
}

function main() {
  var userName = getUserName();
  var phoneNumber = getPhoneNumber(userName);
  var location = getLocation(phoneNumber);
  var images = getImages();

  setInterval(function() {
    images = getImages();
    replaceImages(images, location);
  }, 3000);
}

main();