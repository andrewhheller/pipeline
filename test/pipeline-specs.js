const expect = require('chai').expect;
const pipeline = require('../pipeline.js');
const pipelineAsync = require('../aSyncPipeline.js');



describe('it is a function', () => {

  it('pipeline exists', ( ) => {
    expect(pipeline).be.a('function');
  });

  it('pipeline takes a string and returns an integer', () => {
    expect(pipeline('set 1 | add 1 | mult 21')).to.be.a('number');
    expect(pipeline('set 1 | mult 10 | mult 4 | add 3')).to.equal(43);
  });

});

describe('pipelineAsync is: ', ()=> {
  it('is a function', ()=> {
    expect(pipelineAsync).be.a('function');
  });
  it('takes a string and returns an integer', ()=> {
    expect(pipelineAsync('set 0, addFromeFile /files/foo.txt | add 1 | mult 21', (err, result)=> {
      console.log(err);
      console.log(result);
    })).to.equal(42);
  });
});