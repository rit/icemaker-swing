'use strict';

var Q = require('q');

/*
 * Swing promises' execution like a pendulum
 */
function swing(promise, finishSpec, currentContextFunc) {
  var wire = Q.defer();

  // Angular's $q does not have `done` method
  var next = (value) => wire.resolve(value);
  promise.then(next, next);

  wire.promise.done((value) => {
    try {
      currentContextFunc(value);
      finishSpec();
    } catch (e) {
      finishSpec(e);
    }
  });
}

module.exports = swing;
