var mongoose = require('mongoose'),
    seeder = require('mongoose-seeder'),
    data = require('./seeds/restaurants.json');

if (process.env.NODE_ENV === 'production') {
    mongoose.connect('mongodb://heroku_ncj5lwf2:cc4bcejjtvbrk0pe51dg42kmsd@ds023458.mlab.com:23458/heroku_ncj5lwf2')
} else {
    mongoose.connect('mongodb://localhost/dailymumm');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    console.log("Connected to Database DailyMumm");
    seeder.seed(data, { dropCollections: true }).then(function(dbData) {
        console.log('Restaurants are stored in dbData');
    }).catch(function(err) {
        console.log('Error ' + err);
    });
});
module.exports = mongoose;
