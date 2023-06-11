'use strict';

var equal = require('..');
var assert = require('assert');

testCases(equal, 'equal - standard tests', require('./tests'));
testCases(equal, 'equal circular reference - gogoend tests', require('./circular-reference-tests'));
testCases(equal, 'equal - es6 tests', require('./es6tests'));

function testCases(equalFunc, suiteName, suiteTests) {
  describe(suiteName, function() {
    suiteTests.forEach(function (suite) {
      describe(suite.description, function() {
        suite.tests.forEach(function (test) {
          (test.skip ? it.skip : it)(test.description, function() {
            assert.strictEqual(equalFunc(test.value1, test.value2), test.equal);
          });
          (test.skip ? it.skip : it)(test.description + ' (reverse arguments)', function() {
            assert.strictEqual(equalFunc(test.value2, test.value1), test.equal);
          });
        });
      });
    });
  });
}