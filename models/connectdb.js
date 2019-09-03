const moment = require('moment');
moment.locale('th');

var mssql = require('mssql')
const config = {
    user: 'dev01',
    password: 'D3v0!',
    server: '172.18.60.3', 
    database: 'kpi_ticket',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}
module.exports = {
    connect: function() {
        mssql.connect(config, function (err) {
            if (err) console.log(moment().format('DD/MM/YYYY HH:mm:ss') + " - Error : " + err);
        })
    },
    query:function(sql,callback){
        mssql.connect(config, function (err) {
            if (err) callback(err);
            mssql.query(sql, function (err, result, fields) {
                if (err){
                    console.log(moment().format('DD/MM/YYYY HH:mm:ss') + " - Error : " + err);
                    callback(err);
                  };
                mssql.close( function(err){
                    if (err) callback(err);
                });
                callback(result.recordsets[0]);
            });
        });
    },
    disconnect: function () {
        mssql.close();
    }

}