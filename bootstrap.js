const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviereview', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected to mongoDB!')
});