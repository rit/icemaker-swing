'use strict';

var Q = require('q');
var expect = require('chai').expect;

var swing = require('./mekong-swing');

describe("swing", function() {
  it("runs expects in the current context after resolved", function(done) {
    var wire = Q.defer();
    setTimeout(() => wire.resolve(1), 0);

    swing(wire.promise, done, (value) => {
      expect(value).to.equal(1);
    });
  });

  it("runs expects in the current context after rejected", function(done) {
    var wire = Q.defer();
    setTimeout(() => wire.reject(1), 0);

    swing(wire.promise, done, (value) => {
      expect(value).to.equal(1);
    });
  });
});
