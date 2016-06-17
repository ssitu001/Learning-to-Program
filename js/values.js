
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
