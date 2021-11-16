let knexDB = require('knex')({
    client:'mssql',
    connection: {
        host:'172.16.221.20\\CADDB',
        user:'reporting',
        password:'reporting',
        database:'CAD',
        "options":{
            "encrypt": true,
            "enableArithAbort": true
        }
    }
});




module.exports = knexDB;