# Chronal Calibration

> https://adventofcode.com/2018/day/1

## Questions

- How do we process our input?
  - Use the `fs.readFileSync` function to read in the `input.txt` file. Use `.toString()` to convert the buffer to a string.
- How do we store the input before processing?
  - Use `String.split("\n")` to split the input on each new line.
- How do we parse a string with a plus sign?
  - Use `parseInt()`
- How do we iterate through the input?
  - `for(initial; condition; incrementor)`

## Goal

Sum all the numbers in the list together to save Santa & Christmas!
