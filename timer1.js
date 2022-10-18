// Import process module to grab command line arguments
const process = require('process');

//Function that takes in a number and returns a beep if the user returns a number
const beep = function () {
  process.stdout.write('\x07');
}
const scheduleBeep = function (interval) {
  //convert user input to a number
  interval = Number(interval)
  // validate user input
  if (!isNaN(interval) && interval > 0) {
    setTimeout(beep, interval * 1000)
  }
}
  // loop through user CMD line arguments
  for (let i = 2; i < inputTime.length; i++) {
  scheduleBeep(inputTime[i])
};