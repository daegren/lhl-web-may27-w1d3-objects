var fs = require("fs");

var input = fs.readFileSync("./input.txt").toString();

// console.log(input);

var numberStrings = input.split("\n");

var changes = [];

for (var i = 0; i < numberStrings.length; i++) {
  var string = numberStrings[i];

  var number = parseInt(string, 10);

  if (!isNaN(number)) {
    changes.push(number);
  }
}

var findTotalFrequencyChange = function(changes) {
  var total = 0;
  for (var i = 0; i < changes.length; i++) {
    var number = changes[i];
    total = total + number;
  }
};
var total = findTotalFrequencyChange(changes);
console.log(total);

var findFirstRepeatedFrequency = function(changes) {
  // Use an object to keep track of all the frequencies that the algorithm below will find.
  var foundFrequencies = {};
  var runningFrequency = 0;

  // Loop forever, be careful with this as it could cause an infinite loop
  while (true) {
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      // Change the running frequency based on the current change value
      runningFrequency += change;

      // If the value of the running frequency is found in the object
      if (foundFrequencies[runningFrequency]) {
        // Return the running frequency as we've already hit it once.
        // This will also break out of the while loop.
        return runningFrequency;
      }

      // The frequency value was not found in the object
      // Store it into the object so that we can track if we hit this same frequency again.
      foundFrequencies[runningFrequency] = true;
    }
  }
};
var repeatedFrequency = findFirstRepeatedFrequency(changes);
console.log(repeatedFrequency);
