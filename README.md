# JS Objects

Today we focused into Objects as a data structure. In other languages these are called `Hash`es, `Dictionary` or `Associative Arrays`.

Objects store their values as key-value pairs, which work similarly to the way an index works in an array. The `key` is always a string value, any non-string values will be converted to strings before they are added to an object. The `value` can be any data type which we could assign to a variable, including other `object`s, `array`s and even `function`s.

## Declaring Objects

The easiest way to create an object is to use the Object Literal syntax.

```javascript
var person = { name: "Dave" };
```

## Reading values from objects

There are two ways to access value from an object.

### Dot notation

```javascript
console.log(person.name);
// > "Dave"
```

### Bracket notation (aka Subscripting)

```javascript
console.log(person["name"]);
// > "Dave"
```

We could also assign a variable to the value of the key we want to look up and use the value of that variable instead:

```javascript
var key = "name";
console.log(person[key]);
// > "Dave"
```

## Writing values to objects

We can also use both of the above methods to set key-value pairs into an object as well.

### Dot notation

```javascript
person.lastName = "Mills";
console.log(person);
// > { name: "Dave", lastName: "Mills" }
```

### Bracket notation (aka Subscripting)

```javascript
person["lastName"] = "Mills";
console.log(person);
// > { name: "Dave", lastName: "Mills" }
```

Just like with reading, we can also assign a variable and use that to set the key to the given value

```javascript
var key = "lastName";
person[key] = "Mills";
console.log(person);
// > { name: "Dave", lastName: "Mills" }
```

## When to use dot notation vs bracket notation.

In general, when you know the structure of the object at write time, then you can use dot notation to access values. In other words, if you've constructed an object literal or reading an object from another source, you should know what the structure is and be able to use the dot notation.

However, when you don't know the structure of the object before hand, you should use the bracket notation instead. This is often the case when we're using the object as a data structure to hold onto values as we work with the data in our applications.

## Demo

In our demo today, we tackled the second part of the Advent of Code challenge. In this case we had to try to find the first frequency which was repeated after the list of changes had been applied.

> https://adventofcode.com/2018/day/1

1. First we refactored our original implementation to separate the conversion of each of the strings to integers into an initial step.
   - [Code](https://github.com/daegren/lhl-web-may27-w1d3-objects/commit/e8554915c518c34abc13fad74e4365b72a4762f2)
2. We also refactored the code to move the code which calculates the solution for Part 1 into it's own function, taking in the array of integers as a parameter, and returning the result.
   - [Code](https://github.com/daegren/lhl-web-may27-w1d3-objects/commit/f0a72def07303e17bfdbb09e99b2488489b95879)
3. Once we had separated those pieces we were then able to write another function which takes in the list of frequency changes and used an object to keep track of all of the frequencies we find as we work through the list of changes.
   - [Code](https://github.com/daegren/lhl-web-may27-w1d3-objects/commit/623e1b8f3e58db85610f752b0caa4822bdd5d999)

You can find the code for this [here][code-demo]

[code-demo]: https://github.com/daegren/lhl-web-may27-w1d3-objects
