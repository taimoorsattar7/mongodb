const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const PersonSchema = new Schema({
    name: String,
    gender: String
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;