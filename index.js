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

var total = 0;
for (var i = 0; i < changes.length; i++) {
  var number = changes[i];
  total = total + number;
}

console.log(total);
