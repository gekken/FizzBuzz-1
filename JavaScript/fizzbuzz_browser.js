//an object, or associative array, (hash in ruby)
// js does not allow integer keys
var buzzers = {'3': 'fizz', '5': 'buzz'};

// converts one number at a time
// and returns the fizzbuzzed string
var convertBuzzer = function (buzzers, number) {
  'use strict';
  var converted = '';
  for (var buzzer in buzzers) {
    // js hack for 'for..in' just in case there are inherited
    // properties in the object being fizzed
    if (buzzers.hasOwnProperty(buzzer)) {
      // js: purposely using == instead of === to convert buzzer string to integer
      if (number % buzzer == 0) { //jshint ignore:line
        converted += buzzers[buzzer];
      }
    }
  }
  return (converted === '') ? number : converted;
};

// loops through to a maximum number
// and returns an output string
var fizzbuzz = function(buzzers, max) {
  'use strict';
  var output = '';
  for (var count = 1; count <= max; count++ ) {
    output += '\n' + convertBuzzer(buzzers, count);
  }
  return output;
};

var preformattedTextElement = document.createElement('pre');
preformattedTextElement.appendChild(document.createTextNode(fizzbuzz(buzzers,100)));
var fizzhere = document.getElementById('fizzhere');
fizzhere.appendChild(preformattedTextElement);
