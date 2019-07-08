var env = process.env.NODE_ENV || 'development',
    config = require('./config')[env],
    mongoose = require('mongoose');

module.exports = () => {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db, { useMongoClient: true });
    mongoose.connect.on('error', (err) => {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    }).on('open', () => {
        console.log('Connection extablised with MongoDB');
    });

    return db;
};
