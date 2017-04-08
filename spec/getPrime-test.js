(function() {
  'use strict';
  var getprimes = require('../lib/getPrimes.js');

  describe("Prime Numbers tests ", function() {
  describe("Case for wrong dataTypes", function() {

    it("should return 'expecting a number' for null", function() {
      expect(getprimes(null)).toEqual('expecting a number');
    });

    it("should return 'expecting a number' for 'fake'", function() {
      expect(getprimes('fake')).toEqual('expecting a number');
    });

  });

  describe("Case for numbers less than 1", function() {

    it("should return  `expecting only numbers greater than 0` for 0", function() {
      expect(getprimes(0)).toBe('expecting only numbers greater than 0');
    });

    it("should return  for `expecting only numbers greater than 0` for -5", function() {
      expect(getprimes(-5)).toBe('expecting only numbers greater than 0');
    });

  });

  describe("Case for Natural Numbers", function() {

    it("should return [] for 1", function() {
      expect(getprimes(1)).toEqual([]);
    });

    it("should return [2,3,5] for 5", function() {
      expect(getprimes(5)).toEqual([2,3,5]);
    });

    it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97 ] for 100", function() {
      expect(getprimes(100)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
    });


  });


});

})();