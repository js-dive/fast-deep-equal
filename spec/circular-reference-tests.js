'use strict';

var b = {};
b.b = b;

var c = {};
c.b = c;

var d = {};
d.a = 1;
d.b = d;

var e = {};
e.a = 1;
e.b = e.a;

module.exports = [
  {
    description: 'circular references',
    tests: [
      {
        description: 'two self-referencing objects',
        value1: b,
        value2: c,
        equal: true
      }, {
        description: 'two deeply self-referencing objects',
        value1: d,
        value2: e,
        equal: false
      }
    ]
  }
];