const assert = require('assert');
const PersonChar = require('../models/person');

// Describe our tests
describe('Finding records', function(){
  var char;
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new PersonChar({
      name: 'Umer',
      gender: 'Male'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Finds a record from the database', function(done){
    PersonChar.findOne({name: 'Umer'}).then(function(result){
      assert(result.name === 'Umer');
      done();
    });
  });

  it('Finds a record by unique id', function(done){
    PersonChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });

});
