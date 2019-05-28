var fs = require("fs");

var input = fs.readFileSync("./input.txt").toString();

// console.log(input);

var numberStrings = input.split("\n");

var total = 0;

for (var i = 0; i < numberStrings.length; i++) {
  var string = numberStrings[i];

  var number = parseInt(string, 10);

  if (!isNaN(number)) {
    total = total + number;
    
    // total += number;
  }
}

console.log(total);
