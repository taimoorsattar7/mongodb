const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/myapp');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connection.once('open', function(){
    console.log('Connection has been made');
}).on('error', function(error){
    console.log('Connection error:', error);
});
