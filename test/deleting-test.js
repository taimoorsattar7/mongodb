const assert = require('assert');
const PersonChar = require('../models/person');

// Describe our tests
describe('Deleting records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new PersonChar({
      name: 'taimoor'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Deletes a record from the database', function(done){

    PersonChar.findOneAndRemove({name: 'taimoor'}).then(function(result){

      PersonChar.findOne({name: 'taimoor'}).then(function(result){
        assert(result === null);
        done();
      });

    });

  });

});