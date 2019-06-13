const assert = require('assert');
const PersonChar = require('../models/person');

// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){

    const char = new PersonChar({
      name: 'Ali'
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });

  });

});