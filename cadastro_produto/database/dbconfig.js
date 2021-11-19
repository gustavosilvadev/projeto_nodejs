let knexDB = require('knex')({
    client:'mysql',
    connection: {
        host:'localhost',
        user:'root',
        password:'',
        database:'db_mtrix',
        "options":{
            "encrypt": true,
            "enableArithAbort": true
        }
    }
});




module.exports = knexDB;