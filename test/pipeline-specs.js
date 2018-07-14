const expect = require('chai').expect;

const pipeline = require('../pipeline.js');

describe('it is a function', () => {

  it('pipeline exists', ( ) => {
    expect(pipeline).be.a('function');
  });

  it('pipeline takes a string and returns an array', () => {
    expect(pipeline('set 1 | add 1 | mult 21')).to.be.a('number');
    expect(pipeline('set 1 | mult 10 | mult 4 | add 3')).to.equal(43);
  });

});
