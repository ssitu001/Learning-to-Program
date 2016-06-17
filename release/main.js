
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

document.body.innerHTML = '<h1>Hello ' + userName + ' !</h1>' + 
                          '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber +
                          ' viewed on: ' + kbValues.currentTime + '</p>';


var images = document.querySelectorAll('div.userContentWrapper img');