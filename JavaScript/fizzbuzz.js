// jshint multistr: true
// jshint indent:2
// jshint devel: true
// jshint node: true
'use strict';

// load in node.js built in assert library
var assert = require('assert');

//an object, or associative array, (hash in ruby)
// js does not allow integer keys
var buzzers = {'3': 'fizz', '5': 'buzz'};

// converts one number at a time
// and returns the fizzbuzzed string
var convertBuzzer = function (buzzers, number) {
  var converted = '';
  for (var buzzer in buzzers) {
    // js hack for 'for..in' just in case there are inherited
    // properties in the object being fizzed
    if (buzzers.hasOwnProperty(buzzer)) {
      // js: purposely using == instead of === to convert buzzer string to integer
      if (number % buzzer == 0) {  //jshint ignore:line
        converted += buzzers[buzzer];
      }
    }
  }
  return (converted === '') ? number : converted;
};

// loops through to a maximum number
// and returns an output string
var fizzbuzz = function(buzzers, max) {
  var output = '';
  for (var count = 1; count <= max; count++ ) {
    output += '\n' + convertBuzzer(buzzers, count);
  }
  return output;
};

console.log('Running fizzbuzz:' + fizzbuzz(buzzers,100));

var expectedFizzbuzzOutput = '\n1\n2\n\
fizz\n\
4\n\
buzz\n\
fizz\n\
7\n\
8\n\
fizz\n\
buzz\n\
11\n\
fizz\n\
13\n\
14\n\
fizzbuzz\n\
16\n\
17\n\
fizz\n\
19\n\
buzz\n\
fizz\n\
22\n\
23\n\
fizz\n\
buzz\n\
26\n\
fizz\n\
28\n\
29\n\
fizzbuzz\n\
31\n\
32\n\
fizz\n\
34\n\
buzz\n\
fizz\n\
37\n\
38\n\
fizz\n\
buzz\n\
41\n\
fizz\n\
43\n\
44\n\
fizzbuzz\n\
46\n\
47\n\
fizz\n\
49\n\
buzz\n\
fizz\n\
52\n\
53\n\
fizz\n\
buzz\n\
56\n\
fizz\n\
58\n\
59\n\
fizzbuzz\n\
61\n\
62\n\
fizz\n\
64\n\
buzz\n\
fizz\n\
67\n\
68\n\
fizz\n\
buzz\n\
71\n\
fizz\n\
73\n\
74\n\
fizzbuzz\n\
76\n\
77\n\
fizz\n\
79\n\
buzz\n\
fizz\n\
82\n\
83\n\
fizz\n\
buzz\n\
86\n\
fizz\n\
88\n\
89\n\
fizzbuzz\n\
91\n\
92\n\
fizz\n\
94\n\
buzz\n\
fizz\n\
97\n\
98\n\
fizz\n\
buzz';

assert.equal(fizzbuzz(buzzers,100),expectedFizzbuzzOutput);
