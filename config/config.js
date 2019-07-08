module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://127.0.0.1/keystore',
        app: {
            name: 'keystore'
        }
    },
    production: {
        db: 'mongodb+srv://mongo_user:<password>@myclusterdb-eeuzf.mongodb.net/keystore?retryWrites=true&w=majority',
        app: {
            name: 'keystore'
        }
    }
};
