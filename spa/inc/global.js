var mysql = require("mysql");

module.exports =  {
    GetConnection: function(){
        var conn = mysql.createConnection({
          host: "localhost",
          user: "n02619263",
          password: "Killmaster08",
          database: "c9"
        });
    return conn;
}
};