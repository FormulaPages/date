var date = require('./DATE');
var assert = require('assert');
var error = require('formula-errors');

describe('date', function() {
  it('should return a serial number', function() {
    assert( date(2008,1,1) === 39448 );
  });
})
  
