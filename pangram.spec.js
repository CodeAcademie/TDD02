//var Pangram = require('./pangram');

describe('Pangram()', function()  {

  it('empty sentence', function() {
    var pangram = new Pangram('');
    expect(pangram.isPangram()).toBe(false);
  });

});
